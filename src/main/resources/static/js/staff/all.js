$(document).ready(function () {

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/allStaff",
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            for(var i = 0 ; i < data.length ; i ++){
                if(data[i].status == "Active"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].idd+"</td><td>"+data[i].name+"</td><td>"+data[i].department+"</td><td>"+data[i].position+"</td><td><label class='badge badge-success'>Active</label></td> <td><a class='btn btn-inverse-danger btn-icon' href='/edtStaff/"+data[i].id+"'><i class='ti-slice'></i></a></td>";
                }
                else{
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].idd+"</td><td>"+data[i].name+"</td><td>"+data[i].department+"</td><td>"+data[i].position+"</td><td><label class='badge badge-danger'>Terminated</label></td> <td><a class='btn btn-inverse-danger btn-icon' href='/edtStaff/"+data[i].id+"'><i class='ti-slice'></i></a></td>";
                }        
            }
        },
        error: function (e) {
        }
    });
});





