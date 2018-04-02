webpackJsonp([1],[,,,function(t,e,s){"use strict";var n=s(132),r=s.n(n);e.a=r.a.create({baseURL:"https://api-cable.alphanetbroadband.com/api/"})},,,function(t,e,s){function n(t){s(172)}var r=s(1)(s(151),s(199),n,null,null);t.exports=r.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){var n=s(1)(s(158),s(187),null,null,null);t.exports=n.exports},function(t,e,s){"use strict";var n=s(4),r=s(201),o=s(182),a=s.n(o),i=s(186),c=s.n(i),u=s(180),l=s.n(u),m=s(176),d=s.n(m),v=s(178),f=s.n(v),_=s(181),p=s.n(_),h=s(183),b=s.n(h);n.a.use(r.a),e.a=new r.a({mode:"history",linkActiveClass:"active",routes:[{path:"/home",name:"Home",component:a.a},{path:"/login",name:"Login",component:b.a},{path:"/payments",name:"Payments",component:c.a},{path:"/customers",name:"customersIndex",component:f.a},{path:"/customers/create",name:"addCustomer",component:d.a},{path:"/customers/:customerId",name:"viewCustomer",component:l.a},{path:"/error",name:"error",component:p.a}]})},function(t,e,s){"use strict";var n=s(4),r=s(204),o=s(203),a=s.n(o),i=s(3);n.a.use(r.a),e.a=new r.a.Store({plugins:[a()({namespace:"cableApiAlphanetbroadbandCom",initialState:{isLoggedIn:!1,username:null,password:null,jwt:""},expires:864e5})],state:{isLoggedIn:!1,username:null,password:null,jwt:""},mutations:{setJwt:function(t,e){i.a.defaults.headers.common.Authorization="Bearer "+e,t.jwt=e},logIn:function(t){t.isLoggedIn=!0},changeUsername:function(t,e){t.username=e},changePassword:function(t,e){t.password=e},setError:function(t,e){t.error=e}},actions:{authenticate:function(t){var e=t.state,s=t.commit;return i.a.post("/login",{username:e.username,password:e.password}).then(function(t){var e=t.data;s("setJwt",e),s("logIn")})}}})},,function(t,e,s){function n(t){s(171)}var r=s(1)(s(152),s(195),n,"data-v-714b1718",null);t.exports=r.exports},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),r=s(130),o=s(131),a=s.n(o),i=s(128),c=s(129);n.a.config.productionTip=!1,n.a.use(r.a),new n.a({el:"#app",router:i.a,store:c.a,render:function(t){return t(a.a)}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SyncLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-syncStretchDelay",animationDuration:"0.6s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.07s"},spinnerDelay2:{animationDelay:"0.14s"},spinnerDelay3:{animationDelay:"0.21s"}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(167),r=(s.n(n),s(166)),o=(s.n(r),s(185)),a=s.n(o),i=s(3);e.default={name:"app",components:{Nav:a.a},created:function(){i.a.defaults.headers.common.Authorization="Bearer "+this.$store.state.jwt},mounted:function(){this.$store.state.isLoggedIn||this.$router.replace("/login")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(177),r=s.n(n);e.default={components:{Editor:r.a},data:function(){return{customer:{}}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3);e.default={props:{customer:{type:Object}},methods:{submit:function(){var t=this;n.a.post("customers",this.customer).then(function(e){t.$router.push({name:"customersIndex"})}).catch(function(e){t.$store.commit("setError",e.response),t.$router.push({name:"error"})})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(127),r=s.n(n),o=s(3),a=s(6),i=s.n(a),c=this;e.default={components:{CustomerView:r.a,SyncLoader:i.a},data:function(){return{customers:[],isLoading:!0}},computed:{isNotLoading:function(){return!c.isLoading}},mounted:function(){var t=this;o.a.get("customers").then(function(e){t.isLoading=!1,t.customers=e.data}).catch(function(e){t.isLoading=!1,t.$store.commit("setError",e.response),t.$router.push({name:"error"})})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0),r=s.n(n),o=s(3);e.default={name:"PaymentList",props:{payments:{type:[Array,String]}},filters:{formatDatetime:function(t){return r()(t).format("MMMM Do YYYY, h:mm:ss a")}},methods:{generateBill:function(t){var e=this;this.$emit("loading",!0),o.a.get("payments/"+t.id+"/bill").then(function(t){e.$emit("loading",!1),e.$emit("refreshModel")}).catch(function(t){e.$emit("loading",!1),e.$store.commit("setError",t.response),e.$router.push({name:"error"})})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),r=s(6),o=s.n(r),a=s(179),i=s.n(a);e.default={created:function(){this.fetchCustomer()},components:{PaymentList:i.a,SyncLoader:o.a},data:function(){return{isLoading:!1,customer:{}}},watch:{$route:"fetchCustomer"},methods:{fetchCustomer:function(){var t=this;this.isLoading=!0,n.a.get("customers/"+this.$route.params.customerId).then(function(e){t.customer=e.data,t.isLoading=!1}).catch(function(e){t.$store.commit("setError",e.response),t.$router.push({name:"error"})})},setLoading:function(t){this.isLoading=t}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(184),r=s.n(n);e.default={name:"CustomerView",components:{MakePaymentModal:r.a},props:{customers:{type:[Array,Object]}},data:function(){return{selectedCustomer:{}}},methods:{selectCustomer:function(t){this.selectedCustomer=t},transitionToCustomer:function(t){this.$router.push({name:"viewCustomer",params:{customerId:t}})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ErrorComponent",computed:{error:function(){return this.$store.state.error}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3);e.default={data:function(){return{user:{},dateTime:new Date}},mounted:function(){var t=this;n.a.get("users/me").then(function(e){t.user=e.data});var e=function(){this.dateTime=new Date,window.setTimeout(e,1e3)}.bind(this);e()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Login",methods:{changeUsername:function(t){this.$store.commit("changeUsername",t.target.value)},changePassword:function(t){this.$store.commit("changePassword",t.target.value)},logIn:function(){var t=this;this.$store.dispatch("authenticate").then(function(){console.log("then"),t.$store.state.isLoggedIn&&t.$router.push("home")}).catch(function(t){console.error(t),alert("Wrong Username and password!")})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3);e.default={name:"makePaymentModal",props:{customer:{type:Object}},data:function(){return{amount:0}},methods:{submit:function(t){var e=this;if(this.amount<=0)return alert("Please Enter A Valid Amount"),t.cancel();n.a.post("payments",{customerId:this.customer.id,vc_no:this.customer.vc_no,amount:this.amount}).then(function(t){var s=t.data;alert("Payment Successful Txn ID: 2018"+s.id),e.$router.push("/addPayment")}).catch(function(t){e.$store.commit("setError",t.response),e.$router.push({name:"error"})}),console.log(this.customer,"Amt",this.amount)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{isHomeActive:function(){return"Home"===this.$route.name},isPaymentsActive:function(){return["Payments"].includes(this.$route.name)},isCustomerActive:function(){return["addCustomer","customersIndex"].includes(this.$route.name)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(127),r=s.n(n),o=s(3),a=s(6),i=s.n(a);e.default={components:{CustomerView:r.a,SyncLoader:i.a},data:function(){return{isPristine:!0,isLoading:!1,vc_no:"",customers:[]}},computed:{isNotLoading:function(){return!this.isLoading&&!this.isPristine}},methods:{changed:function(t){var e=this;this.isLoading=!0,this.isPristine=!1,o.a.get("customers",{params:{filter:{vc_no:this.vc_no}}}).then(function(t){e.customers=t.data,e.isLoading=!1}).catch(function(t){e.isLoading=!1,e.$store.commit("setError",t.response),e.$router.push({name:"error"})})}}}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){function n(t){return s(r(t))}function r(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./af":12,"./af.js":12,"./ar":19,"./ar-dz":13,"./ar-dz.js":13,"./ar-kw":14,"./ar-kw.js":14,"./ar-ly":15,"./ar-ly.js":15,"./ar-ma":16,"./ar-ma.js":16,"./ar-sa":17,"./ar-sa.js":17,"./ar-tn":18,"./ar-tn.js":18,"./ar.js":19,"./az":20,"./az.js":20,"./be":21,"./be.js":21,"./bg":22,"./bg.js":22,"./bn":23,"./bn.js":23,"./bo":24,"./bo.js":24,"./br":25,"./br.js":25,"./bs":26,"./bs.js":26,"./ca":27,"./ca.js":27,"./cs":28,"./cs.js":28,"./cv":29,"./cv.js":29,"./cy":30,"./cy.js":30,"./da":31,"./da.js":31,"./de":34,"./de-at":32,"./de-at.js":32,"./de-ch":33,"./de-ch.js":33,"./de.js":34,"./dv":35,"./dv.js":35,"./el":36,"./el.js":36,"./en-au":37,"./en-au.js":37,"./en-ca":38,"./en-ca.js":38,"./en-gb":39,"./en-gb.js":39,"./en-ie":40,"./en-ie.js":40,"./en-nz":41,"./en-nz.js":41,"./eo":42,"./eo.js":42,"./es":44,"./es-do":43,"./es-do.js":43,"./es.js":44,"./et":45,"./et.js":45,"./eu":46,"./eu.js":46,"./fa":47,"./fa.js":47,"./fi":48,"./fi.js":48,"./fo":49,"./fo.js":49,"./fr":52,"./fr-ca":50,"./fr-ca.js":50,"./fr-ch":51,"./fr-ch.js":51,"./fr.js":52,"./fy":53,"./fy.js":53,"./gd":54,"./gd.js":54,"./gl":55,"./gl.js":55,"./gom-latn":56,"./gom-latn.js":56,"./he":57,"./he.js":57,"./hi":58,"./hi.js":58,"./hr":59,"./hr.js":59,"./hu":60,"./hu.js":60,"./hy-am":61,"./hy-am.js":61,"./id":62,"./id.js":62,"./is":63,"./is.js":63,"./it":64,"./it.js":64,"./ja":65,"./ja.js":65,"./jv":66,"./jv.js":66,"./ka":67,"./ka.js":67,"./kk":68,"./kk.js":68,"./km":69,"./km.js":69,"./kn":70,"./kn.js":70,"./ko":71,"./ko.js":71,"./ky":72,"./ky.js":72,"./lb":73,"./lb.js":73,"./lo":74,"./lo.js":74,"./lt":75,"./lt.js":75,"./lv":76,"./lv.js":76,"./me":77,"./me.js":77,"./mi":78,"./mi.js":78,"./mk":79,"./mk.js":79,"./ml":80,"./ml.js":80,"./mr":81,"./mr.js":81,"./ms":83,"./ms-my":82,"./ms-my.js":82,"./ms.js":83,"./my":84,"./my.js":84,"./nb":85,"./nb.js":85,"./ne":86,"./ne.js":86,"./nl":88,"./nl-be":87,"./nl-be.js":87,"./nl.js":88,"./nn":89,"./nn.js":89,"./pa-in":90,"./pa-in.js":90,"./pl":91,"./pl.js":91,"./pt":93,"./pt-br":92,"./pt-br.js":92,"./pt.js":93,"./ro":94,"./ro.js":94,"./ru":95,"./ru.js":95,"./sd":96,"./sd.js":96,"./se":97,"./se.js":97,"./si":98,"./si.js":98,"./sk":99,"./sk.js":99,"./sl":100,"./sl.js":100,"./sq":101,"./sq.js":101,"./sr":103,"./sr-cyrl":102,"./sr-cyrl.js":102,"./sr.js":103,"./ss":104,"./ss.js":104,"./sv":105,"./sv.js":105,"./sw":106,"./sw.js":106,"./ta":107,"./ta.js":107,"./te":108,"./te.js":108,"./tet":109,"./tet.js":109,"./th":110,"./th.js":110,"./tl-ph":111,"./tl-ph.js":111,"./tlh":112,"./tlh.js":112,"./tr":113,"./tr.js":113,"./tzl":114,"./tzl.js":114,"./tzm":116,"./tzm-latn":115,"./tzm-latn.js":115,"./tzm.js":116,"./uk":117,"./uk.js":117,"./ur":118,"./ur.js":118,"./uz":120,"./uz-latn":119,"./uz-latn.js":119,"./uz.js":120,"./vi":121,"./vi.js":121,"./x-pseudo":122,"./x-pseudo.js":122,"./yo":123,"./yo.js":123,"./zh-cn":124,"./zh-cn.js":124,"./zh-hk":125,"./zh-hk.js":125,"./zh-tw":126,"./zh-tw.js":126};n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id=174},,function(t,e,s){var n=s(1)(s(153),s(192),null,null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(154),s(200),null,null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(155),s(196),null,null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(156),s(198),null,null,null);t.exports=n.exports},function(t,e,s){function n(t){s(168)}var r=s(1)(s(157),s(188),n,"data-v-156bdf18",null);t.exports=r.exports},function(t,e,s){var n=s(1)(s(159),s(194),null,null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(160),s(197),null,null,null);t.exports=n.exports},function(t,e,s){function n(t){s(169)}var r=s(1)(s(161),s(189),n,"data-v-1756d5ee",null);t.exports=r.exports},function(t,e,s){var n=s(1)(s(162),s(191),null,null,null);t.exports=n.exports},function(t,e,s){var n=s(1)(s(163),s(193),null,null,null);t.exports=n.exports},function(t,e,s){function n(t){s(170)}var r=s(1)(s(164),s(190),n,"data-v-22ceeb60",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),s("tbody",t._l(t.customers,function(e){return s("tr",[s("td",[s("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(s){t.transitionToCustomer(e.id)}}},[t._v(t._s(e.id))])]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.vc_no))]),t._v(" "),s("td",[t._v(t._s(e.cable_network))]),t._v(" "),s("td",[t._v(t._s(e.address))]),t._v(" "),s("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.makePaymentModal",modifiers:{makePaymentModal:!0}}],staticStyle:{"margin-top":"10px"},attrs:{variant:"primary",size:"sm"},on:{click:function(s){t.selectCustomer(e)}}},[t._v("Make Payment")])],1)}))]),t._v(" "),s("MakePaymentModal",{attrs:{customer:t.selectedCustomer}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("td",[t._v("#")]),t._v(" "),s("td",[t._v("Name")]),t._v(" "),s("td",[t._v("Vc No")]),t._v(" "),s("td",[t._v("Network")]),t._v(" "),s("td",[t._v("Address")]),t._v(" "),s("td",[t._v("Actions")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Customer #"+t._s(t.customer.id))]),t._v(" "),t.customer.id?s("div",{staticClass:"card"},[s("div",{staticClass:"card-block"},[s("ul",[s("li",[t._v("\n          Name: "+t._s(t.customer.name)+"\n        ")]),t._v(" "),s("li",[t._v("\n          VC: "+t._s(t.customer.vc_no)+"\n        ")]),t._v(" "),s("li",[t._v("\n          Address: "+t._s(t.customer.address)+"\n        ")]),t._v(" "),s("li",[t._v("\n          Mobile: "+t._s(t.customer.mobile)+"\n        ")]),t._v(" "),s("li",[t._v("\n          Cable Network: "+t._s(t.customer.cable_network)+"\n        ")]),t._v(" "),s("li",[t._v("\n          Arrears: "+t._s(t.customer.arrears)+"\n        ")])]),t._v(" "),s("PaymentList",{attrs:{payments:t.customer.payments},on:{refreshModel:t.fetchCustomer,loading:t.setLoading}})],1)]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading"},[s("sync-loader",{attrs:{loading:t.isLoading}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container text-center"},[s("h3",[t._v("Login")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Username")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter username"},on:{change:t.changeUsername}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Password")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password"},on:{change:t.changePassword}})]),t._v(" "),s("button",{staticClass:"btn btn-outline-primary",on:{click:t.logIn}},[t._v("Login")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Payments Form")]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-block"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Vc Number")]),t._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"Enter Vc number of the customer"},on:{change:t.changed},model:{value:t.vc_no,callback:function(e){t.vc_no=e},expression:"vc_no"}}),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("We will convert your name to lowercase instantly")])],1),t._v(" "),s("div",{staticClass:"loadingContainer text-center"},[s("sync-loader",{attrs:{loading:t.isLoading}})],1),t._v(" "),t.isNotLoading?s("CustomerView",{attrs:{customers:t.customers}}):t._e()],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-modal",{attrs:{id:"makePaymentModal",title:"Enter Payment Amount"},on:{ok:t.submit}},[s("ul",[s("li",[t._v("Name: "+t._s(t.customer.name)+" ")]),t._v(" "),s("li",[t._v("VC: "+t._s(t.customer.vc_no)+" ")]),t._v(" "),s("li",[t._v("Address: "+t._s(t.customer.address)+" ")]),t._v(" "),s("li",[t._v("Network: "+t._s(t.customer.cable_network)+" ")])]),t._v(" "),s("form",{on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[s("b-form-input",{attrs:{type:"number",placeholder:"Enter Amount"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Add Customer")]),t._v(" "),s("Editor",{attrs:{customer:t.customer}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-nav",{attrs:{tabs:""}},[s("b-nav-item",[s("router-link",{attrs:{to:"/home"}},[t._v(" PMS ")])],1),t._v(" "),s("b-nav-item",{attrs:{active:t.isHomeActive}},[s("router-link",{attrs:{to:"/home"}},[t._v(" Home ")])],1),t._v(" "),this.$store.state.isLoggedIn?s("b-nav-item",{attrs:{active:t.isPaymentsActive}},[s("router-link",{attrs:{to:"/payments"}},[t._v(" Payments ")])],1):t._e(),t._v(" "),this.$store.state.isLoggedIn?s("b-nav-item",{attrs:{active:t.isCustomerActive}},[s("router-link",{attrs:{to:"/customers"}},[t._v(" Customer ")])],1):t._e()],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v(" Error ")]),t._v(" "),s("p",[t._v(" Please report the following message to the site admin. ")]),t._v(" "),s("hr",{attrs:{noshade:""}}),t._v(" "),s("pre",[t._v("    "+t._s(t.error)+"\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Nav"),t._v(" "),s("div",{staticClass:"container"},[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5"},[s("router-link",{attrs:{to:"/customers/create"}},[s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"button"}},[t._v("+ Add ")])])],1)]),t._v(" "),s("div",{staticClass:"loadingContainer text-center"},[s("sync-loader",{attrs:{loading:t.isLoading}})],1),t._v(" "),s("hr",{attrs:{noshade:""}}),t._v(" "),t.isNotLoading?s("CustomerView",{attrs:{customers:t.customers}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("h3",[t._v("Welcome.")]),t._v(" "),s("p",[t._v(" You are logged In as "),s("strong",[t._v(t._s(t.user.username)+".")])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v(" System Time: "),s("strong",[t._v(t._s(t.dateTime.toString()))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.payments,function(e){return s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),s("td",[t._v(t._s(e.vc_no))]),t._v(" "),s("td",[t._v(t._s(e.amount))]),t._v(" "),s("td",[t._v(t._s(t._f("formatDatetime")(e.payment_date)))]),t._v(" "),s("td",[t._v(t._s(e.comment))]),t._v(" "),s("td",[e.bill?s("a",{attrs:{href:e.bill.url,target:"_blank"}},[t._v("Download Bill")]):s("button",{staticClass:"btn btn-secondary btn-sm",on:{click:function(s){t.generateBill(e)}}},[t._v("\n            Generate Billi Clinton\n        ")])])])}))])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("ID")]),t._v(" "),s("th",[t._v("VC NO")]),t._v(" "),s("th",[t._v("Amount")]),t._v(" "),s("th",[t._v("Added Time")]),t._v(" "),s("th",[t._v("Comment")]),t._v(" "),s("th",[t._v("Actions")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[s("div",{staticClass:"v-sync v-sync1",style:[t.spinnerStyle,t.spinnerDelay1]}),s("div",{staticClass:"v-sync v-sync2",style:[t.spinnerStyle,t.spinnerDelay2]}),s("div",{staticClass:"v-sync v-sync3",style:[t.spinnerStyle,t.spinnerDelay3]})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-block"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Name")]),t._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"Enter Name of the customer"},model:{value:t.customer.name,callback:function(e){t.customer.name=e},expression:"customer.name"}}),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("*Required")])],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Address")]),t._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"Enter Adress of the customer"},model:{value:t.customer.address,callback:function(e){t.customer.address=e},expression:"customer.address"}}),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("*Required")])],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("VC No")]),t._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"Enter Vc number of the customer"},model:{value:t.customer.vc_no,callback:function(e){t.customer.vc_no=e},expression:"customer.vc_no"}}),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("*Required")])],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Mobile No")]),t._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"Enter Mobile number of the customer"},model:{value:t.customer.mobile,callback:function(e){t.customer.mobile=e},expression:"customer.mobile"}}),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("*Required")])],1),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Cable Network")]),t._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"Enter Cable Network name of the customer"},model:{value:t.customer.cable_network,callback:function(e){t.customer.cable_network=e},expression:"customer.cable_network"}}),t._v(" "),s("small",{staticClass:"text-muted"},[t._v("*Required")])],1),t._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.submit()}}},[t._v("Submit")])])])])])},staticRenderFns:[]}}],[150]);
//# sourceMappingURL=app.7d8fe556a59dafa18abb.js.map