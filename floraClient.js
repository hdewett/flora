
var url = "http://localhost:3000/post";


function start() {
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

function parse(resp) {
    var out = [];var i;
    for (i = 0;i<resp.length();i++) {
        var line="";
        if (resp.substring(i,i+1)=="\n") {
            i=i+1; 
            while (resp.substring(i,i+1)!="\n") {
                line = line + resp.charAt(j);
                i=i+1;
            }
        }
        out.push(line);
    }
    alert(out);
}

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'infoLoaded') {
        var resp = response['result'];//parse(resp);  
        document.getElementById("output").innerHTML=resp;
    }
    
}