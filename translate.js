//var userLang = navigator.language || navigator.userLanguage;

const translations = {
  "en": "/politiscales/langs/static_en.json",
  "fr": "/politiscales/langs/static_fr.json"
}

async function updateText() {
  language = localStorage.getItem("language")
  i18n = await $.i18n().load(translations);

  $.i18n().locale = language;

  $('body').i18n();
  $("meta[name='description']").attr("content", $.i18n("description"));

  if(typeof pageType !== 'undefined' && pageType == "quiz") {
    init_quiz();
  } else if (typeof pageType !== 'undefined' && pageType == "results") {
    init_results();
  }
}

function setLanguage() {
  localStorage.setItem("language", $('.language option:selected').val());
  updateText();
}

$(function() {
  // We check if the language is not set and not included in the project
  if(localStorage.getItem("language") == null && Object.keys(translations).includes(navigator.language || navigator.userLanguage) == false) {
    userLang = localStorage.setItem("language", "en");
    $('.language option[value=en]').attr('selected','selected');

  // If the language is not set but included in our files
  } else if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", navigator.language || navigator.userLanguage);
    $('.language option[value='+ navigator.language || navigator.userLanguage +']').attr('selected','selected');

  // The language is set
  } else {
    $('.language option[value='+ localStorage.getItem("language") +']').attr('selected','selected');
  }
  updateText();
  $('.language').on('change keyup', setLanguage);
});
