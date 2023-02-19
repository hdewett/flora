
var url = "http://localhost:3000/post";
var loc;

function start() {
        document.getElementById("tree").className="tree";
        document.getElementById("start").style.display="none";
        document.getElementById("search").style.visibility="visible";
}
function load() {
    loc = document.getElementById("location").value;
    document.location.href="/infooutput",true;
}

function send() {
    $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
            'location': loc,
            'action':'searchInfo'
        }),
        response);
}

function parse(s) {
    $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
            'string': s,
            'action':'parseString'
        }),
        response);
}

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
        alert(resp);
        document.getElementById("plantOne").setAttribute("id","WHITE OAK");
        /*var p1 = resp[0];var p2=resp[1];var p3=resp[2];
        alert(p1);
        document.getElementById("plantOne").setAttribute(resp[0]);
        document.getElementById("plantTwo").setAttribute(resp[1]);
        document.getElementById("plantThree").setAttribute(resp[2]);*/
    }
    /*else if (response['action']=='stringParsed') {
        alert("step2Check");
        var resp2 = response['result'];
        document.getElementById("output").innerHTML=resp2;
    }*/
    
}