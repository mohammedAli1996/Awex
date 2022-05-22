var id ; 
var position ; 

const langMap = new Map();
var langIndex = 0 ;
langMap.set("Review Interview Form",["Review Interview Form","مراجعة استمارة المقابلة","審查面試表"]);
langMap.set("Personal Details",["Personal Details","معلومات شخصية","個人資料"]);
langMap.set("NameTra",["Name","الاسم","姓名"]);
langMap.set("Photo",["Photo","الصورة","照片"]);
langMap.set("reviewPhoto",["Review Photo","الصورة الشخصية","評論照片"]);
langMap.set("Your Picture",["Your Picture","الصورة الشخصية","你的圖片"]);
langMap.set("Address 1",["Address 1","العنوان 1","地址 1"]);
langMap.set("Address 2",["Address 2","العنوان 2","地址 2"]);
langMap.set("AgeTra",["Age","العمر","年齡"]);
langMap.set("ID",["ID","المعرف","標識符"]);
langMap.set("MobileTra",["Mobile","رقم الهاتف","移動的"]);
langMap.set("MartialTra",["Martial","الحالة الاجتماعية","武術"]);
langMap.set("Singel",["Singel","اعزب","單格"]);
langMap.set("Married",["Married","متزوج","已婚"]);
langMap.set("Email Address",["Email Address","عنوان بريد الكتروني","電子郵件地址"]);
langMap.set("Health Status",["Health Status","الحالة الصحية","健康狀況"]);
langMap.set("UnSick",["UnSick","معافى","不生病"]);
langMap.set("Sick",["Sick","مريض","生病的"]);
langMap.set("NationalityTra",["Nationality","الجنسية","國籍"]);
langMap.set("Working Experince",["Working Experince","الخبرة","工作經驗"]);
langMap.set("Company 1",["Company 1","الشركة 1","公司 1"]);
langMap.set("Company 2",["Company 2","الشركة 2","公司 2"]);
langMap.set("Company 3",["Company 3","الشركة 3","公司 3"]);
langMap.set("School of Graduation",["School of Graduation","متخرج من","畢業學校"]);
langMap.set("Year of Graduation",["Year of Graduation","سنة التخرج","畢業年份"]);
langMap.set("Family Member",["Family Member","افراد العائلة","家庭成員"]);
langMap.set("Member 1",["Member 1","الفرد 1","成員 1"]);
langMap.set("Member 2",["Member 2","الفرد 2","成員 2"]);
langMap.set("Contact 1",["Contact 1","معلومات التواصل","接觸 1"]);
langMap.set("Your Resume",["Your Resume","سيرتك الذاتية","你的簡歷"]);
langMap.set("Please Upload you resume here",["Please Upload you resume here","يرجى تحميل سيرتك الذاتية","請在此處上傳您的簡歷"]);
langMap.set("Submit",["Submit","حفظ","提交"]);
langMap.set("resumeLabel",["Choose File","اختر الملف","選擇文件"]);
langMap.set("photoLabel",["Choose File","اختر الملف","選擇文件"]);
langMap.set("WechatWhatsapp",["Wechat/Whatsapp",",واتس اب \ وي شات ","微信/Whatsapp"]);
langMap.set("Education",["Education","التعليم","教育"]);
langMap.set("Heighest Graduation",["Highest  Graduation","أعلى درجة تعليم","最高畢業"]);
langMap.set("MajorProfession",["Major/Profession","الاخنصاص","主要的"]);
langMap.set("Emergency Contact",["Emergency Contact","جهات الاتصال عند الطوارئ","緊急聯繫人"]);
langMap.set("Contact 1",["Contact 1","جهة الاتصال 1","接觸 1"]);
langMap.set("Contact 2",["Contact 2","جهة الاتصال 2","接觸 2"]);
langMap.set("reviewCV",["Review CV","عرض السيرة الذاتية","查看簡歷"]);
langMap.set("Pending",["Pending","بانتظار الموافقة","待辦的"]);
langMap.set("Approved",["Approved","موافق عليه","得到正式認可的"]);
langMap.set("Cancelled",["Cancelled","ملغى","取消"]);
langMap.set("StatusTra",["Status","الحالة","地位"]);


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
            document.getElementById("select2-nationality-container").innerHTML = data.nationality
            
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
            position = data.positionfb ; 


            if(data.photoLink == null || data.photoLink == ""){
                document.getElementById("reviewPhoto").disabled = true ;
            }else {
                document.getElementById("reviewPhoto").href = "/files/"+data.photoLink;
            }
            if(data.resumeLink == null || data.resumeLink == ""){
                document.getElementById("reviewCV").disabled = true ;
            }else {
                document.getElementById("reviewCV").href = "/files/"+data.resumeLink;
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
    request["positionfb"] =  position; 
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
            window.location = "/allHires";
        },
        error: function (e) {
            console.log(e);
        }
    });


}