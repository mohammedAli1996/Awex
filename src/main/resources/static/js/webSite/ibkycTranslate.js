const langMap = new Map();
var langIndex = 0 ;
langMap.set("FormInfo",["Form Info","معلومات الطلب","表格信息"]);

langMap.set("name",["Full Name","الاسم الكامل","全名"]);
langMap.set("gender",["Gender","الجنس","性別"]);
langMap.set("idNo",["ID No","رقم الهوية","身份證號"]);
langMap.set("passNo",["passport number","رقم جواز السفر","護照號"]);
langMap.set("nationality",["nationality","الجنسية","國籍"]);
langMap.set("address",["address","العنوان","地址"]);
langMap.set("phone",["phone","هاتف","電話"]);
langMap.set("mobile",["mobile","هاتف محمول","移動的"]);
langMap.set("socialPhone",["Contact Details Type","نوع معلومات التواصل","聯繫方式類型"]);
langMap.set("ex",["experience","الخبرة","經驗"]);
langMap.set("coName",["company Name","اسم الشركة","公司名稱"]);
langMap.set("businessPhone",["business Phone","رقم العمل","商務電話"]);
langMap.set("faxPhone",["fax Phone","فاكس","傳真 電話"]);
langMap.set("marketingStrategy",["marketing Strategy","استراتيجية التسويق","市場策略"]);
langMap.set("businessAddress",["business Address","عنوان العمل","營業地址"]);
langMap.set("scaleOfCompany",["scale Of Company","مبيعات الشركة","公司規模"]);
langMap.set("numberOfEmployee",["number Of Employee","عدد الموظفين","員工人數"]);
langMap.set("industry",["industry","المجال","行業"]);
langMap.set("annualIncome",["annual Income","الدخل السنوي","年收入"]);
langMap.set("natureOfBusiness",["nature Of Business","طبيعة العمل","業務性質"]);
langMap.set("position",["position","المنصب الوظيفي","位置"]);
langMap.set("mailingAddress",["mailing Address","عنوان المراسلة","郵寄地址"]);
langMap.set("timeOfContact",["time Of Contact","وقت التواصل","聯繫時間"]);
langMap.set("currentCompany",["current Company","الشركة الحالية","現任公司"]);
langMap.set("idealWayOfWorkTogether",["ideal Way Of Work Together","الطريقة المثلى للعمل","理想的合作方式"]);
langMap.set("monthlyIncome",["monthly Income","الدخل الشهري","月收入"]);
langMap.set("emails",["emails","البريد الاكتروني","電子郵件"]);
langMap.set("monthlyTradingScale",["monthly Grading Scale","مقياس الدرجات الشهرية","每月分級量表"]);
langMap.set("selfTradingOrAgency",["self Trading Or Agency","التجارة الذاتية أو الوكالة","自我交易或代理"]);
langMap.set("mainMarket",["main Market","السوق الرئيسي","主要市場"]);
langMap.set("descro",["How would you rate previous companies","كيف تقيم الشركات السابقة","您如何評價以前的公司"]);
langMap.set("descroo",["Why would you change the company","لماذا تريد تغيير الشركة","為什麼要換公司"]);
langMap.set("descrooo",["How would you to work together","كيف يمكننا العمل معا","你們將如何合作"]);
langMap.set("annualIncomeD",["annual Income","الدخل السنوي","年收入"]);
langMap.set("property",["property","الملكية","財產"]);
langMap.set("investmentExperience",["investment Experience","خبرة الاستثمار","投資經歷"]);
langMap.set("options",["options","الخيارات","選項"]);
langMap.set("investmentObjectives",["investment Objectives","أهداف الاستثمار","投資目標"]);
langMap.set("sc",["Schedule a call","حدد موعدًا لمكالمة","安排通話"]);
langMap.set("socialName",["social Name","الاسم على مواقع التواصل","社會名稱"]);







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


