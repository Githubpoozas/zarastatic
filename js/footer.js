$(document).ready(function() {
  $(".footer__subscribe-form__input").focus(function() {
    $(".footer__subscribe-form__label").hide();
  }).blur(function() {
    if ($(this).val() == "") {
      $(".footer__subscribe-form__label").show();
    }
  });

  $(".footer__subscribe-form__input").keyup(function(){
      $(".footer__subscribe__additional").show();
  })
});
