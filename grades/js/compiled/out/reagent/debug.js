// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__7712__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7713__i = 0, G__7713__a = new Array(arguments.length -  0);
while (G__7713__i < G__7713__a.length) {G__7713__a[G__7713__i] = arguments[G__7713__i + 0]; ++G__7713__i;}
  args = new cljs.core.IndexedSeq(G__7713__a,0);
} 
return G__7712__delegate.call(this,args);};
G__7712.cljs$lang$maxFixedArity = 0;
G__7712.cljs$lang$applyTo = (function (arglist__7714){
var args = cljs.core.seq(arglist__7714);
return G__7712__delegate(args);
});
G__7712.cljs$core$IFn$_invoke$arity$variadic = G__7712__delegate;
return G__7712;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7715__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7716__i = 0, G__7716__a = new Array(arguments.length -  0);
while (G__7716__i < G__7716__a.length) {G__7716__a[G__7716__i] = arguments[G__7716__i + 0]; ++G__7716__i;}
  args = new cljs.core.IndexedSeq(G__7716__a,0);
} 
return G__7715__delegate.call(this,args);};
G__7715.cljs$lang$maxFixedArity = 0;
G__7715.cljs$lang$applyTo = (function (arglist__7717){
var args = cljs.core.seq(arglist__7717);
return G__7715__delegate(args);
});
G__7715.cljs$core$IFn$_invoke$arity$variadic = G__7715__delegate;
return G__7715;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1481235359496