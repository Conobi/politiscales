<?php
  $page_type = "results";
  include('translate.php');
?>
<!DOCTYPE html>
<html lang="<?= $i18n->_lang ?>">
  <?php include('partials/head.php'); ?>
  <body>
    <?php include('partials/header.php') ?>

    <div id="content">
      <div id="mainFrame">
        <h2 data-i18n="results"><?= $i18n->get("results") ?></h2>

        <p class="simpleText" data-i18n="[html]results_desc">
          <?= $i18n->get("[html]results_desc") ?>
        </p>

        <div class="generatedResultsDecorations">
          <canvas id="generatedResults" width="800" height="1200"></canvas>
        </div>

        <div id="urlToCopyContainer" class="urlToCopyContainer">
          <div id="urlToCopy" class="urlToCopy"></div>
        </div>
        <div class="navButtons">
          <button
            class="button"
            onclick="shareLink();"
            id="buttonLink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
              />
            </svg>
            <span data-i18n="copy_link"><?= $i18n->get("copy_link") ?></span>
          </button>
          <button
            id="download"
            target="_blank"
            class="button"
            onclick="download_image();"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
              />
            </svg>
            <span data-i18n="download"><?= $i18n->get("download") ?></span>
          </button>
        </div>

        <hr />

        <div class="flagDecoration">
          <canvas id="generatedFlag" width="512" height="256"></canvas>
          <div id="slogan"></div>
        </div>

        <div class="columnContainer">
          <div class="columnLeft">
            <div class="scale">
              <div class="left"><img src="./images/constructivism.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="constructivism"><?= $i18n->get("constructivism") ?></div>
                  <div class="right-label" data-i18n="essentialism"><?= $i18n->get("essentialism") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="cAxisNeg" class="axis-left axisConstructivism">
                    <span id="cAxisNegText"></span>
                  </div>
                  <div id="cAxisMid" class="axis-center axisNeutral">
                    <span id="cAxisMidText"></span>
                  </div>
                  <div id="cAxisPos" class="axis-right axisEssentialism">
                    <span id="cAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/essentialism.png" /></div>
            </div>

            <div class="scale">
              <div class="left"><img src="./images/justice_soft.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="rehabilitative_justice"><?= $i18n->get("rehabilitative_justice") ?></div>
                  <div class="right-label" data-i18n="punitive_justice"><?= $i18n->get("punitive_justice") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="jAxisNeg" class="axis-left axisLiberal">
                    <span id="jAxisNegText"></span>
                  </div>
                  <div id="jAxisMid" class="axis-center axisNeutral">
                    <span id="jAxisMidText"></span>
                  </div>
                  <div id="jAxisPos" class="axis-right axisAuthoritarism">
                    <span id="jAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/justice_hard.png" /></div>
            </div>

            <div class="scale">
              <div class="left"><img src="./images/progressism.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="progressive"><?= $i18n->get("progressive") ?></div>
                  <div class="right-label" data-i18n="conservative"><?= $i18n->get("conservative") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="sAxisNeg" class="axis-left axisProgressism">
                    <span id="sAxisNegText"></span>
                  </div>
                  <div id="sAxisMid" class="axis-center axisNeutral">
                    <span id="sAxisMidText"></span>
                  </div>
                  <div id="sAxisPos" class="axis-right axisConservatism">
                    <span id="sAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/conservatism.png" /></div>
            </div>

            <div class="scale">
              <div class="left"><img src="./images/internationalism.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="internationalism"><?= $i18n->get("internationalism") ?></div>
                  <div class="right-label" data-i18n="nationalism"><?= $i18n->get("nationalism") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="bAxisNeg" class="axis-left axisInternationalism">
                    <span id="bAxisNegText"></span>
                  </div>
                  <div id="bAxisMid" class="axis-center axisNeutral">
                    <span id="bAxisMidText"></span>
                  </div>
                  <div id="bAxisPos" class="axis-right axisNationalism">
                    <span id="bAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/nationalism.png" /></div>
            </div>
          </div>

          <div class="columnRight">
            <div class="scale">
              <div class="left"><img src="./images/communism.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="communism"><?= $i18n->get("communism") ?></div>
                  <div class="right-label" data-i18n="capitalism"><?= $i18n->get("capitalism") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="pAxisNeg" class="axis-left axisCommunism">
                    <span id="pAxisNegText"></span>
                  </div>
                  <div id="pAxisMid" class="axis-center axisNeutral">
                    <span id="pAxisMidText"></span>
                  </div>
                  <div id="pAxisPos" class="axis-right axisCapitalism">
                    <span id="pAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/capitalism.png" /></div>
            </div>

            <div class="scale">
              <div class="left"><img src="./images/regulation.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="regulation"><?= $i18n->get("regulation") ?></div>
                  <div class="right-label" data-i18n="laissez_faire"><?= $i18n->get("laissez_faire") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="mAxisNeg" class="axis-left axisRegulation">
                    <span id="mAxisNegText"></span>
                  </div>
                  <div id="mAxisMid" class="axis-center axisNeutral">
                    <span id="mAxisMidText"></span>
                  </div>
                  <div id="mAxisPos" class="axis-right axisLaissez">
                    <span id="mAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/laissezfaire.png" /></div>
            </div>

            <div class="scale">
              <div class="left"><img src="./images/ecology.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="ecology"><?= $i18n->get("ecology") ?></div>
                  <div class="right-label" data-i18n="production"><?= $i18n->get("production") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="eAxisNeg" class="axis-left axisEcology">
                    <span id="eAxisNegText"></span>
                  </div>
                  <div id="eAxisMid" class="axis-center axisNeutral">
                    <span id="eAxisMidText"></span>
                  </div>
                  <div id="eAxisPos" class="axis-right axisProductivism">
                    <span id="eAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/productivism.png" /></div>
            </div>

            <div class="scale">
              <div class="left"><img src="./images/revolution.png" /></div>
              <div class="axis">
                <div class="label">
                  <div class="left-label" data-i18n="revolution"><?= $i18n->get("revolution") ?></div>
                  <div class="right-label" data-i18n="reform"><?= $i18n->get("reform") ?></div>
                </div>
                <div class="axis-bar">
                  <div id="tAxisNeg" class="axis-left axisRevo">
                    <span id="tAxisNegText"></span>
                  </div>
                  <div id="tAxisMid" class="axis-center axisNeutral">
                    <span id="tAxisMidText"></span>
                  </div>
                  <div id="tAxisPos" class="axis-right axisRefo">
                    <span id="tAxisPosText"></span>
                  </div>
                </div>
              </div>
              <div class="right"><img src="./images/reformism.png" /></div>
            </div>
          </div>
        </div>
        <br />
        <div id="bonusBox">
          <h3 data-i18n="bonus_chars"><?= $i18n->get("bonus_chars") ?></h3>

          <div id="anarBonus" class="description">
            <div class="descImg">
              <img src="./images/anarchism.png" alt="" />
            </div>
            <div class="descTextMono">
              <h4 data-i18n="anarchist"><?= $i18n->get("anarchist") ?></h4>
              <p data-i18n="anarchist_desc">
                <?= $i18n->get("anarchist_desc") ?>
              </p>
            </div>
          </div>

          <div id="pragBonus" class="description">
            <div class="descImg">
              <img src="./images/pragmatism.png" alt="" />
            </div>
            <div class="descTextMono">
              <h4 data-i18n="pragmatist"><?= $i18n->get("pragmatist") ?></h4>
              <p data-i18n="pragmatist_desc">
                <?= $i18n->get("pragmatist_desc") ?>
              </p>
            </div>
          </div>

          <div id="femiBonus" class="description">
            <div class="descImg"><img src="./images/feminism.png" alt="" /></div>
            <div class="descTextMono">
              <h4 data-i18n="feminist"><?= $i18n->get("feminist") ?></h4>
              <p data-i18n="feminist_desc"><?= $i18n->get("feminist_desc") ?></p>
            </div>
          </div>

          <div id="compBonus" class="description">
            <div class="descImg">
              <img src="/images/complotism.png" alt="" />
            </div>
            <div class="descTextMono">
              <h4><?= $i18n->get("conspiracist") ?></h4>
              <p>
                <?= $i18n->get("conspiracist_desc") ?>
              </p>
            </div>
          </div>

          <div id="vegaBonus" class="description">
            <div class="descImg"><img src="./images/veganism.png" alt="" /></div>
            <div class="descTextMono">
              <h4 data-i18n="vegan"><?= $i18n->get("vegan") ?></h4>
              <p data-i18n="vegan_desc">
                <?= $i18n->get("vegan_desc") ?>
              </p>
            </div>
          </div>

          <div id="monaBonus" class="description">
            <div class="descImg">
              <img src="./images/monarchism.png" alt="" />
            </div>
            <div class="descTextMono">
              <h4 data-i18n="monarchist"><?= $i18n->get("monarchist") ?></h4>
              <p data-i18n="monarchist_desc"><?= $i18n->get("monarchist_desc") ?></p>
            </div>
          </div>

          <div id="reliBonus" class="description">
            <div class="descImg"><img src="./images/religion.png" alt="" /></div>
            <div class="descTextMono">
              <h4 data-i18n="missionary"><?= $i18n->get("missionary") ?></h4>
              <p data-i18n="missionary_desc">
                <?= $i18n->get("missionary_desc") ?>
              </p>
            </div>
          </div>
        </div>

        <div class="navButtons">
          <a class="button" href="./quiz" data-i18n="restart_test"><?= $i18n->get("restart_test") ?></a>
        </div>
      </div>
    </div>

    <?php include('partials/footer.php'); ?>
    <script src="./flags.js"></script>
    <script src="./results.js"></script>
  </body>
</html>
