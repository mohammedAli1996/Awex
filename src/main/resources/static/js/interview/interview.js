var image;
var cv ; 
const langMap = new Map();
var langIndex = 0 ;

langMap.set("Interview Form",["Interview Form","استمارة المقابلة","面試表"]);
langMap.set("Personal Details",["Personal Details","معلومات شخصية","個人資料"]);
langMap.set("NameTra",["Name","الاسم","姓名"]);
langMap.set("Your Picture",["Your Picture","الصورة الشخصية","你的圖片"]);
langMap.set("Address 1",["Address 1","العنوان 1","地址 1"]);
langMap.set("Address 2",["Address 2","العنوان 2","地址 2"]);
langMap.set("AgeTra",["Age","العمر","年齡"]);
langMap.set("ID",["ID","المعرف","標識符"]);
langMap.set("MobileTra",["Mobile","رقم الهاتف","移動的"]);
langMap.set("MartialTra",["Martial","الحالة الاجتماعية","武術"]);
langMap.set("Singel",["Singel","اعزب","單格"]);
langMap.set("Married",["Married","متزوج","已婚"]);
langMap.set("Email Address",["Email Address","عنوان بريد الكتروني","電子郵件地址"]);
langMap.set("Health Status",["Health Status","الحالة الصحية","健康狀況"]);
langMap.set("UnSick",["UnSick","معافى","不生病"]);
langMap.set("Sick",["Sick","مريض","生病的"]);
langMap.set("NationalityTra",["Nationality","الجنسية","國籍"]);
langMap.set("Working Experince",["Working Experince","الخبرة","工作經驗"]);
langMap.set("Company 1",["Company 1","الشركة 1","公司 1"]);
langMap.set("Company 2",["Company 2","الشركة 2","公司 2"]);
langMap.set("Company 3",["Company 3","الشركة 3","公司 3"]);
langMap.set("School of Graduation",["School of Graduation","متخرج من","畢業學校"]);
langMap.set("Year of Graduation",["Year of Graduation","سنة التخرج","畢業年份"]);
langMap.set("Family Member",["Family Member","افراد العائلة","家庭成員"]);
langMap.set("Member 1",["Member 1","الفرد 1","成員 1"]);
langMap.set("Member 2",["Member 2","الفرد 2","成員 2"]);
langMap.set("Contact 1",["Contact 1","معلومات التواصل","接觸 1"]);
langMap.set("Your Resume",["Your Resume","سيرتك الذاتية","你的簡歷"]);
langMap.set("Please Upload you resume here",["Please Upload you resume here","يرجى تحميل سيرتك الذاتية","請在此處上傳您的簡歷"]);
langMap.set("Submit",["Submit","حفظ","提交"]);
langMap.set("resumeLabel",["Choose File","اختر الملف","選擇文件"]);
langMap.set("photoLabel",["Choose File","اختر الملف","選擇文件"]);
langMap.set("WechatWhatsapp",["Wechat/Whatsapp",",واتس اب \ وي شات ","微信/Whatsapp"]);
langMap.set("Education",["Education","التعليم","教育"]);
langMap.set("Heighest Graduation",["Highest  Graduation","أعلى درجة تعليم","最高畢業"]);

langMap.set("MajorProfession",["Major/Profession","الاخنصاص","主要的"]);
langMap.set("Emergency Contact",["Emergency Contact","جهات الاتصال عند الطوارئ","緊急聯繫人"]);
langMap.set("Contact 1",["Contact 1","جهة الاتصال 1","接觸 1"]);
langMap.set("Contact 2",["Contact 2","جهة الاتصال 2","接觸 2"]);






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



async function uploadFile() {
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => image = data)
      .then(document.getElementById("photoLabel").innerHTML = "Uploaded Successfully");
  }

  async function uploadFile2() {
    let formData = new FormData();
    formData.append("file", fileupload2.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => cv = data)
      .then(document.getElementById("resumeLabel").innerHTML = "Uploaded Successfully");
  }



function collectForm() {

    var elements = document.querySelectorAll(".collectable");
    var request = {};
    for (var i = 0, len = elements.length; i < len; i++) {
        request[elements[i].id] = elements[i].value;
    }
    request["photoLink"] = image ; 
    request["resumeLink"] = cv ; 
    $.ajax({
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/addHire",
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log("Success");
            console.log(data);
            window.location = "/success";
        },
        error: function (e) {
            console.log(e);
        }
    });


}
