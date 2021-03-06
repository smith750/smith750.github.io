// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x11178_11179 = value;
x11178_11179.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x11183_11184 = value;
x11183_11184.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x11188_11189 = value;
x11188_11189.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__6397__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6397__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11197 = arguments.length;
var i__7485__auto___11198 = (0);
while(true){
if((i__7485__auto___11198 < len__7484__auto___11197)){
args__7491__auto__.push((arguments[i__7485__auto___11198]));

var G__11199 = (i__7485__auto___11198 + (1));
i__7485__auto___11198 = G__11199;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__11193_11200 = cljs.core.seq.call(null,items);
var chunk__11194_11201 = null;
var count__11195_11202 = (0);
var i__11196_11203 = (0);
while(true){
if((i__11196_11203 < count__11195_11202)){
var item_11204 = cljs.core._nth.call(null,chunk__11194_11201,i__11196_11203);
if(cljs.core.some_QMARK_.call(null,item_11204)){
if(cljs.core.coll_QMARK_.call(null,item_11204)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_11204)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_11204));
}
} else {
}

var G__11205 = seq__11193_11200;
var G__11206 = chunk__11194_11201;
var G__11207 = count__11195_11202;
var G__11208 = (i__11196_11203 + (1));
seq__11193_11200 = G__11205;
chunk__11194_11201 = G__11206;
count__11195_11202 = G__11207;
i__11196_11203 = G__11208;
continue;
} else {
var temp__4657__auto___11209 = cljs.core.seq.call(null,seq__11193_11200);
if(temp__4657__auto___11209){
var seq__11193_11210__$1 = temp__4657__auto___11209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11193_11210__$1)){
var c__7220__auto___11211 = cljs.core.chunk_first.call(null,seq__11193_11210__$1);
var G__11212 = cljs.core.chunk_rest.call(null,seq__11193_11210__$1);
var G__11213 = c__7220__auto___11211;
var G__11214 = cljs.core.count.call(null,c__7220__auto___11211);
var G__11215 = (0);
seq__11193_11200 = G__11212;
chunk__11194_11201 = G__11213;
count__11195_11202 = G__11214;
i__11196_11203 = G__11215;
continue;
} else {
var item_11216 = cljs.core.first.call(null,seq__11193_11210__$1);
if(cljs.core.some_QMARK_.call(null,item_11216)){
if(cljs.core.coll_QMARK_.call(null,item_11216)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_11216)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_11216));
}
} else {
}

var G__11217 = cljs.core.next.call(null,seq__11193_11210__$1);
var G__11218 = null;
var G__11219 = (0);
var G__11220 = (0);
seq__11193_11200 = G__11217;
chunk__11194_11201 = G__11218;
count__11195_11202 = G__11219;
i__11196_11203 = G__11220;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq11192){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11192));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11228 = arguments.length;
var i__7485__auto___11229 = (0);
while(true){
if((i__7485__auto___11229 < len__7484__auto___11228)){
args__7491__auto__.push((arguments[i__7485__auto___11229]));

var G__11230 = (i__7485__auto___11229 + (1));
i__7485__auto___11229 = G__11230;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__11224_11231 = cljs.core.seq.call(null,children);
var chunk__11225_11232 = null;
var count__11226_11233 = (0);
var i__11227_11234 = (0);
while(true){
if((i__11227_11234 < count__11226_11233)){
var child_11235 = cljs.core._nth.call(null,chunk__11225_11232,i__11227_11234);
if(cljs.core.some_QMARK_.call(null,child_11235)){
if(cljs.core.coll_QMARK_.call(null,child_11235)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_11235))));
} else {
var temp__4655__auto___11236 = devtools.formatters.helpers.pref.call(null,child_11235);
if(cljs.core.truth_(temp__4655__auto___11236)){
var child_value_11237 = temp__4655__auto___11236;
template.push(child_value_11237);
} else {
}
}
} else {
}

