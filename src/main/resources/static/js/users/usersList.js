$(document).ready(function () {
    getUsers();
});

function edtUser(id){
    window.location = "/editUesr/"+id;
}


function getUsers(){
    document.getElementById("tableBody").innerHTML = "" ; 
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/allUsersNN",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            for (var i = 0, len = data.length; i < len; i++) {
                if(data[i].active){
                    document.getElementById("tableBody").innerHTML+= "<tr><td>"+data[i].id+"</td><td>"+data[i].employeeName+"</td><td class='font-weight-bold'>"+data[i].userName+"</td><td>"+data[i].department+"</td><td><label class='badge badge-success'>Active</label></td><td class='font-weight-bold'><button onclick=edtUser("+data[i].id+") type='button' class='btn btn-outline-primary btn-icon-text'><i class='ti-file btn-icon-prepend'></i>Edit</button></td><td class='font-weight-bold'><button onclick=deactivateUser("+data[i].id+") type='button' class='btn btn-outline-danger btn-icon-text'><i class='ti-user btn-icon-prepend'></i>Deactivate</button></td></tr>";
                }else {
                    document.getElementById("tableBody").innerHTML+= "<tr><td>"+data[i].id+"</td><td>"+data[i].employeeName+"</td><td class='font-weight-bold'>"+data[i].userName+"</td><td>"+data[i].department+"</td><td><label class='badge badge-danger'>InActive</label></td><td class='font-weight-bold'><button onclick=edtUser("+data[i].id+") type='button' class='btn btn-outline-primary btn-icon-text'><i class='ti-file btn-icon-prepend'></i>Edit</button></td><td class='font-weight-bold'><button onclick=activateUser("+data[i].id+") type='button' class='btn btn-outline-success btn-icon-text'><i class='ti-user btn-icon-prepend'></i>Activate</button></td></tr>";
                }               
            }
        },
        error: function (e) {
        }
    });
}

function deactivateUser(uid){
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/deactive/"+uid,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            getUsers();
        },
        error: function (e) {
        }
    });
}

function activateUser(uid){
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/active/"+uid,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            getUsers();
        },
        error: function (e) {
        }
    });
}