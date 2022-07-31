
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false && $(input[i]).attr('name') != 'repeatPass' && $(input[i]).attr('name') != 'pass'){
                showValidate(input[i]);
                check=false;
            }
            else if(validate(input[i]) == false && $(input[i]).attr('name') == 'repeatPass'){
                if($(input[i]).val().trim() == ''){
                    showValidate(input[i]);
                    check=false;
                }
                else{
                    passMatchShow(input[i]);
                    check = false;
                }
            }
            else if(validate(input[i]) == false && $(input[i]).attr('name') == 'pass'){
                if($(input[i]).val().trim() == ''){
                    showValidate(input[i]);
                    check=false;
                }
                else{
                    passMatchShow(input[i]);
                    check = false;
                }
            }
        }
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           passMatchHide(this);
        });
        $('.fa-eye').removeClass('alert-validate');
       
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == '' && ($(input).attr('name') != 'pass' || $(input).attr('name') != 'repeatPass')){
                return false;
            }
            if($('input[name="pass"]').val().trim() != $('input[name="repeatPass"]').val().trim()){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }

    function passMatchShow(input){
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate-another');
    }

    function passMatchHide(input){
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate-another');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('text-color-grey');
            $(this).find('i').addClass('text-color-red');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('text-color-grey');
            $(this).find('i').removeClass('text-color-red');
            showPass = 0;
        }
        
    });


})(jQuery);