
var url = "http://localhost:3000/post";


function start() {
   
    else {
        $.post(
            url+'?data='+JSON.stringify
            ({ //compare the input name with the database
            'name':name,
            'major': major,
            'day':day,
            'action':'createProfile'
            }),
            response);
            
        }
}

function response(data,status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'createDone') {
        window.location.href = "profile.html";
    }
}

