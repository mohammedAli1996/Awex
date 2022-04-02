var userId ; 
$(document).ready(function () {
    userId = document.getElementById("id").value ; 


    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/allStaff",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            for (var i = 0, len = data.length; i < len; i++) {
                document.getElementById("repoId").innerHTML+= "<option value="+data[i].id+">"+data[i].name+"</option>";
                document.getElementById("reportTo").innerHTML+= "<option value="+data[i].id+">"+data[i].name+"</option>";
            }
        },
        error: function (e) {
        }
    });


    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/getUser/"+userId,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            document.getElementById("repoId").value = data.repoId ; 
            document.getElementById("username").value = data.username ; 
            document.getElementById("userRoles").value = data.userRoles ; 
            document.getElementById("reportTo").value = data.reportTo ; 
            checkReportTo(data.userRoles);
        },
        error: function (e) {
        }
    });
});

function addUser(){
    var elements = document.querySelectorAll(".collectable");
    var request = {} ;
    for (var i = 0, len = elements.length; i < len; i++) {
            request[elements[i].id] = elements[i].value;
    } 
    console.log("call");
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        async: false,
        url: "/addUser/"+userId,
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log("reach");
            console.log("Success");
            console.log(data);
            window.location = "/allUsers";
        },
        error: function (e) {
            document.getElementById("msgholder").innerHTML = e.responseJSON.msg ; 
        }
    });
}


function checkReportTo(role ){
    if(role == "Employee" ){
        document.getElementById("reportToField").hidden = false ; 
    }else {
        document.getElementById("reportToField").hidden = true ; 
    }
}