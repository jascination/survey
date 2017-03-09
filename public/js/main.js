$(document).ready(function() {

  // Place JavaScript code here...
  //$("#theForm").ajaxForm({url: '/api/addToList', type: 'post'})
    $("#theForm").ajaxForm({
        url: '/api/sendMail', 
        type: 'post',
        success: successCb,
        error: errorCb
    });
    
    $("#mailingList").ajaxForm({
        url: '/api/addToList', 
        type: 'post',
        success: successCb,
        error: errorCb
    });

  function successCb(){
   $('.alert.alert-success').removeClass('hidden');
  }

  function errorCb(){
    $('.alert.alert-danger').removeClass('hidden');
  }


});