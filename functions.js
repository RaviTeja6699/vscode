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
