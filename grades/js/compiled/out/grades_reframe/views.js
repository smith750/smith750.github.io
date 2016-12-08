// Compiled by ClojureScript 1.9.229 {}
goog.provide('grades_reframe.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('grades_reframe.utils');
grades_reframe.views.grade_display = (function grades_reframe$views$grade_display(){
var grade = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grade","grade",2117054771)], null));
return ((function (grade){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The grade is ",cljs.core.deref.call(null,grade)], null);
});
;})(grade))
});
grades_reframe.views.grade_entry = (function grades_reframe$views$grade_entry(){
var grade = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grade","grade",2117054771)], null));
return ((function (grade){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Grade: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,grade),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (grade){
return (function (p1__8548_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grade-change","grade-change",-1881602321),p1__8548_SHARP_.target.value], null));
});})(grade))
], null)], null)], null)], null);
});
;})(grade))
});
grades_reframe.views.delta_entry = (function grades_reframe$views$delta_entry(){
var delta = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delta","delta",108939957)], null));
return ((function (delta){
return (function (){
var should_checked = cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,delta),(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Show decimal points? ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),should_checked,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (should_checked,delta){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-delta","toggle-delta",-1836471414)], null));
});})(should_checked,delta))
], null)], null)], null)], null);
});
;})(delta))
});
grades_reframe.views.grade_amount_row = (function grades_reframe$views$grade_amount_row(grade,delta,letter_grade,lower_bound){
var lower_grade = (grade * lower_bound);
var upper_grade = grades_reframe.utils.calculate_upper_grade.call(null,grade,lower_bound,delta);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),letter_grade], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),grades_reframe.utils.format_grade.call(null,upper_grade,delta)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),grades_reframe.utils.format_grade.call(null,lower_grade,delta)], null)], null);
});
grades_reframe.views.grade_failure_row = (function grades_reframe$views$grade_failure_row(grade,delta,letter_grade){
var upper_grade = grades_reframe.utils.calculate_upper_grade.call(null,grade,0.5,delta);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),letter_grade], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),"2"], null),grades_reframe.utils.format_grade.call(null,upper_grade,delta)," and below"], null)], null);
});
grades_reframe.views.grade_amounts_table = (function grades_reframe$views$grade_amounts_table(grade,delta){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_amount_row,grade,delta,"A",0.9], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_amount_row,grade,delta,"B",0.8], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_amount_row,grade,delta,"C",0.7], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_amount_row,grade,delta,"D",0.6], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_failure_row,grade,delta,"F"], null)], null)], null);
});
grades_reframe.views.grade_amounts_table_display = (function grades_reframe$views$grade_amounts_table_display(){
var grade = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grade","grade",2117054771)], null));
var delta = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delta","delta",108939957)], null));
return ((function (grade,delta){
return (function (){
if(cljs.core.truth_(grades_reframe.utils.parseable_number_QMARK_.call(null,cljs.core.deref.call(null,grade)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_amounts_table,cljs.core.deref.call(null,grade),cljs.core.deref.call(null,delta)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
});
;})(grade,delta))
});
grades_reframe.views.main_panel = (function grades_reframe$views$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Grades"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.delta_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.grade_amounts_table_display], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1481235361233