<header>
  <div id="header">
    <a class="about" title="<?= $i18n->get("about") ?>" href="./about<?php if (isset($_GET['lang'])) { echo "?lang=".$_GET['lang']; } ?>" <?php if($page_type == "quiz"){echo(' target="_blank" ');} ?>>
      <svg style="width:1.9em;height:1.9em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></path>
      </svg>
    </a>
    <a class="title" href="./">
      <img src="./images/politiscales.png" style="height:60px;width:60px;">
      <h1><?= $i18n->get("sitename") ?></h1>
    </a>
    <?php if($page_type != "quiz"): ?>
      <select class="language">
        <option value="en" data-i18n="english"><?= $i18n->get("english") ?></option>
        <option value="es" data-i18n="spanish"><?= $i18n->get("spanish") ?></option>
        <option value="fr" data-i18n="french"><?= $i18n->get("french") ?></option>
        <option value="it" data-i18n="italian"><?= $i18n->get("italian") ?></option>
        <option value="ru" data-i18n="russian"><?= $i18n->get("russian") ?></option>
        <option value="zh" data-i18n="chinese"><?= $i18n->get("chinese") ?></option>
        <option value="ar" data-i18n="arabic"><?= $i18n->get("arabic") ?></option>
      </select>
    <?php endif; ?>
  </div>
</header>
