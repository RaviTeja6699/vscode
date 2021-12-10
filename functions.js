function div(a,b,c){
  if(b===0){
    c('dinaminater cannot  0',null)
  }
  else{
    c(null,a/b)
  }
  
}
div(3,6,function(err,res){
  if(err!==null){
    console.log(err);
  }
  else{
    console.log(res);
  }
})
var ar=[22,44,67,89,90]
ar.forEach(function (x,index) {
     if(x%2===0){
      console.log(x,index);
     }
  
})

var ar=['ravi','teja','malli'];
var up=[];
up= ar.map(function(y){
  return y.toUpperCase();
});
console.log(up);
var ar1 =[12,23,34,56]
 var ar2=ar1.filter(function (x,i) {
  if (x>30) {
      return true
      
  } else {
    return false
  }
  
})
console.log(ar2);

































