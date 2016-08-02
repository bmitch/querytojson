$( document ).ready(function() {

   $('input[type="button"]').click(function() {
      var qs = $('#code').val();
      qs = $.parseJSON('{"' + qs.replace(/&/g, '","').replace(/=/g, '":"') + '"}');
      ajaxString = JSON.stringify(qs);
      $('#result').val(ajaxString);

      $('#js').val('url = \'http://\';\ndata = ' + ajaxString + ';\njQuery.ajax(url, data);');i

   });

});
