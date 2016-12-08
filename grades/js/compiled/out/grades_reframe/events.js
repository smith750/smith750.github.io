// Compiled by ClojureScript 1.9.229 {}
goog.provide('grades_reframe.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('grades_reframe.db');
goog.require('reagent.core');
goog.require('grades_reframe.utils');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return grades_reframe.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"grade-change","grade-change",-1881602321),(function (app_db,p__8555){
var vec__8556 = p__8555;
var _ = cljs.core.nth.call(null,vec__8556,(0),null);
var new_grade = cljs.core.nth.call(null,vec__8556,(1),null);
cljs.core.swap_BANG_.call(null,app_db,cljs.core.assoc,new cljs.core.Keyword(null,"grade","grade",2117054771),new_grade,new cljs.core.Keyword(null,"delta","delta",108939957),grades_reframe.utils.update_delta.call(null,new_grade,new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db))));

return app_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-delta","toggle-delta",-1836471414),(function (app_db){
var delta = new cljs.core.Keyword(null,"delta","delta",108939957).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db));
var new_delta = ((cljs.core._EQ_.call(null,delta,(0)))?(1):(0));
cljs.core.swap_BANG_.call(null,app_db,cljs.core.assoc,new cljs.core.Keyword(null,"delta","delta",108939957),new_delta);

return app_db;
}));

//# sourceMappingURL=events.js.map?rel=1481235361253