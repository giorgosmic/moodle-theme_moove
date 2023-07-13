define(['jquery','core/modal_factory', 'core/templates', 'core/str'],
    function($, ModalFactory, Templates, str) {

    return {
        init: function() {
        var universityname = str.get_string('$universityname', 'theme_moove');
        var loginhelpstringname = str.get_string('loginhelpstringname', 'theme_moove');
        var loginhelpmsg = str.get_string('loginhelpmsg', 'theme_moove',universityname);
        //var termsofuse = str.get_string('termsofusemsg', 'theme_photo');

        var trigger = $('#login-trouble');
          ModalFactory.create({
            type: ModalFactory.types.CANCEL,
            title: loginhelpstringname,
            body: loginhelpmsg,
          }, trigger)
         .done(function() {
          // Do what you want with your modal.
          // notification.alert('Hello', 'Welcome to my site!', 'Continue');
          });
        }
    };
});