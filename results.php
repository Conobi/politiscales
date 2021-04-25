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
        <p class="navButtons">
          <a class="button" id="buttonDiscord" target="_blank" href="https://discord.gg/wBYGaevB7a">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-discord" width="24" height="24" viewBox="0 0 16 16">
              <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"></path>
              <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"></path>
            </svg>
            <span data-i18n="discord_share"><?= $i18n->get("discord_share") ?></span>
          </a>
        </p>
        <div class="generatedResultsDecorations">
          <canvas id="generatedResults" width="800" height="1200"></canvas>
        </div>

        <div id="urlToCopyContainer" class="urlToCopyContainer">
          <div id="urlToCopy" class="urlToCopy"></div>
        </div>
        <div class="navButtons">
          <button class="button" onclick="shareLink();" id="buttonLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
              />
            </svg>
            <span data-i18n="copy_link"><?= $i18n->get("copy_link") ?></span>
          </button>
          <button id="download" target="_blank" class="button" onclick="download_image();">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
              />
            </svg>
            <span data-i18n="download"><?= $i18n->get("download") ?></span>
          </button>
          <a class="button" id="buttonTwitter" target="_blank">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
            </svg>
            <span data-i18n="twitter_share"><?= $i18n->get("twitter_share") ?></span>
          </a>
          <a class="button" id="buttonReddit" target="_blank">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14.5 15.41C14.58 15.5 14.58 15.69 14.5 15.8C13.77 16.5 12.41 16.56 12 16.56C11.61 16.56 10.25 16.5 9.54 15.8C9.44 15.69 9.44 15.5 9.54 15.41C9.65 15.31 9.82 15.31 9.92 15.41C10.38 15.87 11.33 16 12 16C12.69 16 13.66 15.87 14.1 15.41C14.21 15.31 14.38 15.31 14.5 15.41M10.75 13.04C10.75 12.47 10.28 12 9.71 12C9.14 12 8.67 12.47 8.67 13.04C8.67 13.61 9.14 14.09 9.71 14.08C10.28 14.08 10.75 13.61 10.75 13.04M14.29 12C13.72 12 13.25 12.5 13.25 13.05S13.72 14.09 14.29 14.09C14.86 14.09 15.33 13.61 15.33 13.05C15.33 12.5 14.86 12 14.29 12M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12C2 6.5 6.5 2 12 2S22 6.5 22 12M18.67 12C18.67 11.19 18 10.54 17.22 10.54C16.82 10.54 16.46 10.7 16.2 10.95C15.2 10.23 13.83 9.77 12.3 9.71L12.97 6.58L15.14 7.05C15.16 7.6 15.62 8.04 16.18 8.04C16.75 8.04 17.22 7.57 17.22 7C17.22 6.43 16.75 5.96 16.18 5.96C15.77 5.96 15.41 6.2 15.25 6.55L12.82 6.03C12.75 6 12.68 6.03 12.63 6.07C12.57 6.11 12.54 6.17 12.53 6.24L11.79 9.72C10.24 9.77 8.84 10.23 7.82 10.96C7.56 10.71 7.2 10.56 6.81 10.56C6 10.56 5.35 11.21 5.35 12C5.35 12.61 5.71 13.11 6.21 13.34C6.19 13.5 6.18 13.62 6.18 13.78C6.18 16 8.79 17.85 12 17.85C15.23 17.85 17.85 16.03 17.85 13.78C17.85 13.64 17.84 13.5 17.81 13.34C18.31 13.11 18.67 12.6 18.67 12Z" />
            </svg>
            <span data-i18n="reddit_share"><?= $i18n->get("reddit_share") ?></span>
          </a>
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
              <img src="./images/complotism.png" alt="" />
            </div>
            <div class="descTextMono">
              <h4 data-i18n="conspiracist"><?= $i18n->get("conspiracist") ?></h4>
              <p data-i18n="conspiracist_desc">
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
