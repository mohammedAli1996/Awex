var image;
var cv ; 


async function uploadFile() {
    let formData = new FormData();
    formData.append("file", fileupload.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => image = data);
  }

  async function uploadFile2() {
    let formData = new FormData();
    formData.append("file", fileupload2.files[0]);
    let response = await fetch('/upload', {
      method: "POST",
      body: formData
    }).then(response => response.text())
      .then(data => cv = data);
  }



function collectForm() {

    var elements = document.querySelectorAll(".collectable");
    var request = {};
    for (var i = 0, len = elements.length; i < len; i++) {
        request[elements[i].id] = elements[i].value;
    }
    request["photoLink"] = image ; 
    request["resumeLink"] = cv ; 
    $.ajax({
        type: "POST",
        contentType: "application/json",
        async: false,
        url: "/addHire",
        data: JSON.stringify(request),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log("Success");
            console.log(data);
        },
        error: function (e) {
            console.log(e);
        }
    });


}


