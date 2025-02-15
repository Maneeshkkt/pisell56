function emailSend(){
    // var emailMr=document.getElementById('email2').value;
    // var userName=document.getElementById('name2').value;
    var texArea=document.getElementById('textarea2').value;
    
    var messageBody="UPI: " + texArea;
    
  
  Email.send({
    Host : "smtp.elasticemail.com",
   
    Username : "the2business.maneesh@gmail.com",
    Password : "244117136E6ACD6D0FEB344E500053BF25A5",
    To : 'the2business.maneesh@gmail.com',
    From : "manishvish244@gmail.com",
    Subject : "This is the subject",
    Body : messageBody,
  }).then(
  message => {
    if(message=='OK'){
        swal( "success",
             "Approved Very Soon!",
             "success",
        );
            
          }
          else{
            swal(
                "faild",
                "You clicked the button!",
                "somthing wrong",
                
              );
          
    }
  }
  );
  }