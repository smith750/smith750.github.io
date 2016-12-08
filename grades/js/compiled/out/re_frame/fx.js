// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__8328){
var vec__8329 = p__8328;
var k = cljs.core.nth.call(null,vec__8329,(0),null);
var value = cljs.core.nth.call(null,vec__8329,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__8332 = cljs.core.seq.call(null,value);
var chunk__8333 = null;
var count__8334 = (0);
var i__8335 = (0);
while(true){
if((i__8335 < count__8334)){
var map__8336 = cljs.core._nth.call(null,chunk__8333,i__8335);
var map__8336__$1 = ((((!((map__8336 == null)))?((((map__8336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8336):map__8336);
var effect = map__8336__$1;
var ms = cljs.core.get.call(null,map__8336__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__8336__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__8332,chunk__8333,count__8334,i__8335,map__8336,map__8336__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__8332,chunk__8333,count__8334,i__8335,map__8336,map__8336__$1,effect,ms,dispatch))
,ms);
}

var G__8340 = seq__8332;
var G__8341 = chunk__8333;
var G__8342 = count__8334;
var G__8343 = (i__8335 + (1));
seq__8332 = G__8340;
chunk__8333 = G__8341;
count__8334 = G__8342;
i__8335 = G__8343;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8332);
if(temp__4657__auto__){
var seq__8332__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8332__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8332__$1);
var G__8344 = cljs.core.chunk_rest.call(null,seq__8332__$1);
var G__8345 = c__7220__auto__;
var G__8346 = cljs.core.count.call(null,c__7220__auto__);
var G__8347 = (0);
seq__8332 = G__8344;
chunk__8333 = G__8345;
count__8334 = G__8346;
i__8335 = G__8347;
continue;
} else {
var map__8338 = cljs.core.first.call(null,seq__8332__$1);
var map__8338__$1 = ((((!((map__8338 == null)))?((((map__8338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8338):map__8338);
var effect = map__8338__$1;
var ms = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__8338__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__8332,chunk__8333,count__8334,i__8335,map__8338,map__8338__$1,effect,ms,dispatch,seq__8332__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__8332,chunk__8333,count__8334,i__8335,map__8338,map__8338__$1,effect,ms,dispatch,seq__8332__$1,temp__4657__auto__))
,ms);
}

var G__8348 = cljs.core.next.call(null,seq__8332__$1);
var G__8349 = null;
var G__8350 = (0);
var G__8351 = (0);
seq__8332 = G__8348;
chunk__8333 = G__8349;
count__8334 = G__8350;
i__8335 = G__8351;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__8352 = cljs.core.seq.call(null,value);
var chunk__8353 = null;
var count__8354 = (0);
var i__8355 = (0);
while(true){
if((i__8355 < count__8354)){
var event = cljs.core._nth.call(null,chunk__8353,i__8355);
re_frame.router.dispatch.call(null,event);

var G__8356 = seq__8352;
var G__8357 = chunk__8353;
var G__8358 = count__8354;
var G__8359 = (i__8355 + (1));
seq__8352 = G__8356;
chunk__8353 = G__8357;
count__8354 = G__8358;
i__8355 = G__8359;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8352);
if(temp__4657__auto__){
var seq__8352__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8352__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8352__$1);
var G__8360 = cljs.core.chunk_rest.call(null,seq__8352__$1);
var G__8361 = c__7220__auto__;
var G__8362 = cljs.core.count.call(null,c__7220__auto__);
var G__8363 = (0);
seq__8352 = G__8360;
chunk__8353 = G__8361;
count__8354 = G__8362;
i__8355 = G__8363;
continue;
} else {
var event = cljs.core.first.call(null,seq__8352__$1);
re_frame.router.dispatch.call(null,event);

var G__8364 = cljs.core.next.call(null,seq__8352__$1);
var G__8365 = null;
var G__8366 = (0);
var G__8367 = (0);
seq__8352 = G__8364;
chunk__8353 = G__8365;
count__8354 = G__8366;
i__8355 = G__8367;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1481235360864