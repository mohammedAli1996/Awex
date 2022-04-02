function addReport(){
    var elements = document.querySelectorAll(".collectable");
    var request = {} ;
    for (var i = 0, len = elements.length; i < len; i++) {
            request[elements[i].id] = elements[i].value;
    } 
   
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