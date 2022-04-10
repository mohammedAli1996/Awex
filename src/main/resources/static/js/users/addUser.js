$(document).ready(function () {

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
            }
        },
        error: function (e) {
        }
    });


    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/allReportTo",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            for (var i = 0, len = data.length; i < len; i++) {
                document.getElementById("reportTo").innerHTML+= "<option value="+data[i].id+">"+data[i].userName+"</option>";
            }
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
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/addUser",
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