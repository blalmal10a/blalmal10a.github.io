import{r as _,o as f,a,c as s,b as i,n as g,d as e,F as y,e as m,t as d,f as P,g as b}from"./runtime-core.esm-bundler.tegLx9M1.js";const v=(c,h)=>{const t=c.__vccOpts||c;for(const[n,u]of h)t[n]=u;return t},k={__name:"PaymentHistoryTable",setup(c,{expose:h}){h();const t=_({phoneParameter:null,authUser:null,loading:!1,paymentHistories:[]});f(()=>{const o=new URL(window.location);t.phoneParameter=o.searchParams.get("phone"),p(),u()});async function n(){}async function u(){try{t.loading=!0;const o=await fetch("https://pharmacy.sirukla.in/api/payment-histories?phone=9774888724",{headers:{authorization:"Bearer 64|t1qamnT64VI5qP5pSDxKIa9LjsyHoMhW6Z7JR76i",Accept:"application/json","Content-Type":"application/json"}}).then(l=>l.json()).catch(l=>console.log(".catch outer most",l));t.loading=!1,console.log("res is: ",o)}catch{t.loading=!1}}async function p(){try{t.loading=!0;const o=await fetch(`https://pharmacy.sirukla.in/api/customers${t.phoneParameter?`/${t.phoneParameter}`:""}`,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(l=>l.json()).catch(l=>console.log(".catch outer most",l));t.loading=!1,console.log("res is: ",o)}catch{t.loading=!1}}const r={usePayment:t,onSubmit:n,getPaymentHistory:u,getCustomer:p,onBeforeMount:b,onMounted:f,reactive:_};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}},w={key:0,class:"mb-16 flex justify-center"},x=e("div",{style:{width:"min(400px, 100vw)"}},[e("form",null,[e("label",{for:"phone"},"Phone"),e("input",{placeholder:"Enter your phone number",required:"",minlength:"10",maxlength:"10",name:"phone",type:"text"}),e("div",{class:"text-center"},[e("button",null,"submit")])])],-1),j=[x],T=e("thead",null,[e("tr",null,[e("th",null,"#Invoice"),e("th",null,"Date"),e("th",null,"Amount"),e("th",null,"Validity"),e("th",null," Download ")])],-1),A=e("tr",null,[e("td",{colspan:"5"},[e("div",{style:{position:"relative","padding-left":"0",display:"flex","justify-content":"center"}},[e("div",{class:"table-loading"})])])],-1),H=e("tr",null,[e("td",{colspan:"5",style:{position:"relative"}},[e("div",{class:"absolute right-0 bottom-0 p-3"}," Loading... ")])],-1),N={key:0},S={colspan:"5"},B=e("br",null,null,-1),V=e("br",null,null,-1);function q(c,h,t,n,u,p){return a(),s("div",null,[n.usePayment.phoneParameter?i("",!0):(a(),s("div",w,j)),n.usePayment.phoneParameter?(a(),s("table",{key:1,style:g([{width:"100%","margin-top":"3rem"},`color:${n.usePayment.loading?"grey":"white"}`])},[T,e("tbody",null,[n.usePayment.loading?(a(),s(y,{key:0},[A,H],64)):i("",!0),n.usePayment.loading?i("",!0):(a(),s(y,{key:1},[n.usePayment.authUser?i("",!0):(a(),s("tr",N,[e("td",S,[m(" - No Payment histores found from +91 "+d(n.usePayment.phoneParameter)+" ",1),B,m(" - All your payment histories will be available, once the PAYMENT GATEWAY is ready "),V,m(" - No payment links found with the phone number provided ")])])),n.usePayment.authUser?.id?(a(!0),s(y,{key:1},P(c.userPayment.paymentHistories,(r,o)=>(a(),s("tr",{key:o},[e("td",null,d(r.invoice_no),1),e("td",null,d(r.payment_date),1),e("td",null,d(r.paid_amount),1),e("td",null,d(r.validity),1)]))),128)):i("",!0)],64))])],4)):i("",!0)])}const D=v(k,[["render",q]]);export{D as default};
