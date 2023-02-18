
var url = "http://localhost:3000/post";


function start() {
    alert("hello");
        document.getElementById("tree").className="tree";
        document.getElementById("start").style.display="none";
        document.getElementById("search").style.visibility="visible";
}

function load() {
    var loc = document.getElementById("location").value;
    $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
            'location': loc,
            'action':'searchInfo'
        }),
        response);
}

/*function turnArray(s) {
    var out = [];var i; var line;
    for (i=0;i<s.length;i++) {
        if (s.charAt(i)=="\n") {
            alert("brek");
            out.push(line); 
            line="";
        }
        line=line+s.charAt(i);
    }
} */

function turnArray(s) {
    var out=["start"];
    while (s.length>0) {
        var i = s.indexOf("<br/>");
        s.substring(i+1,s.length);
        i = s.indexOf("<br/>");
        var line = s.substring(0,i);
        out.push(line);
    }

}

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'infoLoaded') {
        var resp = response['result']; 
        resp=resp.replace(/\n/g,"<br/>");
        document.getElementById("output").innerHTML=resp;
        var strcpy = resp.slice();
        turnArray(strcpy);
    }
    
}