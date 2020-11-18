<?php
  $page_type = "quiz";
  include('translate.php');
?>
<!DOCTYPE html>
<html lang="<?= $i18n->_lang ?>">
  <?php include('partials/head.php'); ?>
  <body>
    <?php include('partials/header.php') ?>
    <div id="content">
      <div id="mainFrame">
        <h2 id="question-number"></h2>
        <div class="questionBox"><p id="question-text"></p></div>
        <div class="navButtons questionButtons">
          <button onclick="next_question(1)" class="strong-agree" data-i18n="strong_agree">
            <?= $i18n->get("strong_agree") ?>
          </button>
          <button onclick="next_question(2/3)" class="agree" data-i18n="agree">
            <?= $i18n->get("agree") ?>
          </button>
          <button onclick="next_question(0)" class="neutral" data-i18n="neutral">
            <?= $i18n->get("neutral") ?>
          </button>
          <button onclick="next_question(-2/3)" class="disagree" data-i18n="disagree">
            <?= $i18n->get("disagree") ?>
          </button>
          <button onclick="next_question(-1)" class="strong-disagree" data-i18n="strong_disagree">
            <?= $i18n->get("strong_disagree") ?>
          </button>

          <a href="#" class="button" onclick="prev_question()" id="back_button" data-i18n="prev_question">
            <?= $i18n->get("prev_question") ?>
          </a>
          <a class="button" href="./" id="back_button_off" data-i18n="back_home">
            <?= $i18n->get("back_home") ?>
          </a>
        </div>
      </div>
    </div>

    <?php include('partials/footer.php'); ?>
    <script src="./quiz.js"></script>
  </body>
</html>
