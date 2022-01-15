var students =[
    {
        Name:'ravi',
        Age:23,
        Place:'ban'
    },
    {
        Name:'teja',
        Age:27,
        Place:'tn'
    },
    {
        Name:'sandheep',
        Age:28,
        Place:'ka'
    }
    ]
    genUI();//for first time loading
    function genUI() {
        students.forEach(function(a,b){
            var ntr = document.createElement("tr");// document "d " should be small d only
            var std = document.createElement("td");
            std.innerHTML=b+1;
            ntr.appendChild(std);
            for(k in a){
                var ntd=document.createElement("td");
                ntd.innerHTML=a[k];
                ntr.appendChild(ntd);
            }
            document.getElementById("d4").appendChild(ntr);
            console.log(students);
        })
        
    }
    function sortby(k){
        document.getElementById('d4').innerHTML="";
        students.sort(function(c,d){
        if (c[k]>d[k]) {
            return 1
        }
        else{
            return -1
        }
        })
        genUI();
    }

    











    // sort functon is do only string sort so  for nember sorting we use below code
    var nr=[23,4,5,6,7,8,23,45,67,89]
    nr.sort(function(a,b) {
        if (a>b) {
            return 1
        } else {
            return -1
        }
    })
    console.log(nr)
