
var url = "http://localhost:3000/post";
var loc; var plantName="";

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
            'action':'locInfo'
        }),
        response);
}

function specInfo(x) {
    switch (x) {
        case 1:
            plantName=document.getElementById("plant1").value;
           break;
        case 2:
            plantName=document.getElementById("plant2").value;
            break;
        case 3: 
            plantName=document.getElementById("plant3").value;
            break;
        default:
            alert(false);
    }
    document.location.href="/milkweed",true;
}  
    function sendPlant() {
        $.post(
        url+'?data='+JSON.stringify
        ({ //compare the input name with the database
            'plant': plantName,
            'action':'plantInfo'
        }),
        response);
    }


function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'locInfoLoaded') {
        var resp = response['result'];
        resp = resp.replace(/[0-9]|-|\.|The native plants are| the |The three native plants are/gi,'');
        resp = resp.replace(/,| and |\n/gi,'|');
        const arr=resp.split("|");
        document.getElementById("plant1").innerHTML=arr[1];
        document.getElementById("plant2").innerHTML=arr[2];
        document.getElementById("plant3").innerHTML=arr[3];
    }
    else if (response['action'] == 'plantInfoLoaded') {
        var resp = response['result'];
        alert(resp);
        document.getElementById("appearance").innerHTML = resp;
    }
}