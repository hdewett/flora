
var url = "http://localhost:3000/post";

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

function displayInfo(resp) {
    for (var i;i<resp.length;i++) {
        if (resp.charAt(i)>='0' && resp.charAt(i)<='9') {
            alert(resp.charAt(i));
            resp = resp.substring(0,i)+"<br>"+resp.substring(i,resp.length);
        }
    }
    alert(resp);
    return resp;
}
function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'infoLoaded') {
        var resp = response['result'];
        displayInfo(resp);
        document.getElementById("output").innerHTML=resp;
    }
    
}