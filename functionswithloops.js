var contries=['india','japan','russia'];
contries.forEach(function(c,i){
    var j=document.createElement('li');
    j.innerHTML=c;
    var k=document.getElementById('d1');
    k.appendChild(j);
})
// automatic li updation
var animals=['dog','cat','cow'];
animals.forEach(function(d,f){
    var l=document.createElement('li');
    l.innerHTML=d;
    var s=document.getElementById('d1');
    s.appendChild(l)
})