

function generateHireForm() {
    var position = document.getElementById("Position").value ; 
    document.getElementById("generatedLink").href = "http://159.223.235.65:8080/addHire/"+position ; 
    document.getElementById("generatedLink").innerHTML = "Link Generated"; 
}
