var ar=[1,2,3,4];
// var br = ar;

// br[1]='ravi';
// console.log(br);
// console.log(ar);
// var cr=[...br];//this is the way to creat new array this is called cloaning
// br[0]='teja';
// console.log(br);
// console.log(cr);
// var er=[];
// er=ar.map(function(n,i){
//    return n; 
// })
// console.log(er);
// destracring
var ar1=['ravi','teja'];
var cr=[...ar,...ar1,'geetha']
console.log(cr);
var a='reactjs';
var b='angulasrjs';
var c='javascript';
var d={};
var d={...d,a,b,c,}
console.log(d);

var e='23';
var f='67';
var g={};
 var g={...g,e,f ,a};
console.log(g);
var h={...g,...d};
// var h={...h, a:'anjular'};
console.log(h);
var {a:sub}=h;
console.log(sub);
var i={...h}
console.log(i);

































