<?php
  $page_type = "data";
  include('translate.php');
?>
<!DOCTYPE html>
<html lang="<?= $i18n->_lang ?>">
  <?php include('partials/head.php'); ?>
  <body>
    <?php include('partials/header.php') ?>
    <div id="content">
      <div class="simpleText" id="mainFrame" data-i18n="[html]data_policy_content">
        <?= $i18n->get("[html]data_policy_content") ?>
      </div>
    </div>
    <?php include('partials/footer.php') ?>
  </body>
</html>
