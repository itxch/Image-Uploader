(this["webpackJsonpimage-uploader"]=this["webpackJsonpimage-uploader"]||[]).push([[0],{29:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),c=r.n(a),s=r(12),i=r.n(s),o=(r(29),r(15)),l=r.n(o),d=r(19),u=r(22),m=function(e){var t=e.children;return Object(n.jsx)("div",{className:"w-402 px-8 py-10 bg-white rounded-md text-center shadow font-Poppins",children:t})},h=r.p+"static/media/ImageUploadBackground.3710b8a3.svg",b=r(3),j=function(e){var t=e.uploadImage,r=Object(b.f)(),a=function(e){if(null!=e.type.match(/image\/[a-z]*/))return!0},c=function(e){switch(e.type){case"dragenter":case"dragover":e.preventDefault(e),e.target.classList.add("border-4","animate-pulse");break;case"dragleave":e.preventDefault(e),e.target.classList.remove("border-4","animate-pulse");break;case"drop":if(e.target.classList.remove("border-4","animate-pulse"),e.dataTransfer.files.length>0&&a(e.dataTransfer.files[0])){e.preventDefault(e);var n=e.dataTransfer.files[0];t(n),r.push("/uploading")}break;default:return e}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"text-2xl font-medium text-gray-800",children:"Upload your image"}),Object(n.jsx)("p",{className:"text-md font-light text-gray-400",children:"File should be .jpeg, .png..."}),Object(n.jsxs)("div",{onDragEnter:function(e){return c(e)},onDragOver:function(e){return c(e)},onDragLeave:function(e){return c(e)},onDrop:function(e){return c(e)},className:" rounded-md border-dashed border-2 border-blue-300 min-w-full my-10 bg-gray-100 text-center p-3 py-5 flex flex-wrap justify-center content-center",children:[Object(n.jsx)("img",{width:"75%",alt:"drag here to upload",src:h}),Object(n.jsx)("p",{className:" my-5 text-md font-light text-gray-400",children:"Drag & Drop your image here"})]}),Object(n.jsx)("p",{className:" my-5 text-md font-light text-gray-400",children:"Or"}),Object(n.jsxs)("form",{id:"my-form",children:[Object(n.jsx)("label",{className:"p-3 bg-blue-500 text-white rounded w-1/2 hover:bg-blue-700 cursor-pointer",htmlFor:"newPhoto",children:"Choose a file"}),Object(n.jsx)("input",{type:"file",accept:"image/*",name:"newPhoto",id:"newPhoto",className:"invisible",onChange:function(){return function(){var e=new FormData(document.forms[0]).get("newPhoto");""!==e.name&&a(e)&&(t(e),r.push("/uploading"))}()}})]})]})},p=function(){var e=Object(b.f)();return setTimeout((function(){e.push("/share")}),1500),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"text-2xl font-medium text-gray-800",children:"Uploading..."}),Object(n.jsx)("div",{className:"flex justify-around",children:Object(n.jsx)("span",{className:"inline-flex rounded-md shadow-sm",children:Object(n.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-10 w-10 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[Object(n.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),Object(n.jsx)("path",{className:"opacity-75",fill:"#3b82f6",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})})]})},f=r(20),g=r(21),x=r.n(g),O=function(e){var t=e.imageUrl,r=void 0===t?"https://image-uploader.hamza.law/36d8f75ea936c7e24d60c0edde25d53489bcc2d2.png":t;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"text-5xl p-2",children:Object(n.jsx)(x.a,{htmlColor:"#219653",fontSize:"inherit"})}),Object(n.jsx)("h3",{className:"text-2xl font-medium text-gray-800",children:"Uploaded Successfully!"}),Object(n.jsxs)("div",{className:"grid",children:[Object(n.jsx)("a",{className:"place-self-center",alt:"Press to go to image",href:r,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{alt:"Description",className:"max-w-full",src:r})}),Object(n.jsxs)("form",{className:"mt-4 flex",onSubmit:function(e){return e.preventDefault()},children:[Object(n.jsx)("input",{className:"w-4/5 rounded-md p-2 border-t border-b border-l text-sm truncate text-gray-800 border-gray-200 bg-white",type:"text",value:"".concat(r),readOnly:!0}),Object(n.jsx)("button",{className:"w-1/5 p-2 rounded-md bg-blue-500 text-white font-bold border border-blue-500",onClick:function(e){return function(e,t){var r=new Blob([t],{type:"text/plain"}),n=[new ClipboardItem(Object(f.a)({},r.type,r))];navigator.clipboard.write(n),e.target.innerHTML="Done!"}(e,r)},children:"Copy Link"})]})]})]})},v=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),r=t[0],c=t[1],s=function(){var e=Object(d.a)(l.a.mark((function e(){var t,r,n,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:{},r=a.length>1&&void 0!==a[1]?a[1]:"/imageUpload",(n=new FormData).append("newPhoto",t),fetch(r,{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){var t=e.url;return c(t)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(m,{children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/uploading",children:Object(n.jsx)(p,{})}),Object(n.jsx)(b.a,{path:"/share",children:Object(n.jsx)(O,{imageUrl:r})}),Object(n.jsx)(b.a,{path:"/",children:Object(n.jsx)(j,{uploadImage:s})})]})})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,53)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},y=r(11);i.a.render(Object(n.jsx)(y.a,{children:Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.6c637bb3.chunk.js.map