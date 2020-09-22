(function($, window) {
    $(function() {
      $('#login').on('click', function(e) {
        var email = $('#email').val(),
            password = $('#password').val();
        // alert(email);
        // alert(password);
        function checkEmail(email){
        if (email == '') {
          return confirm('メールアドレスを入力してください');
        } else if (email.indexOf('@') < 0) {
          return confirm('メールアドレスには必ず「@」が必要です');
        }};
        function checkPassword(password){
        if (password == '') {
          return confirm('パスワードを入力してください');
        } else if (password.length < 6) {
          return confirm('パスワードは6文字以上です');
        }};
    });
  })(jQuery, window);