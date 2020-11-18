<header>
  <div id="header">
    <h1><a href="./"><?= $i18n->get("sitename") ?></a></h1>
    <?php if($page_type != "quiz"): ?>
      <select class="language">
        <option value="en" data-i18n="english"><?= $i18n->get("english") ?></option>
        <option value="fr" data-i18n="french"><?= $i18n->get("french") ?></option>
      </select>
    <?php endif; ?>
  </div>
</header>
