//date object

  var x  =  setInterval(function(){
                        var d=new Date()
                        var houres=d.getHours()
                        var minutes=d.getMinutes()
                        var seconds=d.getSeconds()
                        console.log(houres);
                        console.log(minutes);
                        console.log(seconds);
                        
                            document.getElementById('d1').innerHTML=houres+':'+ minutes+':'+ seconds
                        
            },1)



  function stoplock() {
      clearInterval(x)
      
  }
  function startlock() {
      x=setInterval(function(){
        var d=new Date()
        var houres=d.getHours()
        var minutes=d.getMinutes()
        var seconds=d.getSeconds()
        console.log(houres);
        console.log(minutes);
        console.log(seconds);
        
            document.getElementById('d1').innerHTML=houres+':'+ minutes+':'+ seconds
        
   },1)
      
  }