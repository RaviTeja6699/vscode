var ar=[1,2,3,4];
var br = ar;

br[1]='ravi';
console.log(br);
console.log(ar);
var cr=[...br];//this is the way to creat new array this is called cloaning
br[0]='teja';
console.log(br);
console.log(cr);
