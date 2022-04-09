var currentPage = 0 ; 

$(document).ready(function () {
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
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-danger'>Cancelled</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
                }
                else if(data[i].status == "Pending"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-warning'>Pending</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
                }
                else if(data[i].status == "Archived"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-info'>Archived</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
                }
                else if(data[i].status == "Approved"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].positionfb+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-success'>Approved</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
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