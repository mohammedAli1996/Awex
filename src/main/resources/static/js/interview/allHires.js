var currentPage = 0 ; 
const langMap = new Map();
var langIndex = 0 ;



langMap.set("Hiring Orders List", ["Hiring Orders List", "لائحة المتقدمين", "招聘訂單清單"]);
langMap.set("Profile", ["Profile", "الملف الشخصي", "輪廓"]);
langMap.set("Postion", ["Position", "المنصب", "位置"]);
langMap.set("Created", ["Created", "التاريخ", "已創建"]);
langMap.set("Status", ["Status", "الحالة", "地位"]);
langMap.set("view", ["view", "عرض", "看法"]);

langMap.set("Cancelled", ["Cancelled", "ملغى", "取消"]);
langMap.set("Pending", ["Pending", "بانتظار الموافقة", "待辦的"]);
langMap.set("Archived", ["Archived", "مؤرشف", "存檔"]);
langMap.set("Approved", ["Approved", "موافق عليه", "已获批准"]);


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


function getTableBody(crPage) {
    var request = {};
    request["status"] = "";
    request["createdAt"] = null ; 
    document.getElementById("resultBody").innerHTML = "";


    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/filterHiresList/"+crPage,
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (result) {
            var data = result.list ; 
            for(var i = 0 ; i < data.length ; i ++){
                if(data[i].status == "Cancelled"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-danger'>"+langMap.get("Cancelled")[langIndex]+"</label></td><td><a href='/getHireView/"+data[i].id+"'>"+langMap.get("view")[langIndex]+"</a></td>";
                }
                else if(data[i].status == "Pending"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-warning'>"+langMap.get("Pending")[langIndex]+"</label></td><td><a href='/getHireView/"+data[i].id+"'>"+langMap.get("view")[langIndex]+"</a></td>";
                }
                else if(data[i].status == "Archived"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-info'>"+langMap.get("Archived")[langIndex]+"</label></td><td><a href='/getHireView/"+data[i].id+"'>"+langMap.get("view")[langIndex]+"</a></td>";
                }
                else if(data[i].status == "Approved"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-success'>"+langMap.get("Approved")[langIndex]+"</label></td><td><a href='/getHireView/"+data[i].id+"'>"+langMap.get("view")[langIndex]+"</a></td>";
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