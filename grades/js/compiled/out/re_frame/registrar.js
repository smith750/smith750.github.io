// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.registrar');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
re_frame.registrar.kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"cofx","cofx",2013202907),null,new cljs.core.Keyword(null,"fx","fx",-1237829572),null], null), null);
re_frame.registrar.kind__GT_id__GT_handler = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
re_frame.registrar.get_handler = (function re_frame$registrar$get_handler(var_args){
var args8273 = [];
var len__7484__auto___8276 = arguments.length;
var i__7485__auto___8277 = (0);
while(true){
if((i__7485__auto___8277 < len__7484__auto___8276)){
args8273.push((arguments[i__7485__auto___8277]));

var G__8278 = (i__7485__auto___8277 + (1));
i__7485__auto___8277 = G__8278;
continue;
} else {
}
break;
}

var G__8275 = args8273.length;
switch (G__8275) {
case 1:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8273.length)].join('')));

}
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1 = (function (kind){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind);
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind),id);
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3 = (function (kind,id,required_QMARK_){
var handler = re_frame.registrar.get_handler.call(null,kind,id);
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__6397__auto__ = required_QMARK_;
if(cljs.core.truth_(and__6397__auto__)){
return (handler == null);
} else {
return and__6397__auto__;
}
})())){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no ",[cljs.core.str(kind)].join('')," handler registered for: ",id);
} else {
}
} else {
}

return handler;
});

re_frame.registrar.get_handler.cljs$lang$maxFixedArity = 3;

re_frame.registrar.register_handler = (function re_frame$registrar$register_handler(kind,id,handler_fn){
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_(re_frame.registrar.get_handler.call(null,kind,id,false))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: overwriting ",[cljs.core.str(kind)].join('')," handler for: ",id);
} else {
}
} else {
}

cljs.core.swap_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler_fn);

return handler_fn;
});
re_frame.registrar.clear_handlers = (function re_frame$registrar$clear_handlers(var_args){
var args8280 = [];
var len__7484__auto___8283 = arguments.length;
var i__7485__auto___8284 = (0);
while(true){
if((i__7485__auto___8284 < len__7484__auto___8283)){
args8280.push((arguments[i__7485__auto___8284]));

var G__8285 = (i__7485__auto___8284 + (1));
i__7485__auto___8284 = G__8285;
continue;
} else {
}
break;
}

var G__8282 = args8280.length;
switch (G__8282) {
case 0:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8280.length)].join('')));

}
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.PersistentArrayMap.EMPTY);
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1 = (function (kind){
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

return cljs.core.swap_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.dissoc,kind);
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,kind))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

if(cljs.core.truth_(re_frame.registrar.get_handler.call(null,kind,id))){
return cljs.core.swap_BANG_.call(null,re_frame.registrar.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null),cljs.core.dissoc,id);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: can't clear ",[cljs.core.str(kind)].join('')," handler for  ",id,".  Not found.");
}
});

re_frame.registrar.clear_handlers.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=registrar.js.map?rel=1481235360664