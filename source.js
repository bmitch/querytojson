$( document ).ready(function() {

   $('input[type="button"]').click(function() {
      var qs = $('#code').val();
      qs = $.parseJSON('{"' + qs.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
      $('#result').val(JSON.stringify(qs));
   });

});
