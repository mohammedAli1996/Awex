var department  ; 
var fpath ; 

const langMap = new Map();
var langIndex = 0 ;

langMap.set("Add Report", ["Add Report", "إضافة تقرير", "添加報告"]);
langMap.set("Client Name", ["Client Name", "اسم العميل", "客戶名稱"]);
langMap.set("CountryTra", ["Country", "البلد", "國家"]);
langMap.set("CityTra", ["City", "المدينة", "城市"]);
langMap.set("EmailTra", ["Email", "البريد الاكتروني", "電子郵件"]);
langMap.set("Telephone No", ["Telephone No.", "رقم الهاتف", "電話號碼"]);
langMap.set("Whatsapp No", ["Whatsapp No.", "رقم الواتس اب ", "Whatsapp 號碼"]);
langMap.set("PositionTra", ["Position", "المنصب", "位置"]);
langMap.set("ExperienceTra", ["Experience", "الخبرة", "經驗"]);
langMap.set("Trading Product", ["Trading Product", "المنتج", "交易產品"]);
langMap.set("MT5 ID", ["MT5 ID", "معرف MT5", "MT5 標識符"]);
langMap.set("CRM ID", ["CRM ID", "معرف CRM ", "CRM 標識符"]);
langMap.set("Deposit Amount", ["Deposit Amount", "قيمة الايداع", "存款金額"]);
langMap.set("More detail", ["More detail", "المزيد من التفاصيل", "更多詳情"]);
langMap.set("Choose files", ["Choose files", "اختر الملفات", "選擇文件"]);
langMap.set("or drag and drop files here", ["or drag and drop files here", "أو سحب الملفات وإفلاتها هنا", "或將文件拖放到此處"]);
langMap.set("submitBtn", ["Save", "حفظ", "節省"]);


$(document).ready(function () {
    department = document.getElementById("department").value;
    console.log(department);
    if(department == "Sales"){
        document.getElementById("salesForm").style.display = 'block';
    }else{
        document.getElementById("generalForm").style.display = 'block';
        document.getElementById("submitBtn").disabled = true ;
    }
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

function addReport(){
    var elements = document.querySelectorAll(".collectable");
    var request = {} ;
    for (var i = 0, len = elements.length; i < len; i++) {
            request[elements[i].id] = elements[i].value;
    } 
    request["filePath"] = fpath;
    $.ajax({
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/uploadReport",
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            window.location = "/myReports";
        },
        error: function (e) {
            document.getElementById("msgholder").innerHTML = "Error : Please try again "; 
        }
    });
}



async function uploadFile() {
    let formData = new FormData();
    formData.append("file", filePath.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => fpath = data)
      .then(document.getElementById("msgholder").innerHTML = "Uploaded Successfully");
      document.getElementById("submitBtn").disabled = false ;

  }