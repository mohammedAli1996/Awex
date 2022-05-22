var currentPage = 0 ; 
const langMap = new Map();
var langIndex = 0 ;

langMap.set("My Employees Daily Report", ["My Employees Daily Report", "التقاري اليومية للموظين التابعين لي", "我的員工日報"]);
langMap.set("Employee", ["Employee", "الموظف", "員工"]);
langMap.set("Date", ["Date", "التاريخ", "日期"]);
langMap.set("Search", ["Search", "بحث", "搜索"]);
langMap.set("ID", ["ID", "المعرف", "標識符"]);
langMap.set("Name", ["Name", "الاسم", "姓名"]);
langMap.set("Department", ["Department", "القسم", "部門"]);

langMap.set("prvBtn", ["Prev", "السابق", "以前的"]);
langMap.set("nxtBtn", ["Next", "التالي", "下一個"]);



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
                document.getElementById("staffDropDown").innerHTML += "<option value=" + data[i].id + ">" + data[i].name + "</option>";
            }
        },
        error: function (e) {
        }
    });
    filterReports(currentPage);
});


function nxt(){
    currentPage++ ; 
    filterReports(currentPage);
}

function prv(){
    currentPage-- ; 
    if(currentPage <= 0 ){
        currentPage = 0 ;
        document.getElementById("prvBtn").disabled = true ;
    }
    filterReports(currentPage); 
}



function filterReports(crPage) {
    if(crPage == null ){
        crPage = 0 ; 
    }
    var request = {};
    request["staffId"] = document.getElementById("staffDropDown").value;
    request["department"] = "";
    request["date"] = document.getElementById("date").value;

    document.getElementById("resBody").innerHTML = "";
    $.ajax({
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/filterMyReports/"+crPage,
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (result) {
            var data = result.list ; 
            for (var i = 0; i < data.length; i++) {
                if(data[i].type == "Data"){
                    document.getElementById("resBody").innerHTML += "<tr><td>"+data[i].empId+"</td><td>" + data[i].empName + "</td><td>" + data[i].department + "</td><td><button type='button' class='btn btn-inverse-warning btn-icon' onclick='download("+data[i].id+")'><i class='ti-download'></i></button></td><td><button type='button' class='btn btn-inverse-danger btn-icon' onclick='getReport("+data[i].id+")'><i class='ti-eye'></i></button></td></tr>"
                }else{
                    document.getElementById("resBody").innerHTML += "<tr><td>"+data[i].empId+"</td><td>" + data[i].empName + "</td><td>" + data[i].department + "</td><td><button type='button' class='btn btn-inverse-warning btn-icon' onclick='downloadFile(\""+data[i].filePath+"\")'><i class='ti-download'></i></button></td></tr>"
                }
                
            }
            var maxPage = result.maxPageSize ; 
            if(maxPage == 0 || maxPage == currentPage){
                document.getElementById("nxtBtn").disabled = true ; 
            }
            if(maxPage == 0 || currentPage == 0){
                document.getElementById("prvBtn").disabled = true ; 
            }else{
                document.getElementById("prvBtn").disabled = false ;
            }
            if(maxPage > currentPage){
                document.getElementById("nxtBtn").disabled = false ; 
            }
        },
        error: function (e) {
          
        }
    });

}


function getReport(reportId){
    window.location = "/getReport/"+reportId;
}

function downloadFile(URL){
    URL = "/files/"+URL ; 
    window.open(URL, '_blank');
}


function download(reportId) {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/getReportById/"+reportId,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            var text = "Client Name , Country , City , Email , Telephone No , WhatsApp No , Position , Experience , Trading Product , MT5 ID , CRM ID , Deposite Amount , More details "; 
            text += "\n";
            text += data.clientName + ","+data.country + ","+data.city + ","+data.email + ","+data.telephone + ","+data.whatsApp + ","+data.position + ","+data.experience + ","+data.tradingProduct + ","+data.mtfId + ","+data.crmId + ","+data.depositeAmount + ","+data.moreDetails;
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', "report.csv");
        
            element.style.display = 'none';
            document.body.appendChild(element);
        
            element.click();
        
            document.body.removeChild(element);
        },
        error: function (e) {
        }
    });

    
}