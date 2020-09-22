(function($, window) {
    $(function() {
      $('#login').on('click', function() {
        //var email = $('#email').val(),
            //password = $('#password').val();
        // alert(email);
        // alert(password);
      function checkEmail(email){
        var email = $('#email').val();
        if (email == '') {
          alert('メールアドレスを入力してください');
        } else if (email.indexOf('@') < 0) {
          alert('メールアドレスには必ず「@」が必要です');
        }};
      function checkPassword(password){
        var password = $('#password').val();
        if (password == '') {
          alert('パスワードを入力してください');
        } else if (password.length < 6) {
          alert('パスワードは6文字以上です');
        }};
  })(jQuery, window);