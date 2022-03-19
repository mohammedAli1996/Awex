$(document).ready(function () {
    var request = {};
    request["status"] = "";
    request["createdAt"] = null ; 
    document.getElementById("resultBody").innerHTML = "";


    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/filterHiresList",
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            for(var i = 0 ; i < data.length ; i ++){
                if(data[i].status == "Cancelled"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].workEx1Position+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-danger'>Cancelled</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
                }
                else if(data[i].status == "Pending"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].workEx1Position+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-warning'>Pending</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
                }
                else if(data[i].status == "Archived"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].workEx1Position+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-info'>Archived</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
                }
                else if(data[i].status == "Approved"){
                    document.getElementById("resultBody").innerHTML += "<td>"+data[i].name+"</td><td>"+data[i].workEx1Position+"</td><td>"+data[i].createdAt+"</td><td><label class='badge badge-success'>Approved</label></td><td><a href='/getHireView/"+data[i].id+"'>View</a></td>";
                }
                
            }
        },
        error: function (e) {
        }
    });
});




