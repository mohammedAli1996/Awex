var passPhoto;
var passId ; 
var degree ; 


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




function collectForm() {

    var elements = document.querySelectorAll(".collectable");
    var request = {};
    for (var i = 0, len = elements.length; i < len; i++) {
        request[elements[i].id] = elements[i].value;
    }

    request["passportPhoto"] = passPhoto ; 
    request["passportId"] = passId ; 
    request["degree"] = degree ; 

    $.ajax({
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/addStaff",
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log("Success");
            console.log(data);
            window.location = "/staffList";
        },
        error: function (e) {
            console.log(e);
        }
    });


}

