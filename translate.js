

function updateText() {
  $.i18n().load({
    "en": "langs/static_en.json",
    "fr": "langs/static_fr.json"
  }).done(function(){
    $('body').i18n();
    $("meta[name='description']").attr("content", $.i18n("description"));
  });
}

$(function() {
  updateText();
});
