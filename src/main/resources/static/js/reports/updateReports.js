var reportId ; 


$(document).ready(function () {
    reportId = document.getElementById("reportId").value ; 

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
            window.location = "/reviewReports";
        },
        error: function (e) {
            document.getElementById("msgholder").innerHTML = "Error : Please try again "; 
        }
    });
}