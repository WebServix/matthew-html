import{s as b,a as x,b as k,c as j,_ as $}from"./Footer.bede4955.js";import{L as w,o as a,f as o,F as C,h as H,B as i,u as e,r as L,b as B,w as E,e as F,i as s,c as h,j as _}from"./entry.3a1e412b.js";import{_ as M}from"./Contact.593fba55.js";import{u as A}from"./composables.6247d2ef.js";const O={class:"section-wrapper grid four"},S={class:"grid-element"},K={class:"grid-element-title"},R={key:0},V=["innerHTML"],I=["src"],N=["innerHTML"],T={__name:"Columns",props:{data:Array},setup(p){const r=p,{data:c}=w(r);return(t,u)=>(a(),o("div",O,[(a(!0),o(C,null,H(e(c),(n,g)=>(a(),o("div",S,[i("div",K,[n.logo&&n.logo.data==null?(a(),o("h4",R,[i("span",{innerHTML:n.title},null,8,V)])):(a(),o("img",{key:1,src:n.logo.data.attributes.url,alt:"logo"},null,8,I))]),i("div",null,[i("span",{innerHTML:n.text},null,8,N)])]))),256))]))}},q={id:"company-snapshot"},z={key:1,id:"services-section"},D={key:3,id:"partners-section"},G={id:"form-section"},X={__name:"company",async setup(p){let r,c;const t=L({}),u=B(),n=([r,c]=E(()=>b("company",null,"?populate=deep")),r=await r,c(),r);if(n.value)t.value=n.value.data.attributes,A({title:t.value.SEO.google_title,meta:[{name:"description",content:t.value.SEO.google_description},{name:"og:title",content:t.value.SEO.google_title},{name:"og:type",content:"website"},{name:"og:url",content:u.BASE_URL},{name:"og:image",content:t.value.header&&t.value.header.photo&&t.value.header.photo.data?t.value.header.photo.data.attributes.url:""},{name:"og:description",content:t.value.SEO.google_description},{name:"twitter:card",content:"summary_large_image"}],script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4",crossorigin:"anonymous"}],link:[{href:"https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css",rel:"stylesheet"},{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",rel:"stylesheet",type:"text/css",integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",crossorigin:"anonymous"},{href:"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",rel:"stylesheet",type:"text/css"},{href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",rel:"stylesheet",type:"text/css"}]});else throw F({statusCode:404,statusMessage:"Page Not Found index"});return(g,U)=>{const y=x,l=j,d=k,m=T,f=M,v=$;return a(),o("div",null,[s(y,{header:e(t).header},null,8,["header"]),s(l,{type:"secondary",position:"negative"}),i("section",q,[s(d,{data:e(t).description},null,8,["data"])]),e(t).list_services.data?(a(),h(l,{key:0,type:"primary"})):_("",!0),e(t).list_services.data?(a(),o("section",z,[s(d,{data:e(t).service},null,8,["data"]),s(m,{data:e(t).list_services.data.attributes.Items},null,8,["data"])])):_("",!0),e(t).list_partners.data?(a(),h(l,{key:2,type:"tertiary"})):_("",!0),e(t).list_partners.data?(a(),o("section",D,[s(d,{data:e(t).partners},null,8,["data"]),s(m,{data:e(t).list_partners.data.attributes.Items},null,8,["data"])])):_("",!0),s(l,{type:"primary"}),i("section",G,[s(d,{data:e(t).contact_section,position:"centered"},null,8,["data"]),s(f,{data:e(t).contact_form},null,8,["data"])]),s(v)])}}};export{X as default};