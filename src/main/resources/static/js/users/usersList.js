const langMap = new Map();
var langIndex = 0 ;


langMap.set("Users List", ["Users List", "لائحة المستخدمين", "用戶列表"]);
langMap.set("ID", ["ID", "المعرف", "標識符"]);
langMap.set("Name", ["Name", "الاسم", "姓名"]);
langMap.set("Department", ["Department", "القسم", "部門"]);
langMap.set("Status", ["Status", "الحالة", "地位"]);
langMap.set("Email Address", ["Email Address", "البريد الاكتروني", "電子郵件地址"]);

langMap.set("InActive", ["InActive", "معطل", "不活躍"]);
langMap.set("Active", ["Active", "مفعل", "積極的"]);
langMap.set("Edit", ["Edit", "تعديل", "編輯"]);
langMap.set("Deactivate", ["Deactivate", "تعطيل", "停用"]);
langMap.set("Activate", ["Activate", "تفعيل", "啟用"]);



$(document).ready(function () {
    getUsers();

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/userLang",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            if(data.language == "Ar"){
                langIndex = 1 ; 
            }else if (data.language == "Ch"){
                langIndex = 2 ; 
            }
            var elements = document.querySelectorAll(".translatable");
            for (var i = 0, len = elements.length; i < len; i++) {
                document.getElementById(elements[i].id).innerHTML =  langMap.get(elements[i].id)[langIndex];
            }
        },
        error: function (e) {
            console.log("err");
            console.log(e);
        }
    });


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
                    document.getElementById("tableBody").innerHTML+= "<tr><td>"+data[i].id+"</td><td>"+data[i].employeeName+"</td><td class='font-weight-bold'>"+data[i].userName+"</td><td>"+data[i].department+"</td><td><label class='badge badge-success'>"+langMap.get("Active")[langIndex]+"</label></td><td class='font-weight-bold'><button onclick=edtUser("+data[i].id+") type='button' class='btn btn-outline-primary btn-icon-text'><i class='ti-file btn-icon-prepend'></i>"+langMap.get("Edit")[langIndex]+"</button></td><td class='font-weight-bold'><button onclick=deactivateUser("+data[i].id+") type='button' class='btn btn-outline-danger btn-icon-text'><i class='ti-user btn-icon-prepend'></i>"+langMap.get("Deactivate")[langIndex]+"</button></td></tr>";
                }else {
                    document.getElementById("tableBody").innerHTML+= "<tr><td>"+data[i].id+"</td><td>"+data[i].employeeName+"</td><td class='font-weight-bold'>"+data[i].userName+"</td><td>"+data[i].department+"</td><td><label class='badge badge-danger'>"+langMap.get("InActive")[langIndex]+"</label></td><td class='font-weight-bold'><button onclick=edtUser("+data[i].id+") type='button' class='btn btn-outline-primary btn-icon-text'><i class='ti-file btn-icon-prepend'></i>"+langMap.get("Edit")[langIndex]+"</button></td><td class='font-weight-bold'><button onclick=activateUser("+data[i].id+") type='button' class='btn btn-outline-success btn-icon-text'><i class='ti-user btn-icon-prepend'></i>"+langMap.get("Activate")[langIndex]+"</button></td></tr>";
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