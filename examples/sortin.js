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