(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(7),i=n.n(s),o=(n(16),n(10)),u=n(2),l=n.p+"static/media/Logo.ff16f24b.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:l,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})})},p=n.p+"static/media/edit__button.8667ac4a.svg",j=n.p+"static/media/add__button.d86bb2ed.svg",h=n.p+"static/media/like.49570bcb.svg",_=n.p+"static/media/card-delete.a274c87c.svg",m=r.a.createContext();var f=function(e){var t=e.cardData,n=r.a.useContext(m),c=t.owner._id===n._id,s=t.likes.some((function(e){return e._id===n._id}));return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:t.link,alt:t.name,className:"card__img",onClick:function(){e.onCardClick(t)}}),Object(a.jsxs)("div",{className:"card__name-container",children:[Object(a.jsx)("h3",{className:"card__name",children:t.name}),Object(a.jsxs)("div",{className:"like__container",children:[Object(a.jsx)("button",{type:"button",className:"like ".concat(s&&"like_active"),children:Object(a.jsx)("img",{src:h,alt:"\u043b\u0430\u0439\u043a",onClick:function(){e.onCardLike(t)}})}),Object(a.jsx)("span",{className:"like__counter",children:t.likes.length})]}),Object(a.jsx)("button",{type:"button",className:"card__delete",onClick:function(){e.onCardDelete(t)},children:Object(a.jsx)("img",{src:_,style:{display:c?"block":"none"},alt:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})})]})]},t.id)};var b=function(e){var t=r.a.useContext(m);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("main",{children:Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__container",children:[Object(a.jsx)("img",{src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(a.jsx)("button",{type:"button",className:"profile__avatar-button",onClick:e.onEditAvatar}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__info-container",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile,children:Object(a.jsx)("img",{src:p,alt:"\u0440\u0443\u0447\u043a\u0430",className:"profile__edit-button-vector"})})]}),Object(a.jsx)("p",{className:"profile__activity",children:t.about})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace,children:Object(a.jsx)("img",{src:j,alt:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__add-button-vector"})})]})}),Object(a.jsx)("div",{id:"elementsTemplate",children:Object(a.jsx)("div",{className:"elements cards",children:e.cards.map((function(t){return Object(a.jsx)(f,{cardData:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var O=function(){return Object(a.jsx)("footer",{className:"page__footer",children:Object(a.jsx)("p",{className:"page__footer-author",children:"\xa9 2020 Mesto Russia"})})};var v=function(e){return Object(a.jsx)("section",{className:"popup ".concat(e.isOpen?"popup_opened":""),id:e.name,children:Object(a.jsx)("div",{className:"popup__container",children:Object(a.jsxs)("form",{className:"popup__form",name:"form-".concat(e.name),noValidate:!0,onSubmit:e.onSubmit,children:[Object(a.jsx)("button",{type:"button",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__header",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save popup__save_add",children:e.textBtn})]})})})};var x=function(e){return Object(a.jsx)("div",{className:"popup popup_img ".concat(e.card.link?"popup_opened":""),id:"popupImg",children:Object(a.jsxs)("div",{className:"popup__container-img",children:[Object(a.jsx)("img",{className:"popup__img",src:e.card.link,alt:"#"}),Object(a.jsx)("div",{className:"popup__img-caption",children:e.card.name}),Object(a.jsx)("button",{type:"button",className:"popup__close popup__close-img","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:e.onClose})]})})},g=n(6);var C=function(e){var t=r.a.useState(""),n=Object(u.a)(t,2),c=n[0],s=n[1],i=r.a.useState({}),o=Object(u.a)(i,2),l=o[0],d=o[1],p=r.a.useContext(m);return r.a.useEffect((function(){s(p.name),d(p.about)}),[e.isOpen]),Object(a.jsx)(v,{isOpen:e.isOpen,onClose:e.onClose,name:"popupEdit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",Object(g.a)({value:c||"",onChange:function(e){s(e.target.value)},required:!0,minLength:"2",maxLength:"40",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",id:"input-name",className:"popup__input popup__input_name"},"type","text")),Object(a.jsx)("span",{className:"popup__error",id:"input-name-error"}),Object(a.jsx)("input",Object(g.a)({value:l||"",onChange:function(e){d(e.target.value)},required:!0,minLength:"2",maxLength:"200",type:"text",name:"activity",placeholder:"\u041e \u0441\u0435\u0431\u0435",id:"input-activity",className:"popup__input popup__input_activity"},"type","text")),Object(a.jsx)("span",{className:"popup__error",id:"input-activity-error"})]})})};var N=function(e){var t=r.a.useRef();return r.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(a.jsx)(v,{isOpen:e.isOpen,onClose:e.onClose,onUpdateUser:e.onUpdateUser,name:"popupAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textBtn:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateUser({avatar:t.current.value})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{required:!0,name:"avatar-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"input-url",className:"popup__input popup__input_avatar-link",type:"url",ref:t}),Object(a.jsx)("span",{className:"popup__error",id:"input-url-error"})]})})};var k=function(e){var t=r.a.useRef(),n=r.a.useRef();return r.a.useEffect((function(){t.current.value="",n.current.value=""}),[e.isOpen]),Object(a.jsx)(v,{isOpen:e.isOpen,onClose:e.onClose,name:"popupAdd",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textBtn:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value})},children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{ref:t,required:!0,minLength:"2",maxLength:"30",type:"text",name:"card-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"input-text",className:"popup__input popup__input_card-name"}),Object(a.jsx)("span",{className:"popup__error",id:"input-text-error"}),Object(a.jsx)("input",{ref:n,required:!0,name:"card-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"input-url",className:"popup__input popup__input_card-link",type:"url"}),Object(a.jsx)("span",{className:"popup__error",id:"input-url-error"})]})})},y=n(8),E=n(9),S=new(function(){function e(t){Object(y.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(E.a)(e,[{key:"_parseResult",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._parseResult(t)}))}},{key:"getUserProfile",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._parseResult(t)}))}},{key:"setUserProfile",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._parseResult(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e,t)}).then((function(e){return n._parseResult(e)}))}},{key:"newAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._parseResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResult(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._parseResult(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResult(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"5aa200a5-627f-47bb-8621-5fa3329764a9","Content-Type":"application/json"}});var U=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=r.a.useState(!1),i=Object(u.a)(s,2),l=i[0],p=i[1],j=r.a.useState(!1),h=Object(u.a)(j,2),_=h[0],f=h[1],g=r.a.useState(!1),y=Object(u.a)(g,2),E=y[0],U=y[1],P=r.a.useState({}),L=Object(u.a)(P,2),R=L[0],A=L[1],D=r.a.useState([]),T=Object(u.a)(D,2),w=T[0],F=T[1];function B(){c(!1),p(!1),f(!1),U(!1)}return r.a.useEffect((function(){S.getInitialCards().then((function(e){F(e)})).catch((function(e){console.log(e)}))}),[]),r.a.useEffect((function(){S.getUserProfile().then((function(e){A(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(m.Provider,{value:R,children:[Object(a.jsx)(d,{}),Object(a.jsx)(b,{onEditProfile:function(){c(!n)},onAddPlace:function(){p(!l)},onEditAvatar:function(){f(!_)},onCardClick:function(e){U(e)},onCardLike:function(e){e.likes.some((function(e){return e._id===R._id}))?S.dislikeCard(e._id).then((function(t){var n=w.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){console.log(e)})):S.likeCard(e._id).then((function(t){var n=w.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){var t=e.owner._id===R._id;S.deleteCard(e._id,t).then((function(){var t=w.filter((function(t){return t._id!==e._id}));F(t)})).catch((function(e){console.log(e)}))},cards:w}),Object(a.jsx)(O,{}),Object(a.jsx)(C,{isOpen:n,onClose:B,onUpdateUser:function(e){S.setUserProfile(e).then((function(e){A(e),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(k,{isOpen:l,onClose:B,onAddPlace:function(e){S.addNewCard(e).then((function(e){F([e].concat(Object(o.a)(w))),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(N,{isOpen:_,onClose:B,onUpdateUser:function(e){S.newAvatar(e).then((function(e){A(e),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(v,{name:"popupWarning",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",textBtn:"\u0414\u0430"}),Object(a.jsx)(x,{onClose:B,card:E})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),P()}},[[17,1,2]]]);
//# sourceMappingURL=main.4bb04052.chunk.js.map