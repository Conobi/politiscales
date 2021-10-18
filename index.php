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
        <img class="simpleImg" src="./images/politiscales_cover.png">
        <h2 data-i18n="home_subtitle"><?= $i18n->get("home_subtitle") ?></h2>
        <p class="simpleText" data-i18n="description">
          <?= $i18n->get("description") ?>
        </p>
        <br/>

        <p class="simpleText">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
              <path fill="currentColor" d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M11,15H13V17H11V15M11,7H13V13H11V7" />
          </svg>
          <span data-i18n="info_1"><?= $i18n->get("info_1") ?></span>
        </p>
        <p class="simpleText">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
            <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
          </svg>
          <span data-i18n="info_2"><?= $i18n->get("info_2") ?></span>
        </p>
        <p class="simpleText">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
              <path fill="currentColor" d="M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M4.81,9L6.05,12L4.81,15L7.79,16.21L9,19.19L12,17.95L15,19.19L16.21,16.21L19.19,15L17.95,12L19.19,9L16.21,7.79L15,4.81L12,6.05L9,4.81L7.79,7.79L4.81,9M11,15H13V17H11V15M11,7H13V13H11V7" />
          </svg>
          <span data-i18n="warning"><?= $i18n->get("warning") ?></span>
        </p>

        <div class="navButtons">
          <a class="button" href="./quiz<?php if (isset($_GET['lang'])) { echo "?lang=".$_GET['lang']; } ?>" data-i18n="start_button"><?= $i18n->get("start_button") ?></a>
        </div>
      </div>
    </div>
    <?php include('partials/footer.php') ?>
  </body>
</html>
