var currentPage = 0 ; 

const langMap = new Map();
var langIndex = 0 ;
langMap.set("Employees List",["Employees List","لائحة الموظفين","員工名單"]);
langMap.set("NameTra",["Name","الاسم","姓名"]);
langMap.set("Dpt",["Dpt","القسم","部"]);
langMap.set("PostionTra",["Position","المنصب","位置"]);
langMap.set("Status",["Status","الحالة","地位"]);
langMap.set("prvBtn",["Prev","السابق","以前的"]);
langMap.set("nxtBtn",["Next","التالي","下一個"]);
langMap.set("ID",["ID","المعرف","標識符"]);
langMap.set("Active",["Active","نشط","積極的"]);
langMap.set("Terminated",["Terminated","تم إنهاؤه","終止"]);


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
        url: "/allStaff/"+currentPage,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (result) {
            var data = result.list ; 
            for(var i = 0 ; i < data.length ; i ++){
                if(data[i].status == "Active"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].idd+"</td><td>"+data[i].name+"</td><td>"+data[i].department+"</td><td>"+data[i].position+"</td><td><label class='badge badge-success'>"+langMap.get("Active")[langIndex]+"</label></td> <td><a class='btn btn-inverse-danger btn-icon' href='/edtStaff/"+data[i].id+"'><i class='ti-slice'></i></a></td>";
                }
                else{
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].idd+"</td><td>"+data[i].name+"</td><td>"+data[i].department+"</td><td>"+data[i].position+"</td><td><label class='badge badge-danger'>"+langMap.get("Terminated")[langIndex]+"</label></td> <td><a class='btn btn-inverse-danger btn-icon' href='/edtStaff/"+data[i].id+"'><i class='ti-slice'></i></a></td>";
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