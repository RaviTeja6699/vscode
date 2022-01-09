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
//colore change
function abc(x) {
    x.target.style.backgroundColor='red'
}
// change different colors with one button
function makeit(c){
    var q= document.getElementById('d3');
    q.style.backgroundColor=c;
}
var u=['ravi','3','teja','geetha']
document.getElementById('d4').innerHTML=u[0];
i=1;
function nextitem(){
    var w= document.getElementById('d4');
    w.innerHTML=u[i];
    if (i<3) {
        i++;
    } else {
        i=0;
    }

}