
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
        var resp = response['result']; alert("RAW: "+resp);
        /*var out = "";
        for (var i = 0;i<resp.length;i++) {
            out= out + resp[i];
            out = out + "<br/>";
        }
        var strcpy=resp.slice(); 
        parse(strcpy);*/
        /*resp=resp.replace(/\n/g,"<br/>");
        resp=resp.replace(",","<br/>");*/
        document.getElementById("output").innerHTML=resp;
    }
    /*else if (response['action']=='stringParsed') {
        alert("step2Check");
        var resp2 = response['result'];
        document.getElementById("output").innerHTML=resp2;
    }*/
    
}