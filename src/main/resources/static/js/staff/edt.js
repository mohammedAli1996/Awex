var id ; 
var passPhoto;
var passId ; 
var degree ; 
var currStatus ; 

async function uploadFile() {
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => passPhoto = data)
      .then(document.getElementById("photoLabel").innerHTML = "Uploaded Successfully");
      document.getElementById("passPhotoBtn").hidden = false ; 
      document.getElementById("passPhotoBtn").href = "/files/"+passPhoto;
  }

  async function uploadFile2() {
    let formData = new FormData();
    formData.append("file", fileupload2.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => passId = data)
      .then(document.getElementById("photoLabel2").innerHTML = "Uploaded Successfully");
      document.getElementById("passIdBtn").hidden = false ; 
      document.getElementById("passIdBtn").href = "/files/"+passId;
  }

  async function uploadFile3() {
    let formData = new FormData();
    formData.append("file", fileupload3.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => degree = data)
      .then(document.getElementById("photoLabel3").innerHTML = "Uploaded Successfully");
      document.getElementById("degreeBtn").hidden = false ; 
      document.getElementById("degreeBtn").href = "/files/"+degree;
      
  }


$(document).ready(function () {

    id = document.getElementById("id").value;

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/getStaff/"+id,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            document.getElementById("idd").value = data.idd; 
            document.getElementById("name").value = data.name; 
            document.getElementById("department").value = data.department;
            document.getElementById("position").value = data.position;
            document.getElementById("qualifications").value = data.qualifications;
            document.getElementById("joinedDate").value = data.joinedDate;
            document.getElementById("mobile").value = data.mobile;
            document.getElementById("email").value = data.email;
            document.getElementById("effectiveDate").value = data.effectiveDate;
            document.getElementById("passportNumber").value = data.passportNumber;
            document.getElementById("passportType").value = data.passportType;
            document.getElementById("dob").value = data.dob;
            document.getElementById("eid").value = data.eid;
            document.getElementById("passportIssue").value = data.passportIssue;
            document.getElementById("plcaeOfBirth").value = data.plcaeOfBirth;
            document.getElementById("dubaiAddress").value = data.dubaiAddress;
            document.getElementById("passportValidDate").value = data.passportValidDate;
            document.getElementById("martialStatus").value = data.martialStatus;
            document.getElementById("homeAddress").value = data.homeAddress;
            document.getElementById("motherName").value = data.motherName;
            document.getElementById("fatherName").value = data.fatherName;
            document.getElementById("nationality").value = data.nationality;

            if(data.passportPhoto == null || data.passportPhoto == ""){
                document.getElementById("passPhotoBtn").disabled = true ;
            }else {
                document.getElementById("passPhotoBtn").href = "/files/"+data.passportPhoto;
            }
            if(data.passportId == null || data.passportId == ""){
                document.getElementById("passIdBtn").disabled = true ;
            }else {
                document.getElementById("passIdBtn").href = "/files/"+data.passportId;
            }
            if(data.degree == null || data.degree == ""){
                document.getElementById("degreeBtn").disabled = true ;
            }else {
                document.getElementById("degreeBtn").href = "/files/"+data.degree;
            }
           
            passPhoto = data.passportPhoto ; 
            passId = data.passportId ; 
            degree = data.degree ; 
            currStatus = data.status ; 
            if(data.status=="Active"){
                document.getElementById("statusButton").className = "btn btn-inverse-success btn-icon";
            }else{
                document.getElementById("statusButton").className = "btn btn-inverse-danger btn-icon";
            }

        },
        error: function (e) {
        }
    });
});



function collectForm(){

    var elements = document.querySelectorAll(".collectable");
    var request = {} ;
    for (var i = 0, len = elements.length; i < len; i++) {
            request[elements[i].id] = elements[i].value;
    } 
    request["passportPhoto"] = passPhoto ; 
    request["passportId"] = passId ; 
    request["degree"] = degree ; 

    $.ajax({
        type: "PUT",
        contentType: "application/json",
        async: false,
        url: "/updateStaff/"+id,
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log("Success");
            console.log(data);
            window.location = "/allStaff";
        },
        error: function (e) {
            console.log(e);
        }
    });


}





function terminate(){
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/terminateStaff/"+id,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            if(currStatus=="Active"){
                document.getElementById("statusButton").className = "btn btn-inverse-success btn-icon";
            }else{
                document.getElementById("statusButton").className = "btn btn-inverse-danger btn-icon";
            }
        },
        error: function (e) {
        }
    });
}