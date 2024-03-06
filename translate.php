<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$translations = array(
  "ar" => "./langs/ar/static.json",
  "en" => "./langs/en/static.json",
  "es" => "./langs/es/static.json",
  "fr" => "./langs/fr/static.json",
  "it" => "./langs/it/static.json",
  "ru" => "./langs/ru/static.json",
  "zh" => "./langs/zh/static.json"
);

/* Get the language from the browser HTTP headers, in the 639-1 format */
$browser_lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

class i18n {

  private $_data;
  public $_page_type;
  public $_lang;

  public function loadLanguage($array) {
    foreach($array as $code => $language_file) {
      $this->_data[$code] = json_decode(file_get_contents($language_file), true);
    }
  }

  public function setLang($language_code) {
    if(array_key_exists($language_code, $this->_data)) {
      $this->_lang = $language_code;
    } else {
      $this->_lang = "en";
    }
  }

  public function get($string) {
    if(substr($string, 0, 6) === "[html]") {
      $string = substr($string, 6);
      return str_replace("{{SITENAME}}", $this->_data[$this->_lang]["sitename"], $this->_data[$this->_lang][$string]);
    } else {
      return htmlspecialchars(str_replace("{{SITENAME}}", $this->_data[$this->_lang]["sitename"], $this->_data[$this->_lang][$string]));
    }
  }

  public function getMeta($string) {
    return $this->get($this->_page_type."_".$string);
  }

  public function getLangs() {
    return array_keys($this->_data);
  }
}

$i18n = new i18n;

$i18n->loadLanguage($translations);


if (strpos($_SERVER['HTTP_HOST'], "politiscales.fr") !== false) {
  $i18n->setLang("fr");
} elseif(isset($_GET["lang"]) && in_array($_GET["lang"], $i18n->getLangs())) {
  $i18n->setLang($_GET["lang"]);
} elseif(in_array($browser_lang, $i18n->getLangs())) {
  $i18n->setLang($browser_lang);
} else {
  $i18n->setLang("en");
}

$i18n->_page_type = $page_type;
