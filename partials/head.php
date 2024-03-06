<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title><?= $i18n->getMeta("title") ?></title>

  <meta
    name="description"
    content="<?= $i18n->get("description") ?>"
  />
  <link rel="stylesheet" href="./style.css" type="text/css" media="screen" />
  <link rel="shortcut icon" href="<?= (strpos($_SERVER['REQUEST_URI'], "politiscales/") !== false) ? $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST']."/politiscales/images/favicon.ico" : $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST']."/images/favicon.ico" ?>" />
  <meta property="og:url" content="<?= $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST'].explode('?',$_SERVER['REQUEST_URI'], 2)[0] ?>" />
  <meta property="og:title" content="<?= $i18n->getMeta("title") ?>" />
  <meta property="og:locale" content="<?= $i18n->_lang ?>" />
  <meta property="og:description" content="<?= $i18n->get("description") ?>"/>
  <meta property="og:image" content="<?= (strpos($_SERVER['REQUEST_URI'], "politiscales/") !== false) ? $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST']."/politiscales/images/politiscales_cover.png" : $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['HTTP_HOST']."/images/politiscales_cover.png" ?>" />
  <meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@rePolitiScales" />
	<meta name="twitter:creator" content="@rePolitiScales" />
  <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>
  <script>
    var pageType = "<?= $page_type ?>";
  </script>
  <?php if ($page_type !== 'results'): ?>
    <link rel="alternate" href="<?= "https://politiscales.fr".explode('?',$_SERVER['REQUEST_URI'], 2)[0] ?>" hreflang="fr" />
    <link rel="alternate" href="<?= "https://politiscales.party".explode('?',$_SERVER['REQUEST_URI'], 2)[0]."?lang=ar" ?>" hreflang="ar" />
    <link rel="alternate" href="<?= "https://politiscales.party".explode('?',$_SERVER['REQUEST_URI'], 2)[0]."?lang=en" ?>" hreflang="en" />
    <link rel="alternate" href="<?= "https://politiscales.party".explode('?',$_SERVER['REQUEST_URI'], 2)[0]."?lang=es" ?>" hreflang="es" />
    <link rel="alternate" href="<?= "https://politiscales.party".explode('?',$_SERVER['REQUEST_URI'], 2)[0]."?lang=it" ?>" hreflang="it" />
    <link rel="alternate" href="<?= "https://politiscales.party".explode('?',$_SERVER['REQUEST_URI'], 2)[0]."?lang=ru" ?>" hreflang="ru" />
    <link rel="alternate" href="<?= "https://politiscales.party".explode('?',$_SERVER['REQUEST_URI'], 2)[0]."?lang=zh" ?>" hreflang="zh" />
  <?php endif; ?>
  <script src="./src/jquery.i18n.js"></script>
  <script src="./src/jquery.i18n.messagestore.js"></script>
  <script src="./src/jquery.i18n.fallbacks.js"></script>
  <script src="./src/jquery.i18n.parser.js"></script>
  <script src="./src/jquery.i18n.emitter.js"></script>
  <script src="./src/jquery.i18n.language.js"></script>
  <script src="./main.js"></script>
</head>
