// Compiled by ClojureScript 1.9.229 {}
goog.provide('grades_reframe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('grades_reframe.views');
goog.require('grades_reframe.subs');
goog.require('grades_reframe.config');
goog.require('grades_reframe.events');
goog.require('re_frame.core');
grades_reframe.core.dev_setup = (function grades_reframe$core$dev_setup(){
if(cljs.core.truth_(grades_reframe.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
grades_reframe.core.mount_root = (function grades_reframe$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grades_reframe.views.main_panel], null),document.getElementById("app"));
});
grades_reframe.core.init = (function grades_reframe$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

grades_reframe.core.dev_setup.call(null);

return grades_reframe.core.mount_root.call(null);
});
goog.exportSymbol('grades_reframe.core.init', grades_reframe.core.init);

//# sourceMappingURL=core.js.map?rel=1481235361269