var G__11238 = seq__11224_11231;
var G__11239 = chunk__11225_11232;
var G__11240 = count__11226_11233;
var G__11241 = (i__11227_11234 + (1));
seq__11224_11231 = G__11238;
chunk__11225_11232 = G__11239;
count__11226_11233 = G__11240;
i__11227_11234 = G__11241;
continue;
} else {
var temp__4657__auto___11242 = cljs.core.seq.call(null,seq__11224_11231);
if(temp__4657__auto___11242){
var seq__11224_11243__$1 = temp__4657__auto___11242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11224_11243__$1)){
var c__7220__auto___11244 = cljs.core.chunk_first.call(null,seq__11224_11243__$1);
var G__11245 = cljs.core.chunk_rest.call(null,seq__11224_11243__$1);
var G__11246 = c__7220__auto___11244;
var G__11247 = cljs.core.count.call(null,c__7220__auto___11244);
var G__11248 = (0);
seq__11224_11231 = G__11245;
chunk__11225_11232 = G__11246;
count__11226_11233 = G__11247;
i__11227_11234 = G__11248;
continue;
} else {
var child_11249 = cljs.core.first.call(null,seq__11224_11243__$1);
if(cljs.core.some_QMARK_.call(null,child_11249)){
if(cljs.core.coll_QMARK_.call(null,child_11249)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_11249))));
} else {
var temp__4655__auto___11250 = devtools.formatters.helpers.pref.call(null,child_11249);
if(cljs.core.truth_(temp__4655__auto___11250)){
var child_value_11251 = temp__4655__auto___11250;
template.push(child_value_11251);
} else {
}
}
} else {
}

var G__11252 = cljs.core.next.call(null,seq__11224_11243__$1);
var G__11253 = null;
var G__11254 = (0);
var G__11255 = (0);
seq__11224_11231 = G__11252;
chunk__11225_11232 = G__11253;
count__11226_11233 = G__11254;
i__11227_11234 = G__11255;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq11221){
var G__11222 = cljs.core.first.call(null,seq11221);
var seq11221__$1 = cljs.core.next.call(null,seq11221);
var G__11223 = cljs.core.first.call(null,seq11221__$1);
var seq11221__$2 = cljs.core.next.call(null,seq11221__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__11222,G__11223,seq11221__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11258 = arguments.length;
var i__7485__auto___11259 = (0);
while(true){
if((i__7485__auto___11259 < len__7484__auto___11258)){
args__7491__auto__.push((arguments[i__7485__auto___11259]));

var G__11260 = (i__7485__auto___11259 + (1));
i__7485__auto___11259 = G__11260;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq11256){
var G__11257 = cljs.core.first.call(null,seq11256);
var seq11256__$1 = cljs.core.next.call(null,seq11256);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11257,seq11256__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11263 = arguments.length;
var i__7485__auto___11264 = (0);
while(true){
if((i__7485__auto___11264 < len__7484__auto___11263)){
args__7491__auto__.push((arguments[i__7485__auto___11264]));

var G__11265 = (i__7485__auto___11264 + (1));
i__7485__auto___11264 = G__11265;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq11261){
var G__11262 = cljs.core.first.call(null,seq11261);
var seq11261__$1 = cljs.core.next.call(null,seq11261);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11262,seq11261__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args11266 = [];
var len__7484__auto___11271 = arguments.length;
var i__7485__auto___11272 = (0);
while(true){
if((i__7485__auto___11272 < len__7484__auto___11271)){
args11266.push((arguments[i__7485__auto___11272]));

var G__11273 = (i__7485__auto___11272 + (1));
i__7485__auto___11272 = G__11273;
continue;
} else {
}
break;
}

var G__11268 = args11266.length;
switch (G__11268) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11266.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj11270 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6409__auto__ = start_index;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})()};
return obj11270;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__7491__auto__ = [];
var len__7484__auto___11281 = arguments.length;
var i__7485__auto___11282 = (0);
while(true){
if((i__7485__auto___11282 < len__7484__auto___11281)){
args__7491__auto__.push((arguments[i__7485__auto___11282]));

var G__11283 = (i__7485__auto___11282 + (1));
i__7485__auto___11282 = G__11283;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__11277){
var vec__11278 = p__11277;
var state_override_fn = cljs.core.nth.call(null,vec__11278,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq11275){
var G__11276 = cljs.core.first.call(null,seq11275);
var seq11275__$1 = cljs.core.next.call(null,seq11275);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__11276,seq11275__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11287_11290 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11288_11291 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11287_11290,_STAR_print_fn_STAR_11288_11291,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_11287_11290,_STAR_print_fn_STAR_11288_11291,sb__7395__auto__))
;

try{var _STAR_print_level_STAR_11289_11292 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_11289_11292;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11288_11291;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11287_11290;
}
return [cljs.core.str(sb__7395__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_11294 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_11294;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__11296 = name;
switch (G__11296) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__11301 = tag;
var html_tag = cljs.core.nth.call(null,vec__11301,(0),null);
var style = cljs.core.nth.call(null,vec__11301,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_11305 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_11305;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_11308 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_11309 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_11309;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_11308;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__11310 = initial_value;
var G__11311 = value.call(null);
initial_value = G__11310;
value = G__11311;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__11312 = initial_value;
var G__11313 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__11312;
value = G__11313;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__11314 = initial_value;
var G__11315 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__11314;
value = G__11315;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1481235364793