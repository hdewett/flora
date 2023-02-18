
var url = "http://localhost:3000/post";


function start() {
        document.getElementById("tree").className="tree";
        document.getElementById("start").style.display="none";
        document.getElementById("search").style.display="block"; 
}

function load() {
    var loc = document.getElementById("region").value;
    $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
            'location': loc,
            'action':'searchInfo'
        }),
        response);
}

function displayInfo(resp) {
    var out="";
    for (var i;i<resp.length;i++) {
        if (resp.charAt(i)>=48 && resp.charAt(i)<=57) {
            out= out + "\n";
        }
        out = out + resp.charAt(i);
    }
    return out;
}
function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'infoLoaded') {
        var resp = response['result'];
        document.getElementById("output").innerHTML=resp;
    }
    
}