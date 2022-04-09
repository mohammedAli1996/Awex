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
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].idd+"</td><td>"+data[i].name+"</td><td>"+data[i].department+"</td><td>"+data[i].position+"</td><td><label class='badge badge-success'>Active</label></td> <td><a class='btn btn-inverse-danger btn-icon' href='/edtStaff/"+data[i].id+"'><i class='ti-slice'></i></a></td>";
                }
                else{
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].idd+"</td><td>"+data[i].name+"</td><td>"+data[i].department+"</td><td>"+data[i].position+"</td><td><label class='badge badge-danger'>Terminated</label></td> <td><a class='btn btn-inverse-danger btn-icon' href='/edtStaff/"+data[i].id+"'><i class='ti-slice'></i></a></td>";
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