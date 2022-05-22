const langMap = new Map();
var langIndex = 0 ;
langMap.set("Generate Hiring Link", ["Generate Hiring Link", "توليد رابط توظيف", "生成招聘鏈接"]);
langMap.set("PositionTra", ["Position", "المنصب", "位置"]);
langMap.set("Generate", ["Generate", "توليد", "產生"]);
langMap.set("Link Generated", ["Link Generated", "تم توليد الرابط", "鏈接生成"]);


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


});



function generateHireForm() {
    var position = document.getElementById("Position").value ; 
    document.getElementById("generatedLink").href = "http://crm.awex.ae/addHire/"+position ; 
    //document.getElementById("generatedLink").href = "http://localhost:9090/addHire/"+position ; 

    document.getElementById("generatedLink").innerHTML = langMap.get("Link Generated")[langIndex];
}
