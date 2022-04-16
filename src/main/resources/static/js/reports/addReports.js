var department  ; 
var fpath ; 

$(document).ready(function () {
    department = document.getElementById("department").value;
    console.log(department);
    if(department == "Sales"){
        document.getElementById("salesForm").style.display = 'block';
    }else{
        document.getElementById("generalForm").style.display = 'block';
        document.getElementById("submitBtn").disabled = true ;
    }
});

function addReport(){
    var elements = document.querySelectorAll(".collectable");
    var request = {} ;
    for (var i = 0, len = elements.length; i < len; i++) {
            request[elements[i].id] = elements[i].value;
    } 
    request["filePath"] = fpath;
    $.ajax({
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/uploadReport",
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



async function uploadFile() {
    let formData = new FormData();
    formData.append("file", filePath.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => fpath = data)
      .then(document.getElementById("msgholder").innerHTML = "Uploaded Successfully");
      document.getElementById("submitBtn").disabled = false ;

  }