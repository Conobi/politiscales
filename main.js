// We check the path used to access the website and we adapt translations imports depending on path
if(window.location.pathname.indexOf("/politiscales") > -1) {
  path = "/politiscales";
} else {
  path = "";
}

const translations = {
  "en": path+"/langs/en/static.json",
  "ar": path+"/langs/ar/static.json",
  "fr": path+"/langs/fr/static.json",
  "es": path+"/langs/es/static.json",
  "it": path+"/langs/it/static.json",
  "zh": path+"/langs/zh/static.json",
  "ru": path+"/langs/ru/static.json"
}

async function updateText() {
  language = localStorage.language;
  i18n = await $.i18n().load(translations);

  $.i18n().locale = language;

  $("html").attr("lang", language)
  $("meta[name='description']").attr("content", $.i18n("description"));
  $("meta[property='og\\:description']").attr("content", $.i18n("description"));
  $("meta[property='og\\:locale']").attr("content", language);
  $(".about").attr("title", $.i18n("about"));
  $('body').i18n();

  if (typeof pageType !== 'undefined' && pageType == "home") {
    document.title = $.i18n("home_title");

  } else if(typeof pageType !== 'undefined' && pageType == "quiz") {
    document.title = $.i18n("quiz_title");
    init_quiz();

  } else if (typeof pageType !== 'undefined' && pageType == "results") {
    document.title = $.i18n("results_title");
    init_results();

  } else if (typeof pageType !== 'undefined' && pageType == "about") {
    document.title = $.i18n("about_title");
  }
}

function setLanguage() {
  localStorage.setItem("language", $('.language option:selected').val());
  updateText();
}

$(function() {
  // Enable dark mode
  if(localStorage.darkmode != undefined && JSON.parse(localStorage.darkmode) == true) {
    $('body').toggleClass("darkbody", true);
    $('.darkmode-btn > input').prop("checked",true);
  }
  $(".darkmode-btn > input").change(function() {
    $("body").toggleClass("darkbody", $('.darkmode-btn > input').is(':checked'));
    localStorage.darkmode = $('.darkmode-btn > input').is(':checked');
  });

  // Enable language
  if (localStorage.language != undefined) {
    $('.language option[value="'+localStorage.language+'"]').prop("selected", true);

    // We check if we are on the french domain
  } else if (window.location.host.includes("politiscales.fr")) {
    localStorage.setItem("language", "fr");
    $('.language option[value=fr]').attr('selected','selected');

  // We check if the get lang is set and includes a valid language
  } else if (window.location.search.includes("?lang=") && Object.keys(translations).includes(window.location.search.split("?lang=")[1])) {
    localStorage.setItem("language", window.location.search.split("?lang=")[1]);
    $('.language option[value='+window.location.search.split("?lang=")[1]+']').attr('selected','selected');

  // We check if the browser's language is included in the project
  } else if (Object.keys(translations).includes(navigator.language || navigator.userLanguage)) {
    localStorage.setItem("language", navigator.language || navigator.userLanguage);
    $('.language option[value='+navigator.language+']').attr('selected','selected');

  // If none of the above, we set the default language to english
  } else {
    localStorage.setItem("language", "en");
    $('.language option[value=en]').attr('selected','selected');
  }
  $.extend($.i18n.parser.emitter, {
    sitename: function() {
      return $.i18n("sitename");
    }
  });
  updateText();
  $('.language').on('change keyup', setLanguage);
});
