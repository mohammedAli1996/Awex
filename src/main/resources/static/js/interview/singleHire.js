var id ; 

$(document).ready(function () {

    id = document.getElementById("id").value;

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "/getHire/"+id,
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {
            document.getElementById("name").value = data.name ; 
            document.getElementById("address1").value = data.address1 ; 
            document.getElementById("address2").value = data.address2 ; 
            document.getElementById("clientId").value = data.clientId ; 
            document.getElementById("age").value = data.age ; 
            document.getElementById("mobile").value = data.mobile ; 
            document.getElementById("whatApp").value = data.whatApp ; 
            document.getElementById("martial").value = data.martial ; 
            document.getElementById("na").value = data.na ; 
            document.getElementById("email").value = data.email ; 
            document.getElementById("healthStatus").value = data.healthStatus ; 
            document.getElementById("nationality").value = data.nationality; 
            document.getElementById("workEx1Name").value = data.workEx1Name ; 
            document.getElementById("workEx1Department").value = data.workEx1Department ; 
            document.getElementById("workEx1Position").value = data.workEx1Position; 
            document.getElementById("workEx1WorkingPeriod").value = data.workEx1WorkingPeriod ; 
            document.getElementById("workEx1ReasonLeave").value = data.workEx1ReasonLeave ; 
            document.getElementById("workEx2Name").value = data.workEx2Name ; 
            document.getElementById("workEx2Department").value = data.workEx2Department ; 
            document.getElementById("workEx2Position").value = data.workEx2Position ; 
            document.getElementById("workEx2WorkingPeriod").value = data.workEx2WorkingPeriod ; 
            document.getElementById("workEx2ReasonLeave").value = data.workEx2ReasonLeave ; 
            document.getElementById("workEx3Name").value = data.workEx3Name ; 
            document.getElementById("workEx3Department").value = data.workEx3Department ; 
            document.getElementById("workEx3Position").value = data.workEx3Position ; 
            document.getElementById("workEx3WorkingPeriod").value = data.workEx3WorkingPeriod ; 
            document.getElementById("workEx3ReasonLeave").value = data.workEx3ReasonLeave ; 
            
            
            document.getElementById("schoolOfGraduation").value = data.schoolOfGraduation ; 
            document.getElementById("major").value = data.major ; 
            document.getElementById("yearOfGrad").value = data.yearOfGrad ; 
            document.getElementById("heighGrad").value = data.heighGrad ; 
            
            
            document.getElementById("member1Name").value = data.member1Name ; 
            document.getElementById("member1RelationShip").value = data.member1RelationShip ; 
            document.getElementById("member1Na").value = data.member1Na ; 
            document.getElementById("member1Mobile").value = data.member1Mobile ; 
            document.getElementById("member1Company").value = data.member1Company ; 
            
            document.getElementById("member2Name").value = data.member2Name ; 
            document.getElementById("member2RelationShip").value = data.member2RelationShip ; 
            document.getElementById("member2Na").value = data.member2Na ; 
            document.getElementById("member2Mobile").value = data.member2Mobile ; 
            document.getElementById("member2Company").value = data.member2Company ; 
            
            
            document.getElementById("emergContact1Name").value = data.emergContact1Name ; 
            document.getElementById("emergContact1RelationShip").value = data.emergContact1RelationShip ; 
            document.getElementById("emergContact1Mobile").value = data.emergContact1Mobile ; 
            
            document.getElementById("emergContact2Name").value = data.emergContact2Name ; 
            document.getElementById("emergContact2RelationShip").value = data.emergContact2RelationShip ; 
            document.getElementById("emergContact2Mobile").value = data.emergContact2Mobile ; 
            document.getElementById("status").value = data.status ; 
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

    $.ajax({
        type: "PUT",
        contentType: "application/json",
        async: false,
        url: "/updateHire/"+id,
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