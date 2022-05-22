var id ; 
var passPhoto;
var passId ; 
var degree ; 
var currStatus ; 


const langMap = new Map();
var langIndex = 0 ;
langMap.set("Employee Information",["Employee Information","معلومات الموظف","員工信息"]);
langMap.set("ID",["ID","المعرف","標識符"]);
langMap.set("NameTra",["Name","الاسم","姓名"]);
langMap.set("Dpt",["Dpt","القسم","部"]);
langMap.set("PostionTra",["Position","المنصب","位置"]);
langMap.set("QualificationTra",["Qualifications","المؤهلات","資格"]);
langMap.set("Join Date",["Join Date","تاريخ الانضمام","加入日期"]);
langMap.set("MobileTra",["Mobile","الهاتف","移動的"]);
langMap.set("EmailTra",["Email","البريد الالكتروني","電子郵件"]);
langMap.set("Effective Date",["Effective Date","تاريخ الفعالية","生效日期"]);
langMap.set("Passport Number",["Passport Number","رقم جواز السفر","護照號碼"]);
langMap.set("Passport Type",["Passport Type","نوع جواز السفر","護照類型"]);
langMap.set("DOB",["DOB","تاريخ الميلاد","出生日期"]);
langMap.set("EID/UID No",["EID/UID No","رقم EID/UID","EID UID 號碼"]);

langMap.set("Passport Issue",["Passport Issue","تاريخ إصدار جواز السفر","護照問題"]);
langMap.set("Place of Birth",["Place of Birth","مكان الولادة","出生地"]);
langMap.set("Dubai Address",["Dubai Address","العنوان في دبي","迪拜地址"]);
langMap.set("Passport Expiry",["Passport Expiry","تاريخ انتهاء جواز السفر","護照到期"]);
langMap.set("Martial Status",["Marital Status","الحالة الاجتماعية","婚姻狀況"]);
langMap.set("Home Country Address",["Home Country Address","عنوان البلد الأم","本國地址"]);
langMap.set("Mother name",["Mother name","اسم الام","母親姓名"]);
langMap.set("Father Name",["Father Name","اسم الأب","父親姓名"]);
langMap.set("Passport Photo",["Passport Photo","صورة جواز السفر","護照照片"]);
langMap.set("photoLabel",["Upload","رفع","上傳"]);
langMap.set("PassportVISAID",["Passport/VISA/ID","جواز السفر\ الفيزا \ الهوية","護照/簽證/身份證"]);
langMap.set("photoLabel2",["Upload","رفع","上傳"]);
langMap.set("Highest Degree",["Highest Degree","أعلى شهادة حاصل عليها","最高學位"]);
langMap.set("photoLabel3",["Upload","رفع","上傳"]);
langMap.set("NationalityTra",["Nationality","الجنسية","國籍"]);
langMap.set("passPhotoBtn",["Review Passport Photo","مراجعة صورة الجواز","查看護照照片"]);
langMap.set("passIdBtn",["Review Passport/ID/VISA","مراجعة الجواز \ الهوية \ الفيزا","查看護照/身份證/簽證"]);
langMap.set("degreeBtn",["Review Degree","مراجعة الشهادة","複習學位"]);
langMap.set("SubmitTra",["Submit","إرسال","提交"]);


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


  function formatDate(date){
    date = new Date(date);
    const day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
    const month = `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}`;
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
}


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
            document.getElementById("joinedDate").value = formatDate(data.joinedDate);
            document.getElementById("mobile").value = data.mobile;
            document.getElementById("email").value = data.email;
            document.getElementById("effectiveDate").value = formatDate(data.effectiveDate);
            document.getElementById("passportNumber").value = data.passportNumber;
            document.getElementById("passportType").value = data.passportType;
            document.getElementById("dob").value = formatDate(data.dob);
            document.getElementById("eid").value = data.eid;
            document.getElementById("passportIssue").value = data.passportIssue;
            document.getElementById("plcaeOfBirth").value = data.plcaeOfBirth;
            document.getElementById("dubaiAddress").value = data.dubaiAddress;
            document.getElementById("passportValidDate").value = formatDate(data.passportValidDate);
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
            window.location = "/staffList";
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
                document.getElementById("statusButton").className = "btn btn-inverse-danger btn-icon";
                currStatus = "Terminated";
            }else{
                document.getElementById("statusButton").className = "btn btn-inverse-success btn-icon";
                currStatus = "Active" ; 
            }
        },
        error: function (e) {
        }
    });
}