"use strict"
let ardTokos=document.querySelector(".ard_tokos");
let ardyunq=document.querySelector(".ardyunq");
let ekHark=document.querySelector(".ek_hark");
let entaka=document.querySelector(".entaka");
let zutTokosagumar=document.querySelector(".zut");
tokos.oninput=gumar.oninput=jamket.oninput=function(){
    let z=((tokos.value/100)/12)+1;
console.log(z);
ardTokos.innerHTML=Math.round((((z)**12)-1)*100);
let x=Math.round((((gumar.value*tokos.value)/100)*jamket.value)/365);
ardyunq.innerHTML=x;
let v=Math.round((x*10)/100);
ekHark.innerHTML=v;
let a=Math.round(x-v);
zutTokosagumar.innerHTML=a;
entaka.innerHTML=Math.round(+gumar.value+a);
}
let sectionButton=document.querySelectorAll(".section-button");
console.log(sectionButton);
let contentDiv=document.querySelectorAll(".content");
let minusIcon=document.querySelectorAll(".fa-minus");
let plusIcon=document.querySelectorAll(".fa-plus");
for(let i=0;i<sectionButton.length;i++){
sectionButton[i].addEventListener("click",function(){//երբ որ  քլիկ անենք բաթնի վրա  թող տեղի  ունեենա  հետևյալ  ֆունկցիան
    contentDiv[i].classList.toggle("blockcl");//սկզբից մտնում ենք classList-ի մեջ content-ը  պիտի   լինի  դիսփլեյ  բլօկ display:block;։թօգլի  դեպում պետք է  հաջորդ  անգամ  բաթնին  սեղմելուց այն  չերևա
    plusIcon[i].classList.toggle("hide");//որպեսզի  անհետանա պլուսը
    minusIcon[i].classList.toggle("blockcl")
    
})
}




let workDiv=document.querySelector(".work_div")
let parBer=document.querySelector(".parberutyun")
let ekHark1=document.querySelector(".ekHark");
let socVchar=document.querySelector(".socVchar");
let droshmGumar=document.querySelector(".droshmGumar");
let mnacord=document.querySelector(".mnacord");
let drosmVchar
ashxGumar.oninput=function(){
    ekHark1.innerHTML=ashxGumar.value*20/100;
    socVchar.innerHTML=ashxGumar.value*5/100

if(ashxGumar.value>0 && ashxGumar.value<=100000 ){
droshmGumar.innerHTML="1500"
}else if( ashxGumar.value>=100001 && ashxGumar.value<=200000){
    droshmGumar.innerHTML="3000"
}
else if(ashxGumar.value>=200001 && ashxGumar.value<=500000){
    droshmGumar.innerHTML="5500"
}
else if(ashxGumar.value>=500001 && ashxGumar.value<=1000000){
    droshmGumar.innerHTML="8500"
}
else{
    droshmGumar.innerHTML="15000"

}
mnacord.innerHTML=Math.floor(+ashxGumar.value-(ashxGumar.value*20/100)-(ashxGumar.value*5/100)-droshmGumar.innerHTML)

}

// let calculatorDiv=document.querySelector(".calculator_div");
// let patasxanDiv=document.querySelector(".patasxan");
// let bigButton=document.querySelector("big_button");
// let signs=["+", "-","*","/","%"];
// let calculatorSmall=document.querySelector(".calculatorSmall");
// calculatorSmall.onclick=function(){
// calculatorDiv.classList.toggle("block");
// patasxan="";
// patasxanDiv.innerHTML="0"
// }
// bigButton.forEach(function(button){
//     button.addEvenListener("click",function(){
//         if(button.innerHTML!="="){
//             if(signs.includes(button.innerHTML)||signs.includes(patasxanDiv.innerHTML)||patasxanDiv.innerHTML=="0"){
//                 patasxanDiv.innerHTML=button.innerHTML;

//             }else{
//                 patasxanDiv.innerHTML+=button.innerHTML;
//             }
//             patasxan+=button.innerHTML;
//         }
//     })
// })
