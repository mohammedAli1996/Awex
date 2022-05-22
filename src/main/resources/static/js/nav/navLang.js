const navLangMap = new Map();
var navIndex = 0 ;
navLangMap.set("Add User",["Add User","إضافة مستخدم","添加用戶"]);
navLangMap.set("Users List",["Users List","لائحة المستخدمين","用戶列表"]);
navLangMap.set("Reports",["Reports","التقارير","報告"]);
navLangMap.set("Upload Report",["Upload Report","رفع تقرير","上傳報告"]);
navLangMap.set("Reports Review",["Reports Review","مراجعة التقارير","報告審查"]);
navLangMap.set("My Reports",["My Reports","تقاريري","我的報告"]);
navLangMap.set("Hiring",["Hiring","توظيف","招聘"]);
navLangMap.set("Orders List",["Orders List","لائحة طلبات التوظيف","訂單清單"]);
navLangMap.set("Generate Hiring Link",["Generate Hiring Link","توليد رابط توظيف","生成招聘鏈接"]);
navLangMap.set("Our Staff",["Our Staff","الكادر الخاص بنا","我們的工作人員"]);
navLangMap.set("New Staff Form",["New Staff Form","استمارة كادر جديد","新員工表格"]);
navLangMap.set("Employees List",["Employees List","لائحة الموظفين","員工名單"]);
navLangMap.set("Settings",["Settings","الإعدادات","設置"]);
navLangMap.set("Logout",["Logout","تسجيل الخروج","登出"]);
navLangMap.set("Users",["Users","المستخدمين","用戶"]);
navLangMap.set("MyEmployeesReports",["My Employees <br> Reports","تقارير الموظفين","我的員工 <br> 報告"]);

navLangMap.set("Eng",["English","English","English"]);
navLangMap.set("Ara",["العربية","العربية","العربية"]);
navLangMap.set("Chi",["中國人","中國人","中國人"]);



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
                navIndex = 1 ; 
            }else if (data.language == "Ch"){
                navIndex = 2 ; 
            }
            var elements = document.querySelectorAll(".navTranslatable");
            for (var i = 0, len = elements.length; i < len; i++) {
                document.getElementById(elements[i].id).innerHTML =  navLangMap.get(elements[i].id)[navIndex];
            }
        },
        error: function (e) {
            console.log("err");
            console.log(e);
        }
    });

});