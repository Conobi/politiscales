<?php
  $page_type = "about";
  include('translate.php');
?>
<!DOCTYPE html>
<html lang="<?= $i18n->_lang ?>">
  <?php include('partials/head.php'); ?>
  <body>
    <?php include('partials/header.php') ?>
    <div id="content">
      <div id="mainFrame">
        <h2 data-i18n="whoarewe"><?= $i18n->get("whoarewe") ?></h2>

        <p class="simpleText" data-i18n="[html]long_desc">
          <?= $i18n->get("[html]long_desc") ?>
        </p>

        <h3 data-i18n="axis_1_title"><?= $i18n->get("axis_1_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/constructivism.png" alt="<?= $i18n->get("constructivism") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_1_desc">
            <?= $i18n->get("[html]axis_1_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/essentialism.png"
              alt="<?= $i18n->get("essentialism") ?>"
              class="descImgRight"
            />
          </div>
        </div>

        <h3 data-i18n="axis_2_title"><?= $i18n->get("axis_2_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/justice_soft.png" alt="<?= $i18n->get("rehabilitative_justice") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_2_desc">
            <?= $i18n->get("[html]axis_2_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/justice_hard.png"
              alt="<?= $i18n->get("punitive_justice") ?>"
              class="descImgRight"
            />
          </div>
        </div>

        <h3 data-i18n="axis_3_title"><?= $i18n->get("axis_3_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/progressism.png" alt="<?= $i18n->get("progressive") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_3_desc">
            <?= $i18n->get("[html]axis_3_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/conservatism.png"
              alt="<?= $i18n->get("conservative") ?>"
              class="descImgRight"
            />
          </div>
        </div>

        <h3 data-i18n="axis_4_title"><?= $i18n->get("axis_4_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/internationalism.png" alt="<?= $i18n->get("internationalism") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_4_desc">
            <?= $i18n->get("[html]axis_4_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/nationalism.png"
              alt="<?= $i18n->get("nationalism") ?>"
              class="descImgRight"
            />
          </div>
        </div>

        <h3 data-i18n="axis_5_title"><?= $i18n->get("axis_5_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/communism.png" alt="<?= $i18n->get("communism") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_5_desc">
            <?= $i18n->get("[html]axis_5_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/capitalism.png"
              alt="<?= $i18n->get("capitalism") ?>"
              class="descImgRight"
            />
          </div>
        </div>

        <h3 data-i18n="axis_6_title"><?= $i18n->get("axis_6_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/regulation.png" alt="<?= $i18n->get("regulation") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_6_desc">
            <?= $i18n->get("[html]axis_6_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/laissezfaire.png"
              alt="<?= $i18n->get("laissez_faire") ?>"
              class="descImgRight"
            />
          </div>
        </div>

        <h3 data-i18n="axis_7_title"><?= $i18n->get("axis_7_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/ecology.png" alt="<?= $i18n->get("ecology") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_7_desc">
            <?= $i18n->get("[html]axis_7_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/productivism.png"
              alt="<?= $i18n->get("production") ?>"
              class="descImgRight"
            />
          </div>
        </div>

        <h3 data-i18n="axis_8_title"><?= $i18n->get("axis_8_title") ?></h3>
        <div class="description">
          <div class="descImg">
            <img src="./images/revolution.png" alt="<?= $i18n->get("revolution") ?>"/>
          </div>
          <div class="descText" data-i18n="[html]axis_8_desc">
            <?= $i18n->get("[html]axis_8_desc") ?>
          </div>
          <div class="descImg">
            <img
              src="./images/reformism.png"
              alt="<?= $i18n->get("reform") ?>"
              class="descImgRight"
            />
          </div>
        </div>
      </div>
    </div>
    <?php include('partials/footer.php'); ?>
  </body>
</html>
