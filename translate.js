var userLang = navigator.language || navigator.userLanguage;

async function updateText(language) {
  i18n = await $.i18n().load({
    "en": "/politiscales/langs/static_en.json",
    "fr": "/politiscales/langs/static_fr.json"
  });

  $.i18n().locale = language;

  $('body').i18n();
  $("meta[name='description']").attr("content", $.i18n("description"));
  if(typeof pageType !== 'undefined' && pageType == "quiz") {
    init_quiz();
  }
}

$(function() {
  updateText(userLang);
});
