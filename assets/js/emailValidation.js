$(function() {
  
    $("#email").change(function(){
      // Set Access key
      var access_key = '3d601ca143c7ee11f8a53f007ac6818a';
      
      //'johncena@biglogisticcompany.com';
      var email_address = $('#email').val(); 
      
      // Verify email address via AJAX call
      $.ajax({
        url: 'http://apilayer.net/api/check?access_key=' + access_key + '&email=' + email_address,   
        dataType: 'jsonp',
        success: function(json) {
          if(json.format_valid===true) { 
            $('.email-submit').attr('disabled', false);
          } else { 
            alert('Wrong Email Provided, Please re-try');
            $('.email-submit').attr('disabled', true);
          }
        }
      });
    });
    
  });