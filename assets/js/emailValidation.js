$("#email").change(function(){
    // set endpoint and your access key
    var access_key = '3d601ca143c7ee11f8a53f007ac6818a';
    var email_address = $('#email').val();//'johncena@biglogisticcompany.com';
    
    // verify email address via AJAX call
    $.ajax({
    url: 'http://apilayer.net/api/check?access_key=' + access_key + '&email=' + email_address,   
    dataType: 'jsonp',
    success: function(json) {
        if(json.format_valid===true) { 
            $('.email-submit').attr('disabled', false);
        } else { 
            alert('Wrong email format')
            $('.email-submit').attr('disabled', true);
        }
    // Access and use your preferred validation result objects
    //alert("Valid format: " + json.format_valid);
    }
    });
  
});