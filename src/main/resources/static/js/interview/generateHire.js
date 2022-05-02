

function generateHireForm() {
    var position = document.getElementById("Position").value ; 
    document.getElementById("generatedLink").href = "http://crm.awex.ae/addHire/"+position ; 
    document.getElementById("generatedLink").innerHTML = "Link Generated"; 
}
