import{u as g,g as y}from"./Footer.bede4955.js";import{b as x,w,r as N,L as B,o as f,f as p,B as e,C as l,u as s,j as v,N as C,O as h,P as b,F as M}from"./entry.3a1e412b.js";const j=async(r,n,i,m)=>{const a=x(),t={headers:{"accept-encoding":"*",Authorization:"Bearer "+a.strapi_bearer}};let u=a.STRAPI_URL+"/sendMail";const{data:_,error:c}=await g(u,{method:"POST",body:{emailFrom:r,emailTo:m,fullName:n,message:i},headers:t.headers},"$ZM5rYe5vyB");return _},k={class:"modal fade",id:"success-modal"},S={class:"modal-dialog"},V={class:"modal-content"},I={class:"modal-header"},R={class:"modal-title fs-5",id:"exampleModalLabel"},U=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},A={class:"d-flex justify-content-center mx-auto"},E={key:0,class:"d-flex flex-column justify-content-center"},F={key:1,class:"d-flex flex-column justify-content-center"},L={class:"modal-footer"},O={type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},P={class:"section-wrapper form"},T=["onSubmit"],D={for:"name"},z=["placeholder"],G={for:"email"},Y=["placeholder"],Z={for:"message"},$=["placeholder"],H={class:"btn btn-primary",type:"submit"},Q={__name:"Contact",props:{data:Object},async setup(r){let n,i;const m=r,a=([n,i]=w(()=>y()),n=await n,i(),n),t=N({fullName:"",message:"",email:"",success:!1}),{data:u}=B(m);async function _(){var c=await j(t.value.email,t.value.fullName,t.value.message,u.value.email);if(c&&c.value&&c.value.messageId){t.value.fullName="",t.value.message="",t.value.email="",t.value.success=!0;var o=new bootstrap.Modal(document.getElementById("success-modal"),{keyboard:!1});o.show()}}return(c,o)=>(f(),p(M,null,[e("div",k,[e("div",S,[e("div",V,[e("div",I,[e("h3",R,l(s(a)["contact.send.title"]),1),U]),e("div",q,[e("div",A,[s(t).success==!0?(f(),p("div",E,l(s(a)["contact.send.success"]),1)):v("",!0),s(t).success==!1?(f(),p("div",F,l(s(a)["contact.send.failure"]),1)):v("",!0)])]),e("div",L,[e("button",O,l(s(a)["menu.popup.language.close"]),1)])])])]),e("div",P,[e("form",{onSubmit:C(_,["prevent"])},[e("fieldset",null,[e("ul",null,[e("li",null,[e("label",D,l(s(a)["contact.form.fullName.label"]),1),h(e("input",{type:"text",id:"name",placeholder:s(a)["contact.form.fullName.placeholder"],"onUpdate:modelValue":o[0]||(o[0]=d=>s(t).fullName=d),required:""},null,8,z),[[b,s(t).fullName]])]),e("li",null,[e("label",G,l(s(a)["contact.form.email.label"]),1),h(e("input",{type:"email",id:"email",placeholder:s(a)["contact.form.email.placeholder"],"onUpdate:modelValue":o[1]||(o[1]=d=>s(t).email=d),required:""},null,8,Y),[[b,s(t).email]])]),e("li",null,[e("label",Z,l(s(a)["contact.form.message.label"]),1),h(e("textarea",{name:"message",id:"message","onUpdate:modelValue":o[2]||(o[2]=d=>s(t).message=d),rows:"10",placeholder:s(a)["contact.form.message.placeholder"],required:""},null,8,$),[[b,s(t).message]])])]),e("button",H,l(s(a)["contact.form.button.send"]),1)])],40,T)])],64))}};export{Q as _};