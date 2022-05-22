var reportId ; 
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
langMap.set("updateBtn", ["update", "تعديل", "更新"]);


$(document).ready(function () {
    reportId = document.getElementById("reportId").value ; 


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
        url: "/getReportById/"+reportId,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            document.getElementById("clientName").value = data.clientName ; 
            document.getElementById("country").value = data.country ; 
            document.getElementById("city").value = data.city ; 
            document.getElementById("email").value = data.email ; 
            document.getElementById("telephone").value = data.telephone ; 
            document.getElementById("whatsApp").value = data.whatsApp ; 
            document.getElementById("position").value = data.position ; 
            document.getElementById("experience").value = data.experience ; 
            document.getElementById("tradingProduct").value = data.tradingProduct ; 
            document.getElementById("mtfId").value = data.mtfId ; 
            document.getElementById("crmId").value = data.crmId ; 
            document.getElementById("depositeAmount").value = data.depositeAmount ; 
            document.getElementById("moreDetails").value = data.moreDetails ; 
        },
        error: function (e) {
        }
    });

});


function addReport(){
    var elements = document.querySelectorAll(".collectable");
    var request = {} ;
    for (var i = 0, len = elements.length; i < len; i++) {
            request[elements[i].id] = elements[i].value;
    } 
   
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        async: false,
        url: "/updateReport/"+reportId,
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