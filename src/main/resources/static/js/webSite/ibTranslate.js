const langMap = new Map();
var langIndex = 0 ;
langMap.set("FormInfo",["Form Info","معلومات الطلب","表格信息"]);

langMap.set("emailAddress",["Email","البريد الالكتروني","電子郵件"]);
langMap.set("name",["Name","الاسم","姓名"]);
langMap.set("nationality",["Nationality","الجنسية","國籍"]);


langMap.set("rt",["Registration type","نوع التسجيل","註冊類型"]);
langMap.set("gender",["Gender","الجنس","性別"]);
langMap.set("rn",["Referrer No","رقم المرجع","推薦人號碼"]);
langMap.set("ex",["Experience","خبرة","經驗"]);
langMap.set("oa",["Opened an Account","فتح حساب","開戶"]);
langMap.set("mta",["MT5 Account ID","معرف الحساب MT5","MT5 帳戶ID"]);
langMap.set("ct",["Contact Type","نوع جهة الاتصال","聯繫方式"]);
langMap.set("cn",["Contact Number","رقم التواصل","聯繫電話"]);
langMap.set("mn",["Mobile Number","رقم الهاتف المحمول","手機號碼"]);
langMap.set("sc",["Schedule a call at","حدد موعدًا لمكالمة في","安排通話"]);


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

});