// Compiled by ClojureScript 1.9.229 {}
goog.provide('grades_reframe.utils');
goog.require('cljs.core');
grades_reframe.utils.format_grade = (function grades_reframe$utils$format_grade(grade_value,delta){
return grade_value.toFixed(delta);
});
grades_reframe.utils.calculate_upper_grade = (function grades_reframe$utils$calculate_upper_grade(grade,lower_bound,delta){
var one_higher_lower_bound = (grade * (lower_bound + 0.1));
if(cljs.core._EQ_.call(null,lower_bound,0.9)){
return parseFloat(grade);
} else {
return (one_higher_lower_bound - ((cljs.core._EQ_.call(null,delta,(0)))?(1):0.1));
}
});
grades_reframe.utils.parseable_number_QMARK_ = (function grades_reframe$utils$parseable_number_QMARK_(s){
var not_nil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
return not_nil_QMARK_.call(null,cljs.core.re_find.call(null,/^\d+\.*\d*$/,s));
});
grades_reframe.utils.update_delta = (function grades_reframe$utils$update_delta(grade,current_delta){
if(cljs.core._EQ_.call(null,grade,"")){
return current_delta;
} else {
if((grade <= (10))){
return (1);
} else {
if((grade >= (40))){
return (0);
} else {
return current_delta;

}
}
}
});

//# sourceMappingURL=utils.js.map?rel=1481235361209