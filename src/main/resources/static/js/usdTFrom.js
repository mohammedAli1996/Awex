(function ($) {
    "user strict";
    var rate = 1.01;
    var m1 = document.getElementById("form1");
    var m2 = document.getElementById("form2");
    var m3 = document.getElementById("form3");
    var m4 = document.getElementById("form4");
    var f1 = true ;
    var f2 = false ;
    var f3 = false ;
  m2.style.display = "none";
  m3.style.display = "none";
  m4.style.display = "none";
//Form 1 Elements
var fn = document.getElementById("fn");
var ln = document.getElementById("ln");
// var mt5 = document.getElementById("mt5");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
//Form 2Elements
var usdtAmount = document.getElementById("usdtAmount");
var usdAmount = document.getElementById("usdAmount");
//Form 2 Elements
$('#register-form').submit(function(event) {
 event.preventDefault();

        if(fn == "" || ln == ""  || email == "" || phone == "")
         {
          return ;
         }
         f1 = false ;
         f2 = true ;
         f3 = false ;

           m1.style.display = "none";
           m2.style.display = "block";
           m3.style.display = "none";
           m4.style.display = "none";


  });
$('#register-form2').submit(function(event) {
 event.preventDefault();

        if(usdAmount == "" || usdAmount == 0 || usdAmount == undefined || usdAmount == null )
         {
          return ;
         }
        f1 = false ;
        f2 = false ;
        f3 = true ;

           m1.style.display = "none";
           m2.style.display = "none";
           m3.style.display = "block";

           m4.style.display = "none";

  });

  $('#register-form3').submit(function(event) {
    event.preventDefault();
   
         
           f1 = false ;
           f2 = false ;
           f3 = false ;
   
              m1.style.display = "none";
              m2.style.display = "none";
              m3.style.display = "none";
              m4.style.display = "block";
   
   
   
     });
   
     $('#register-form4').submit(function(event) {
        event.preventDefault();
       
               f1 = false ;
               f2 = false ;
               f3 = false ;
       
                  m1.style.display = "none";
                  m2.style.display = "none";
                  m3.style.display = "none";
                  m4.style.display = "none";
       
       
       
         });

usdAmount.addEventListener('input', function() {
    usdtAmount.value = rate*usdAmount.value;

  });

  })(jQuery);
