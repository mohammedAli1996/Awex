var currentPage = 0 ; 

$(document).ready(function () {
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
    var request = {};
    request["staffId"] = -1;
    request["department"] = "";
    request["date"] = document.getElementById("date").value;

    document.getElementById("resBody").innerHTML = "";
    $.ajax({
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/myReports/"+crPage,
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (result) {
            var data = result.list ; 
            for (var i = 0; i < data.length; i++) {
                document.getElementById("resBody").innerHTML += "<tr><td>"+data[i].empId+"</td><td>" + data[i].empName + "</td><td>" + data[i].department + "</td><td><button type='button' class='btn btn-inverse-warning btn-icon' onclick='download("+data[i].id+")'><i class='ti-download'></i></button></td><td><button type='button' class='btn btn-inverse-danger btn-icon' onclick='getReport("+data[i].id+")'><i class='ti-eye'></i></button></td></tr>"
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