(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports={nav:"NavBar_nav__1gTnw",item:"NavBar_item__2NwSJ",active:"NavBar_active__mjLtP"}},20:function(e,t,a){e.exports={profileInfoWrapper:"ProfileInfo_profileInfoWrapper__2B19g",picture:"ProfileInfo_picture__1OEWa",info:"ProfileInfo_info__2PY1l",contact:"ProfileInfo_contact__1IJFS",status:"ProfileInfo_status__3gYpu"}},21:function(e,t,a){e.exports={dialog:"DialogsItem_dialog__3XcMq",link:"DialogsItem_link__3SqSi",dlink:"DialogsItem_dlink__6EJUX",pic:"DialogsItem_pic__1v1z7",img:"DialogsItem_img__l8jrz",activ:"DialogsItem_activ__2j2NV"}},28:function(e,t,a){e.exports={post:"Post_post__1NAXY",text:"Post_text__2qe6S",massage:"Post_massage__1v8Pc",like:"Post_like__1HqAT",img:"Post_img__2kYt5"}},31:function(e,t,a){e.exports={dialogs_wrapper:"Dialogs_dialogs_wrapper__2eMF_",dialogs:"Dialogs_dialogs__2polH",messages:"Dialogs_messages__2pxkQ",sendmessage:"Dialogs_sendmessage__zUs3_"}},32:function(e,t,a){e.exports={header:"Header_header__2ykjx",img:"Header_img__3qCtE",tect:"Header_tect__Fee6x",login:"Header_login__7YMh6"}},35:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(61),c=a.n(s);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:c.a}))}},36:function(e,t,a){e.exports={addMessageWrapper:"SendMessage_addMessageWrapper__3TAsY",text:"SendMessage_text__3Rm2s"}},37:function(e,t,a){e.exports={addPostsWrapper:"Send_addPostsWrapper__1OGVb",text:"Send_text__2sk9N",btn:"Send_btn__3Qzfs"}},5:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return l}));var n,r,s=a(55),c=a.n(s).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"02b9c283-65ab-4aa6-9c25-cf1f7a717d1b"}});!function(e){e[e.success=0]="success",e[e.error=1]="error"}(n||(n={})),function(e){e[e.captcha=10]="captcha"}(r||(r={}));var i={getUsers:function(e,t){return c.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))}},u={getProfile:function(e){return c.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return c.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return c.put("profile/status/",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return c.put("profile",e).then((function(e){return e.data}))}},o={setProfileData:function(){return c.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n}).then((function(e){return e.data}))},logout:function(){return c.delete("auth/login").then((function(e){return e.data}))}},l={getCaptcha:function(){return c.get("security/get-captcha-url").then((function(e){return e.data}))}}},52:function(e,t,a){e.exports=a.p+"static/media/unnamed.11fdd540.jpg"},53:function(e,t,a){"use strict";a.d(t,"c",(function(){return _})),a.d(t,"d",(function(){return j})),a.d(t,"b",(function(){return S}));var n=a(1),r=a.n(n),s=a(4),c=a(6),i=a(2),u=a(5),o=function(e,t,a,n){return e.map((function(e){return e[t]===a?Object(i.a)(Object(i.a)({},e),n):e}))},l="friends/FOLLOW",m="friends/UNFOLLOW",f={users:[],totalUsers:1,pageSize:10,currentPage:1,isFetching:!1,followingInProgress:[]},d=function(e){return{type:l,id:e}},p=function(e){return{type:m,id:e}},g=function(e){return{type:"friends/SET_USERS",users:e}},E=function(e){return{type:"friends/SET_CURRENT_PAGE",currentPage:e}},h=function(e){return{type:"friends/SET_TOTAL_USERS_COUNT",totalUsers:e}},v=function(e){return{type:"friends/TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"friends/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(v(!0)),n(E(t)),a.next=4,u.d.getUsers(e,t);case 4:s=a.sent,n(v(!1)),n(g(s.items)),n(h(s.totalCount));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},O=function(){var e=Object(s.a)(r.a.mark((function e(t,a,n,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,a)),e.next=3,n(a);case 3:e.sent.data.resultCode===u.b.success&&t(s(a)),t(b(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),j=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(a,e,u.d.unfollow.bind(u.d),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(a,e,u.d.follow.bind(u.d),d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,"id",t.id,{followed:!0})});case m:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,"id",t.id,{followed:!1})});case"friends/SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"friends/SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"friends/SET_TOTAL_USERS_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsers:t.totalUsers});case"friends/TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"friends/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},59:function(e,t,a){e.exports={messageMY:"Message_messageMY__1vD-v"}},60:function(e,t,a){e.exports={profileWrapper:"Profile_profileWrapper__1VAZH"}},61:function(e,t,a){e.exports=a.p+"static/media/7677edd5a44b10130b8824ca020ba60b.1a7925ff.gif"},62:function(e,t,a){e.exports={posts:"Wall_posts__3HvDI",item:"Wall_item__YuuOC"}},63:function(e,t,a){e.exports=a(93)},65:function(e,t,a){},88:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(10),c=a(1),i=a.n(c),u=a(4),o=a(6),l=a(2),m=a(5),f="profile/ADD-POST",d={postsData:[{id:1,message:"i dont know",counterLike:2},{id:2,message:"what?",counterLike:1}],userProfile:null,userStatus:""},p=function(e){return{type:"profile/SET_STATUS",status:e}},g=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.e.getProfile(e);case 2:n=t.sent,a({type:"profile/SET_USER_PROFILE",user:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(l.a)(Object(l.a)({},e),{},{postsData:[].concat(Object(o.a)(e.postsData),[{id:5,message:t.newPost,counterLike:0}])});case"profile/SET_USER_PROFILE":return Object(l.a)(Object(l.a)({},e),{},{userProfile:t.user});case"profile/SET_STATUS":return Object(l.a)(Object(l.a)({},e),{},{userStatus:t.status});case"profile/SET_PHOTO":return Object(l.a)(Object(l.a)({},e),{},{userProfile:Object(l.a)(Object(l.a)({},e.userProfile),{},{photos:t.photos})});default:return e}},h={},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;arguments.length>1&&arguments[1];return e},b={messagesData:[{id:1,message:"AVADA KEDAVRA"},{id:2,message:"EXPILARMUS"},{id:3,message:"FLEPENDO"},{id:4,message:"VINGARDIUM LEVIOSSA"},{id:5,message:"bukla"}],dialogsData:[{id:1,name:"Albus"},{id:2,name:"Harry"},{id:3,name:"Germiona"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":return Object(l.a)(Object(l.a)({},e),{},{messagesData:[].concat(Object(o.a)(e.messagesData),[{id:6,message:t.textMess}])});default:return e}},O=a(53),j={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},S=function(e,t,a,n){return{type:"auth/SET_USER_DATE",payload:{id:e,login:t,email:a,isAuth:n}}},w=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.c.setProfileData();case 2:(a=e.sent).resultCode===m.b.success&&(n=a.data,r=n.id,s=n.login,c=n.email,t(S(r,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.f.getCaptcha();case 2:a=e.sent,t({type:"auth/SET_CAPTCHA",payload:{captchaUrl:a.url}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATE":case"auth/SET_CAPTCHA":return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},k=a(56),y={initialized:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});default:return e}},A=Object(s.c)({profilePage:E,dialogsPage:_,sideBar:v,friendsPage:O.a,auth:x,app:N}),T=Object(s.e)(A,Object(s.d)(Object(s.a)(k.a)));window.store=T;var I=T,U=a(33),D=a.n(U),C=a(22),L=a(23),F=a(26),M=a(25),R=(a(88),a(18)),G=a.n(R),W=a(9),H=function(){return r.a.createElement("nav",{className:G.a.nav},r.a.createElement("div",{className:G.a.item},r.a.createElement(W.b,{to:"/profile",activeClassName:G.a.active},"profile")),r.a.createElement("div",{className:G.a.item},r.a.createElement(W.b,{to:"/news",activeClassName:G.a.active},"news")),r.a.createElement("div",{className:G.a.item},r.a.createElement(W.b,{to:"/dialogs",activeClassName:G.a.active},"dialogs")),r.a.createElement("div",{className:G.a.item},r.a.createElement(W.b,{to:"/friends",activeClassName:G.a.active},"friends")))},J=a(19),z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"News"))},Y=a(31),q=a.n(Y),V=a(21),B=a.n(V),X=function(e){return r.a.createElement("div",{className:B.a.dialog},r.a.createElement("div",{className:B.a.pic},r.a.createElement("img",{className:B.a.img,src:"https://avatars.mds.yandex.net/get-zen_doc/1362956/pub_5bf63a4d77663700aaa65737_5bf63cbcd238aa00aac52f5b/scale_1200"})),r.a.createElement(W.b,{activeClassName:B.a.activ,className:B.a.link,to:"/dialogs/".concat(e.id)}," ",e.name,r.a.createElement("div",{className:B.a.lastmessage},"last message")))},Z=a(59),K=a.n(Z),Q=function(e){return r.a.createElement("div",{className:K.a.messageMY},e.message)},$=a(36),ee=a.n($),te=a(16),ae=function(e){var t=e.onSubmit,a=Object(te.a)(),n=a.register,s=a.handleSubmit,c=a.errors;return r.a.createElement("form",{onSubmit:s(t)},r.a.createElement("div",{className:ee.a.text},r.a.createElement("div",null,r.a.createElement("textarea",{name:"newMessage",placeholder:"New message",ref:n({required:"You can't send an empty message",maxLength:{value:30,message:"Exceeded the limit"}})}))),r.a.createElement("div",{className:ee.a.btn},r.a.createElement("button",null,"Send message"),c.newMessage&&r.a.createElement("span",null,c.newMessage.message)))},ne=function(e){Object(te.a)().reset;return r.a.createElement("div",{className:ee.a.addMessageWrapper},r.a.createElement(ae,{onSubmit:function(t,a){var n=t.newMessage;a.target.reset(),e.addMessage(n)}}))},re=function(e){var t=e.dialogsPage.dialogsData.map((function(e){return r.a.createElement(X,{key:e.id,name:e.name,id:e.id})})),a=e.dialogsPage.messagesData.map((function(e){return r.a.createElement(Q,{key:e.id,message:e.message})}));return r.a.createElement("div",{className:q.a.dialogs_wrapper},r.a.createElement("div",{className:q.a.dialogs},t),r.a.createElement("div",{className:q.a.messages},a),r.a.createElement("div",{className:q.a.sendmessage},r.a.createElement(ne,{addMessage:e.addMessage})))},se=a(8),ce=function(e){return{isAuth:e.auth.isAuth}},ie=Object(s.d)((function(e){return Object(se.b)(ce)((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(J.a,{to:"/login"})}))}),Object(se.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:function(e){return{type:"dialogs/ADD-MESSAGE",textMess:e}}}))(re),ue=a(60),oe=a.n(ue),le=a(54),me=a(13),fe=a(20),de=a.n(fe),pe=a(35),ge=a(52),Ee=a.n(ge),he=function(e){var t=Object(n.useState)(!1),a=Object(me.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(e.status),u=Object(me.a)(i,2),o=u[0],l=u[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return e.ifOwner?r.a.createElement(r.a.Fragment,null,!s&&r.a.createElement("div",null,r.a.createElement("span",{className:de.a.status,onDoubleClick:function(){c(!0)}},e.status||"---")),s&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatusUser(o)},value:o}))):r.a.createElement("span",null,e.status||"---")},ve=function(e){var t=e.profile,a=e.onSubmit,n=Object(te.a)(),s=n.register,c=n.handleSubmit,i=n.errors;return r.a.createElement("form",{onSubmit:c(a)},r.a.createElement("div",null,r.a.createElement("b",null,"Full name")," ",r.a.createElement("input",{defaultValue:null===t||void 0===t?void 0:t.fullName,name:"fullName",type:"text",placeholder:"Full name",ref:s({maxLength:{value:20,message:"Exceeded the limit"}})}),i.fullName&&r.a.createElement("p",null,i.fullName.message)),r.a.createElement("div",null,r.a.createElement("b",null,"About me")," ",r.a.createElement("input",{defaultValue:null===t||void 0===t?void 0:t.aboutMe,name:"aboutMe",type:"text",placeholder:"Full name",ref:s({maxLength:{value:20,message:"Exceeded the limit"}})}),i.aboutMe&&r.a.createElement("p",null,i.aboutMe.message)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job")," ",r.a.createElement("input",{name:"lookingForAJob",type:"checkbox",ref:s({maxLength:{value:20,message:"Exceeded the limit"}})}),i.lookingForAJob&&r.a.createElement("p",null,i.lookingForAJob.message)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job description"),r.a.createElement("br",null)," ",r.a.createElement("textarea",{defaultValue:null===t||void 0===t?void 0:t.lookingForAJobDescription,name:"lookingForAJobDescription",placeholder:"Looking for a job description",ref:s({maxLength:{value:20,message:"Exceeded the limit"}})}),i.lookingForAJobDescription&&r.a.createElement("p",null,i.lookingForAJobDescription.message)),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts:")," ",t&&Object.keys(t.contacts).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("b",null,e)," ",r.a.createElement("input",{name:"contacts."+e,placeholder:e,type:"text",ref:s({maxLength:{value:20,message:"Exceeded the limit"}})}))}))," "),r.a.createElement("button",{onClick:function(){}}," save"))},be=function(e){var t=e.profile,a=Object(le.a)(e,["profile"]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("b",null,"Full name")," ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),t.lookingForAJob&&t.lookingForAJob?" Yes":" No"),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job description"),r.a.createElement("br",null),t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return r.a.createElement(_e,{title:e,value:t.contacts[e],key:e})}))," "),a.ifOwner&&r.a.createElement("button",{onClick:a.editModeOn}," edit"))},_e=function(e){var t=e.title,a=e.value;return r.a.createElement("div",{className:de.a.contact},r.a.createElement("b",null,t),a)},Oe=function(e){var t=Object(n.useState)(!1),a=Object(me.a)(t,2),s=a[0],c=a[1];if(!e.userProfile)return r.a.createElement(pe.a,null);return r.a.createElement("div",{className:de.a.profileInfoWrapper},r.a.createElement("div",{className:de.a.picture},r.a.createElement("img",{src:e.userProfile.photos.large||Ee.a,alt:"ava"})),r.a.createElement("div",null,e.ifOwner&&r.a.createElement("input",{type:"file",onClick:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})),r.a.createElement("div",{className:de.a.info},r.a.createElement("b",null,"Status: "),r.a.createElement(he,{ifOwner:e.ifOwner,status:e.status,updateStatusUser:e.updateStatusUser}),s?r.a.createElement(ve,{onSubmit:function(t){e.saveProfile(t).then((function(){c(!1)}))},profile:e.userProfile}):r.a.createElement(be,{editModeOn:function(){c(!0)},profile:e.userProfile,ifOwner:e.ifOwner})))},je=a(62),Se=a.n(je),we=a(28),Pe=a.n(we),xe=r.a.memo((function(e){return r.a.createElement("div",{className:Pe.a.post},r.a.createElement("div",{className:Pe.a.text},r.a.createElement("div",{className:Pe.a.message},e.message),r.a.createElement("div",{className:Pe.a.like},"like ",e.counterLike)),r.a.createElement("img",{className:Pe.a.img,src:"https://avatars.mds.yandex.net/get-pdb/214908/5cf679dc-d4ef-43f0-88be-9b2a7fda87d5/s1200?webp=false"}))})),ke=a(37),ye=a.n(ke),Ne=function(e){var t=e.onSubmit,a=Object(te.a)(),n=a.register,s=a.handleSubmit,c=a.errors;return r.a.createElement("form",{onSubmit:s(t)},r.a.createElement("div",{className:ye.a.text},r.a.createElement("textarea",{name:"messageText",placeholder:"Full name",ref:n({required:"This fields is required",maxLength:{value:20,message:"Exceeded the limit"}})}),c.messageText&&r.a.createElement("p",null,c.messageText.message)),r.a.createElement("div",{className:ye.a.btn},r.a.createElement("button",null,"Add posts")))},Ae=function(e){Object(te.a)().reset;return r.a.createElement("div",{className:ye.a.addPostsWrapper},r.a.createElement(Ne,{onSubmit:function(t,a){a.target.reset(),e.addPost(t.messageText)}}))},Te=function(e){var t=e.postsData,a=e.addPost,n=t.map((function(e){return r.a.createElement(xe,{counterLike:e.counterLike,message:e.message,key:e.id})}));return r.a.createElement("div",{className:Se.a.posts},r.a.createElement(Ae,{addPost:a}),r.a.createElement("div",null,n))},Ie=Object(se.b)((function(e){return{postsData:e.profilePage.postsData}}),{addPost:function(e){return{type:f,newPost:e}}})(Te),Ue=function(e){return r.a.createElement("div",{className:oe.a.profileWrapper},r.a.createElement(Oe,{saveProfile:e.saveProfile,ifOwner:e.ifOwner,savePhoto:e.savePhoto,userProfile:e.userProfile,status:e.status,updateStatusUser:e.updateStatusUser}),r.a.createElement(Ie,null))},De=function(e){Object(F.a)(a,e);var t=Object(M.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getUser(e),this.props.getStatusUser(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Ue,Object.assign({},this.props,{ifOwner:!this.props.match.params.userId,updateStatusUser:this.props.updateStatusUser,userProfile:this.props.userProfile,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,status:this.props.status}))}}]),a}(r.a.Component),Ce=Object(s.d)(J.g,Object(se.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.userStatus,userId:e.auth.id,isAuth:e.auth.isAuth,auth:e.auth}}),{getUser:g,getStatusUser:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.e.getStatus(e);case 2:n=t.sent,a(p(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusUser:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.e.updateStatus(e);case 2:t.sent.resultCode===m.b.success&&a(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.e.savePhoto(e);case 2:(n=t.sent).resultCode===m.b.success&&a({type:"profile/SET_PHOTO",photos:n.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.id,t.next=3,m.e.saveProfile(e);case 3:t.sent.resultCode===m.b.success&&r&&a(g(r));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}))(De),Le=a(32),Fe=a.n(Le),Me=function(e){return r.a.createElement("header",{className:Fe.a.header},r.a.createElement("img",{className:Fe.a.img,src:"https://cdn0.iconfinder.com/data/icons/glyphie-1/40/drum_instrument_music_rock-512.png"}),r.a.createElement("div",{className:Fe.a.tect},"\u0432\u043d\u0435 \u0442\u0430\u043a\u0442\u0430"),r.a.createElement("div",{className:Fe.a.login},e.auth.isAuth?r.a.createElement("div",null,e.auth.login,r.a.createElement("button",{onClick:e.logout},"Log uot")):r.a.createElement(W.b,{to:"/login"},"login")))},Re=function(e){Object(F.a)(a,e);var t=Object(M.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"render",value:function(){return r.a.createElement(Me,Object.assign({logout:this.props.logoutUser},this.props))}}]),a}(r.a.Component),Ge=Object(s.d)(Object(se.b)((function(e){return{auth:e.auth}}),{logoutUser:function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.c.logout();case 2:e.sent.resultCode===m.b.success&&t(S(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Re),We=function(e){var t=e.captchaUrl,a=e.onSubmit,n=Object(te.a)(),s=n.register,c=n.handleSubmit,i=n.errors;return r.a.createElement("form",{onSubmit:c(a)},r.a.createElement("div",null,r.a.createElement("input",{name:"email",type:"email",placeholder:"email",ref:s({required:"This fields is required"})})),i.email&&r.a.createElement("p",null,i.email.message),r.a.createElement("div",null,r.a.createElement("input",{name:"password",type:"password",placeholder:"password",ref:s({required:"This fields is required"})})),i.password&&r.a.createElement("p",null,i.password.message),r.a.createElement("div",null,r.a.createElement("input",{name:"rememberMe",type:"checkbox",ref:s}),"Remember me"),t&&r.a.createElement(r.a.Fragment,null," ",r.a.createElement("img",{src:t}),r.a.createElement("br",null)," ",r.a.createElement("input",{name:"captcha",placeholder:"captcha",ref:s})),r.a.createElement("div",null,r.a.createElement("button",null,"login")))},He=Object(se.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{loginUser:function(e,t,a,n){return function(){var r=Object(u.a)(i.a.mark((function r(s){var c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.c.login(e,t,a,n);case 2:(c=r.sent).resultCode===m.b.success?s(w()):c.resultCode===m.a.captcha&&s(P());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(J.a,{to:"/profile"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Login")),r.a.createElement("div",null,r.a.createElement(We,{captchaUrl:e.captchaUrl,onSubmit:function(t){var a=t.email,n=t.password,r=t.rememberMe,s=t.captcha;e.loginUser(a,n,r,s)}})))})),Je=r.a.lazy((function(){return a.e(3).then(a.bind(null,97))})),ze=function(e){Object(F.a)(a,e);var t=Object(M.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(L.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ge,null),r.a.createElement(H,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(J.d,null,r.a.createElement(J.b,{path:"/Profile/:userId?",render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(J.b,{path:"/Dialogs",render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(J.b,{path:"/News",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(J.b,{path:"/Friends",render:function(){return r.a.createElement(Je,null)}}),r.a.createElement(J.b,{path:"/Login",render:function(){return r.a.createElement(He,null)}}),r.a.createElement(J.a,{form:"/",to:"/profile"}))))):r.a.createElement(pe.a,null)}}]),a}(r.a.Component),Ye=Object(s.d)(Object(se.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(w());case 2:t({type:"app/INITIALIZED_SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),J.g)(ze);D.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W.a,null,r.a.createElement(se.a,{store:I},r.a.createElement(Ye,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.66548d39.chunk.js.map