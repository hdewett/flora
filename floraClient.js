
var url = "http://localhost:3000/post";


function start() {
        /*var newSpan=document.createElement("span");
        $(newSpan).attr("id","locationSpan"); //set attribute by this
        var form=document.createElement("form");
        $(form).attr("label","INPUT YOUR LOCATION");
        $(form).attr("type","location");
        $(form).attr("id","location");
        $(form).attr("name","location");
        $(newSpan).append(form);*/
        window.location.href="infoOutput.html";
            
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

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'infoLoaded') {
        alert("worked");
    }
}

