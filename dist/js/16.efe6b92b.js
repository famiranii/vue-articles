"use strict";(self["webpackChunkarvan"]=self["webpackChunkarvan"]||[]).push([[16],{1279:function(t,e,a){a.d(e,{Z:function(){return u}});var l=a(3396),s=a(7139);const o=["checked"],n={for:"checkTags"};function r(t,e,a,r,c,i){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("input",{type:"checkbox",checked:!!a.tag.isChecked||null,class:"form-check-input tags-checkbox",onClick:e[0]||(e[0]=t=>a.tag.isChecked=!a.tag.isChecked)},null,8,o),(0,l._)("label",n,(0,s.zw)(a.tag.title),1)])}var c={props:{tag:Object}},i=a(89);const d=(0,i.Z)(c,[["render",r]]);var u=d},7137:function(t,e,a){a.d(e,{Z:function(){return h}});var l=a(3396),s=a(7139);const o={class:"p-3 header-article"},n={class:"d-flex"},r=(0,l._)("button",{type:"button",class:"navbar-toggler btn blue me-auto px-4 d-lg-none","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasDarkNavbar","aria-controls":"offcanvasDarkNavbar"},"post",-1),c={class:"d-lg-flex align-items-center"},i=(0,l._)("h1",{class:"text-22 pe-3 text-white",title:"Arvan challenge"}," Arvan Challenge ",-1);function d(t,e,a,d,u,p){return(0,l.wg)(),(0,l.iD)("header",o,[(0,l._)("div",null,[(0,l._)("div",n,[r,(0,l._)("div",c,[i,(0,l._)("span",null,(0,s.zw)(u.username),1)]),(0,l._)("button",{type:"button",class:"btn btn-outline-info ms-auto me-2",onClick:e[0]||(e[0]=(...t)=>p.handleLogout&&p.handleLogout(...t))},"Logout")])])])}a(7658);var u={data(){return{username:""}},created(){const t=localStorage.getItem("username");this.username=t},methods:{handleLogout(){localStorage.clear(),this.$router.push("/#")}}},p=a(89);const m=(0,p.Z)(u,[["render",d]]);var h=m},2520:function(t,e,a){a.d(e,{Z:function(){return h}});var l=a(3396);const s={class:"d-none col-lg-2 blue d-lg-flex flex-column"},o=(0,l._)("h5",{class:"p-3"},"post",-1),n={class:"d-flex flex-column"},r={class:"offcanvas offcanvas-start blue w-50 flex-column",tabindex:"-1",id:"offcanvasDarkNavbar","aria-labelledby":"offcanvasDarkNavbarLabel"},c=(0,l._)("h5",{class:"p-3"},"post",-1),i={class:"d-flex flex-column"};function d(t,e){const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",s,[(0,l._)("div",null,[o,(0,l._)("div",n,[(0,l.Wm)(a,{to:"/",class:"sidebar-items py-1 text-white ps-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("All Articles")])),_:1}),(0,l.Wm)(a,{to:"newArticlePage",class:"sidebar-items py-1 text-white ps-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("New Articles")])),_:1})])])]),(0,l._)("div",r,[(0,l._)("div",null,[c,(0,l._)("div",i,[(0,l.Wm)(a,{to:"/",class:"sidebar-items py-1 text-white ps-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("All Articles")])),_:1}),(0,l.Wm)(a,{to:"newArticlePage",class:"sidebar-items py-1 text-white ps-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("New Articles")])),_:1})])])])],64)}var u=a(89);const p={},m=(0,u.Z)(p,[["render",d]]);var h=m},4016:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var l=a(3396);const s={class:"body-container vh-100"},o={class:"h-100 d-flex"},n={class:"form-articles col-12 col-md-10"},r=(0,l._)("h2",null,"New Article",-1);function c(t,e,a,c,i,d){const u=(0,l.up)("responsive-header"),p=(0,l.up)("sideBar"),m=(0,l.up)("newArticleForm");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(u),(0,l._)("section",o,[(0,l.Wm)(p),(0,l._)("div",n,[r,(0,l.Wm)(m)])])])}var i=a(7137),d=a(2520),u=a(9242);const p={class:"my-4"},m={class:"col-sm-9"},h={class:"mb-3 has-validation"},f=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Title",-1),g=(0,l._)("div",{class:"invalid-feedback"}," Please choose a username. ",-1),v={class:"mb-3"},b=(0,l._)("label",{for:"exampleFormControlInput1",class:"form-label"},"Description",-1),_={class:"mb-3"},w=(0,l._)("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Body",-1),x={class:"col-sm-3 ps-sm-4"},k=(0,l._)("label",{for:"tags",class:"form-label"},"Tags",-1),y={class:"form-control tagsTEextaria mt-3 overflow-auto"},C=(0,l._)("div",{class:"col-12 pt-2"},[(0,l._)("button",{class:"btn btn-sm blue px-4",type:"submit"},"Submit")],-1);function T(t,e,a,s,o,n){const r=(0,l.up)("articleTags");return(0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("form",{class:"row",onSubmit:e[5]||(e[5]=(0,u.iM)(((...t)=>n.completeForm&&n.completeForm(...t)),["prevent"]))},[(0,l._)("div",m,[(0,l._)("div",h,[f,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.title=t),type:"text",placeholder:"Title",class:"form-control",id:"exampleFormControlInput1 required"},null,512),[[u.nr,o.title]]),g]),(0,l._)("div",v,[b,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.description=t),type:"text",class:"form-control",placeholder:"Description",id:"exampleFormControlInput1"},null,512),[[u.nr,o.description]])]),(0,l._)("div",_,[w,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.body=t),class:"form-control",id:"exampleFormControlTextarea1",rows:"8"},null,512),[[u.nr,o.body]])])]),(0,l._)("div",x,[k,(0,l.wy)((0,l._)("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>o.tagTitle=t),onKeypress:e[4]||(e[4]=(0,u.D2)((0,u.iM)((t=>n.addTag()),["prevent"]),["enter"])),name:"tags",class:"form-control",placeholder:"New tag"},null,544),[[u.nr,o.tagTitle]]),(0,l._)("div",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.tags,((t,e)=>((0,l.wg)(),(0,l.j4)(r,{key:e,class:"mb-2",tag:t},null,8,["tag"])))),128))])]),C],32)])}a(7658);var A=a(1279),D=a(4161),Z=a(4677),F={name:"app",components:{articleTags:A.Z},setup(){const t=(0,Z.pm)();return{toast:t}},data(){return{tagTitle:"",tags:[],title:"",description:"",body:""}},methods:{addTag(){const t={title:this.tagTitle,ischecked:!1};this.tags.push(t),this.tagTitle=""},completeForm(){const t={article:{title:this.title,description:this.description,body:this.body,tagList:[]}},e=this.tags.filter((t=>t.isChecked));t.article.tagList=e.map((t=>t.title));const a=JSON.stringify(t);D.Z.post("https://api.realworld.io/api/articles",a,{headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:`Bearer ${localStorage.getItem("token")}`}}).then((t=>{console.log(t),this.$router.push("/allPost"),this.toast.success("Well done! Article created successfuly")})).catch((t=>{console.log(t)}))}},mounted(){D.Z.get("https://api.realworld.io/api/articles").then((t=>{this.posts=t.data;const e=t.data.articles;e.forEach((t=>{t.tagList.forEach((t=>{const e={title:t,isChecked:!1};this.tags.push(e),this.tags.sort(((t,e)=>t.title.localeCompare(e.title)))}))}))})).catch((t=>{console.log(t)}))}},L=a(89);const N=(0,L.Z)(F,[["render",T]]);var W=N,U={name:"HomeView",components:{responsiveHeader:i.Z,sideBar:d.Z,newArticleForm:W}};const I=(0,L.Z)(U,[["render",c]]);var S=I}}]);
//# sourceMappingURL=16.efe6b92b.js.map