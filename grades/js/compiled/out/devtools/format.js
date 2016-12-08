// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__7072__auto__ = (((value == null))?null:value);
var m__7073__auto__ = (devtools.format._header[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,value);
} else {
var m__7073__auto____$1 = (devtools.format._header["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__7072__auto__ = (((value == null))?null:value);
var m__7073__auto__ = (devtools.format._has_body[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,value);
} else {
var m__7073__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__7072__auto__ = (((value == null))?null:value);
var m__7073__auto__ = (devtools.format._body[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,value);
} else {
var m__7073__auto____$1 = (devtools.format._body["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8659__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__8659__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__8659__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__8659__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__8658__auto__ = temp__4657__auto____$2;
return goog.object.get(o__8658__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8659__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__8659__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__8659__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__8659__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__8658__auto__ = temp__4657__auto____$2;
return goog.object.get(o__8658__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8659__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__8659__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__8659__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__8659__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__8658__auto__ = temp__4657__auto____$2;
return goog.object.get(o__8658__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8659__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__8659__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__8659__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__8659__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__8658__auto__ = temp__4657__auto____$2;
return goog.object.get(o__8658__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8659__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__8659__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__8659__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__8659__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__8658__auto__ = temp__4657__auto____$2;
return goog.object.get(o__8658__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8659__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__8659__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__8659__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__8659__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__8658__auto__ = temp__4657__auto____$2;
return goog.object.get(o__8658__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__8659__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__8659__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__8659__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__8659__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__8658__auto__ = temp__4657__auto____$2;
return goog.object.get(o__8658__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8680 = arguments.length;
var i__7485__auto___8681 = (0);
while(true){
if((i__7485__auto___8681 < len__7484__auto___8680)){
args__7491__auto__.push((arguments[i__7485__auto___8681]));

var G__8682 = (i__7485__auto___8681 + (1));
i__7485__auto___8681 = G__8682;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq8679){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8679));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8684 = arguments.length;
var i__7485__auto___8685 = (0);
while(true){
if((i__7485__auto___8685 < len__7484__auto___8684)){
args__7491__auto__.push((arguments[i__7485__auto___8685]));

var G__8686 = (i__7485__auto___8685 + (1));
i__7485__auto___8685 = G__8686;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq8683){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8683));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8688 = arguments.length;
var i__7485__auto___8689 = (0);
while(true){
if((i__7485__auto___8689 < len__7484__auto___8688)){
args__7491__auto__.push((arguments[i__7485__auto___8689]));

var G__8690 = (i__7485__auto___8689 + (1));
i__7485__auto___8689 = G__8690;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq8687){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8687));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8692 = arguments.length;
var i__7485__auto___8693 = (0);
while(true){
if((i__7485__auto___8693 < len__7484__auto___8692)){
args__7491__auto__.push((arguments[i__7485__auto___8693]));

var G__8694 = (i__7485__auto___8693 + (1));
i__7485__auto___8693 = G__8694;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq8691){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8691));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8696 = arguments.length;
var i__7485__auto___8697 = (0);
while(true){
if((i__7485__auto___8697 < len__7484__auto___8696)){
args__7491__auto__.push((arguments[i__7485__auto___8697]));

var G__8698 = (i__7485__auto___8697 + (1));
i__7485__auto___8697 = G__8698;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq8695){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8695));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8700 = arguments.length;
var i__7485__auto___8701 = (0);
while(true){
if((i__7485__auto___8701 < len__7484__auto___8700)){
args__7491__auto__.push((arguments[i__7485__auto___8701]));

var G__8702 = (i__7485__auto___8701 + (1));
i__7485__auto___8701 = G__8702;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq8699){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8699));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8704 = arguments.length;
var i__7485__auto___8705 = (0);
while(true){
if((i__7485__auto___8705 < len__7484__auto___8704)){
args__7491__auto__.push((arguments[i__7485__auto___8705]));

var G__8706 = (i__7485__auto___8705 + (1));
i__7485__auto___8705 = G__8706;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq8703){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8703));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8714 = arguments.length;
var i__7485__auto___8715 = (0);
while(true){
if((i__7485__auto___8715 < len__7484__auto___8714)){
args__7491__auto__.push((arguments[i__7485__auto___8715]));

var G__8716 = (i__7485__auto___8715 + (1));
i__7485__auto___8715 = G__8716;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__8710){
var vec__8711 = p__8710;
var state_override = cljs.core.nth.call(null,vec__8711,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__8711,state_override){
return (function (p1__8707_SHARP_){
return cljs.core.merge.call(null,p1__8707_SHARP_,state_override);
});})(vec__8711,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq8708){
var G__8709 = cljs.core.first.call(null,seq8708);
var seq8708__$1 = cljs.core.next.call(null,seq8708);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__8709,seq8708__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8718 = arguments.length;
var i__7485__auto___8719 = (0);
while(true){
if((i__7485__auto___8719 < len__7484__auto___8718)){
args__7491__auto__.push((arguments[i__7485__auto___8719]));

var G__8720 = (i__7485__auto___8719 + (1));
i__7485__auto___8719 = G__8720;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq8717){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8717));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8723 = arguments.length;
var i__7485__auto___8724 = (0);
while(true){
if((i__7485__auto___8724 < len__7484__auto___8723)){
args__7491__auto__.push((arguments[i__7485__auto___8724]));

var G__8725 = (i__7485__auto___8724 + (1));
i__7485__auto___8724 = G__8725;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq8721){
var G__8722 = cljs.core.first.call(null,seq8721);
var seq8721__$1 = cljs.core.next.call(null,seq8721);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__8722,seq8721__$1);
});


//# sourceMappingURL=format.js.map?rel=1481235361533