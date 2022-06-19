var currentPage = 0 ; 

const langMap = new Map();
var langIndex = 0 ;

langMap.set("ibFormsList",["IB KYC Forms List","طلبات IB KYC","IB KYC 形式"]);

langMap.set("nationality",["Nationality","الجنسية","國籍"]);
langMap.set("name",["Full Name","الاسم الكامل","全名"]);
langMap.set("emailAddress",["Email","البريد الالكتروني","電子郵件"]);

langMap.set("prvBtn",["Prev","السابق","以前的"]);
langMap.set("nxtBtn",["Next","التالي","下一個"]);

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
                console.log(elements[i].id);
                document.getElementById(elements[i].id).innerHTML =  langMap.get(elements[i].id)[langIndex];
            }
        },
        error: function (e) {
            console.log("err");
            console.log(e);
        }
    });
    getTableBody(currentPage);
});



function nxt(){
    currentPage++ ; 
    getTableBody(currentPage);
}

function prv(){
    currentPage-- ; 
    if(currentPage <= 0 ){
        currentPage = 0 ;
        document.getElementById("prvBtn").disabled = true ;
    }
    getTableBody(currentPage); 
}


function getTableBody(currentPage){
    document.getElementById("resultBody").innerHTML = "" ; 
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/getAllKycForms/"+currentPage,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (result) {
            var data = result.list ; 
            for(var i = 0 ; i < data.length ; i ++){
                document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].emails+"</td><td>"+data[i].nationality+"</td><td><a class='btn btn-inverse-danger btn-icon' href='/getKycForm/"+data[i].id+"'><i class='ti-slice'></i></a></td>"    ;
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