// We check the path used to access the website and we adapt translations imports depending on path
if(window.location.pathname.indexOf("/politiscales") > -1) {
  path = "/politiscales";
} else {
  path = "";
}

const translations = {
  "en": path+"/langs/static_en.json",
  "fr": path+"/langs/static_fr.json"
}

async function updateText() {
  language = localStorage.getItem("language")
  i18n = await $.i18n().load(translations);

  $.i18n().locale = language;

  $("html").attr("lang", language)
  $("meta[name='description']").attr("content", $.i18n("description"));
  $("meta[property='og\\:description']").attr("content", $.i18n("description"));
  $("meta[property='og\\:locale']").attr("content", language);
  $('body').i18n();

  if (typeof pageType !== 'undefined' && pageType == "home") {
    document.title = $.i18n("home_title");
    $("meta[property='og\\:locale']").attr("content", $.i18n("home_title"));

  } else if(typeof pageType !== 'undefined' && pageType == "quiz") {
    document.title = $.i18n("quiz_title");
    $("meta[property='og\\:locale']").attr("content", $.i18n("quiz_title"));

    init_quiz();

  } else if (typeof pageType !== 'undefined' && pageType == "results") {
    document.title = $.i18n("results_title");
    $("meta[property='og\\:locale']").attr("content", $.i18n("results_title"));

    init_results();

  } else if (typeof pageType !== 'undefined' && pageType == "about") {
    document.title = $.i18n("about_title");
    $("meta[property='og\\:locale']").attr("content", $.i18n("about_title"));

    init_results();
  }
}

function setLanguage() {
  localStorage.setItem("language", $('.language option:selected').val());
  updateText();
}

$(function() {
  // We check if we are on the french domain
  if(localStorage.getItem("language") == null && window.location.host.includes("politiscales.fr")) {
    localStorage.setItem("language", "fr");
    $('.language option[value=fr]').attr('selected','selected');
  // We check if the language is not set and not included in the project
  } else if(localStorage.getItem("language") == null && Object.keys(translations).includes(navigator.language || navigator.userLanguage) == false) {
    localStorage.setItem("language", "en");
    $('.language option[value=en]').attr('selected','selected');

  // If the language is not set but included in our files
  } else if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", navigator.language || navigator.userLanguage);
    $('.language option[value='+ navigator.language || navigator.userLanguage +']').attr('selected','selected');

  // The language is set
  } else {
    $('.language option[value='+ localStorage.getItem("language") +']').attr('selected','selected');
  }
  $.extend($.i18n.parser.emitter, {
    sitename: function() {
      return $.i18n("sitename");
    }
  });
  updateText();
  $('.language').on('change keyup', setLanguage);
});
