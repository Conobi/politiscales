<?php
  $page_type = "home";
  include('translate.php');
?>
<!DOCTYPE html>
<html lang="<?= $i18n->_lang ?>">
  <?php include('partials/head.php'); ?>
  <body>
    <?php include('partials/header.php') ?>
    <div id="content">
      <div id="mainFrame">
        <h2 data-i18n="home_subtitle"><?= $i18n->get("home_subtitle") ?></h2>
        <p class="simpleText" data-i18n="description">
          <?= $i18n->get("description") ?>
        </p>
        <br/>

        <p class="simpleText">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
          <span data-i18n="info_1"><?= $i18n->get("info_1") ?></span>
        </p>
        <p class="simpleText">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
          <span data-i18n="info_2"><?= $i18n->get("info_2") ?></span>
        </p>
        <p class="simpleText">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
          <span data-i18n="warning"><?= $i18n->get("warning") ?></span>
        </p>

        <div class="navButtons">
          <a class="button" href="./quiz" data-i18n="start_button"><?= $i18n->get("start_button") ?></a>
        </div>
      </div>
    </div>
    <?php include('partials/footer.php') ?>
  </body>
</html>
