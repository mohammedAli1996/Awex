const langMap = new Map();

langMap.set("add New User", ["add New User", "إضافة مستخدم جديد", "添加新用戶"]);
langMap.set("Employee", ["Employee", "الموظف", "員工"]);
langMap.set("Email Address", ["Email Address", "البريد الاكتروني", "電子郵件地址"]);
langMap.set("Password", ["Password", "كلمة المرور", "密碼"]);
langMap.set("Show Password", ["Show Password", "إظهار كلمة المرور", "顯示密碼"]);
langMap.set("Role", ["Role", "الصلاحية", "角色"]);
langMap.set("Report To", ["Report To", "المشرف", "報告至"]);
langMap.set("Submit", ["Submit", "حفظ", "提交"]);
langMap.set("Admin", ["Admin", "مشرف نظام", "行政"]);
langMap.set("HR Manager", ["HR Manager", "مدير موارد بشرية", "人力資源經理"]);
langMap.set("Accountant Manager", ["Accountant Manager", "مدير محاسبة", "會計經理"]);
langMap.set("Sales Manager", ["Sales Manager", "مدير مبيعات", "銷售經理"]);
langMap.set("IT Manager", ["IT Manager", "مسؤول تقنية معلومات", "IT 經理"]);
langMap.set("Call Center Manager", ["Call Center Manager", "مسؤول مركز اتصال", "呼叫中心經理"]);
langMap.set("Customer Service Manager", ["Customer Service Manager", "مسؤول خدمة العملاء", "客戶服務經理"]);
langMap.set("Employeee", ["Employee", "موظف", "員工"]);


var langIndex = 0 ;

$(document).ready(function () {
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



    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/allStaff",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            for (var i = 0, len = data.length; i < len; i++) {
                document.getElementById("repoId").innerHTML += "<option value=" + data[i].id + ">" + data[i].name + "</option>";
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
                document.getElementById("reportTo").innerHTML += "<option value=" + data[i].id + ">" + data[i].userName + "</option>";
            }
        },
        error: function (e) {
        }
    });



});

function addUser() {
    var elements = document.querySelectorAll(".collectable");
    var request = {};
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
            document.getElementById("msgholder").innerHTML = e.responseJSON.msg;
        }
    });
}


function checkReportTo(role) {
    if (role == "Employee") {
        document.getElementById("reportToField").hidden = false;
    } else {
        document.getElementById("reportToField").hidden = true;
    }
}