function calculateGradeValues(grade, invokeVarianceFunc) {
	var variance = (invokeVarianceFunc(grade)) ? 0.1 : 1;
	var filterFunc = (invokeVarianceFunc(grade)) ? function(val) { return (Math.ceil(val*10.0)/10.0); } : function(val) { return Math.ceil(val); }
	return {
		a: { low: filterFunc(grade*0.9), high: grade },
		b: { low: filterFunc(grade*0.8), high: filterFunc(((grade*0.9)-variance)) },
		c: { low: filterFunc(grade*0.7), high: filterFunc(((grade*0.8)-variance)) },
		d: { low: filterFunc(grade*0.6), high: filterFunc(((grade*0.7)-variance)) },
		f: { low: 0, high: filterFunc(((grade*0.6)-variance)) }
	}
}

var GradeFailure = React.createClass({
	render: function() {
		return (
			<p className="error">{this.props.inputGrade} cannot be processed.  Please enter a number.</p>
		);
	}
});

var GradeTableDisplay = React.createClass({
	getDefaultProps: function() {
		return {
			grade: 10,
			gradeRanges: {
				a: { low: 9, high: 10 },
				b: { low: 8, high: 8 },
				c: { low: 7, high: 7 },
				d: { low: 6, high: 6 },
				f: { low: 0, high: 5 }
			}
		}
	},
	componentWillMount: function() {
		this.props.gradeRanges = calculateGradeValues(this.props.grade, function(grade) { return grade <= 25 });
	},
	render: function() {
		this.props.gradeRanges = calculateGradeValues(this.props.grade, function(grade) { return grade <= 25 });
		return (
			<div id="grade-table">
				<table>
					<tbody>
						<tr>
							<th>A</th>
							<td>{this.props.gradeRanges.a.low} - {this.props.gradeRanges.a.high}</td>
						</tr>
						<tr>
							<th>B</th>
							<td>{this.props.gradeRanges.b.low} - {this.props.gradeRanges.b.high}</td>
						</tr>
						<tr>
							<th>C</th>
							<td>{this.props.gradeRanges.c.low} - {this.props.gradeRanges.c.high}</td>
						</tr>
						<tr>
							<th>D</th>
							<td>{this.props.gradeRanges.d.low} - {this.props.gradeRanges.d.high}</td>
						</tr>
						<tr>
							<th>F</th>
							<td>{this.props.gradeRanges.f.high} and below</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
});

var GradeOutput = React.createClass({
	isInputGradeNumeric: function(grade) {
		return _.isNumber(grade) || (_.isString(grade) && grade.match(/^\d+$/));
	},
	determineTag: function(grade) {
		if (this.isInputGradeNumeric(grade)) {
			return <GradeTableDisplay grade={parseFloat(grade)}/>
		} else {
			return <GradeFailure inputGrade={grade}/>
		}
	},
	render: function() {
		return (
			<div id="gradesOutput">
				{this.determineTag(this.props.inputGrade)}
			</div>
		);
	}
});

var GradeForm = React.createClass({
	getInitialState: function() {
		return {
			inputGrade: "10"
		}
	},
	handleChange: function(name, event) {
		this.setState({inputGrade: event.target.value});
	},
	submitHandler: function(event) {
		event.defaultPrevented = true;
	},
	isInputGradeBlank: function() {
		return _.isNull(this.state.inputGrade) || (_.isString(this.state.inputGrade) && this.state.inputGrade === "");
	},
	determineOutput: function() {
		if (!this.isInputGradeBlank()) {
			return <GradeOutput inputGrade={this.state.inputGrade}/>
		} else {
			return "";
		}
	},
	render: function() {
		return (<div id="grades">
				<div id="gradeInput">
					<form onSubmit={this.submitHandler}>
						<p>
							<label htmlForm="inputGrade">Total Score:</label>
							<input type="text" value={this.state.inputGrade} onChange={this.handleChange.bind(this,"inputGrade")}/>
						</p>
					</form>
				</div>
				{this.determineOutput()}
			</div>);
	}
});

React.render(
	<GradeForm />,
	document.getElementById("grades")
);