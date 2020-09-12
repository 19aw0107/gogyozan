<template>
  <div id="smapp">
    <!--ここからメインビジュアル-->
    <section class="main_visual">
      <picture>
        <source media="(min-width: 1095px)" srcset="../assets/eyecatch/fa1.png">
        <source media="(min-width: 850px)" srcset="../assets/eyecatch/fa2.png">
        <img alt="GOGYOZANで記事を書いてスキルアップしませんか？" src="../assets/eyecatch/fa3.png" class="eyecatch">
      </picture>
    </section>
    <!--ここまでここからメインビジュアル-->
    <!--メインのエリア-->
    <section class="main_contents">
      <!--左のカラム-->
      <div class="left">
        <!--ここからFAQ-->
        <section class="main_contents">
          <section>
            <section id="sm1">
              <h2 class="font20px color_yellow">旅人の方へ</h2>
              <div class="accbox">
                <input type="checkbox" id="label1" class="cssacc" />
                <label for="label1"><p>Q.シゴトって何？</p></label>
                <div class="accshow">
                  <p class="qanda_p">A.旅先に行って、その感想の記事を書いて掲載するまでの過程の呼び名です。</p>
                </div>
                    <input type="checkbox" id="label2" class="cssacc" />
                    <label for="label2"><p>Q.旅先って何？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.GOGYOZANに登録されたお店の呼び名です。<br>旅人は、その旅先へ行き、感想記事を作成します。</p>
                    </div>
                    <input type="checkbox" id="label9" class="cssacc" />
                    <label for="label9"><p>Q.旅人って何？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.GOGYOZANで記事を書くユーザーの呼び名です。</p>
                    </div>
                    <input type="checkbox" id="label3" class="cssacc" />
                    <label for="label3"><p>Q.GOGYOZANって何？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.このサイトの呼び名です。<br>由来は、西遊記の孫悟空が500年間下敷きにされていた山の名前です。</p>
                    </div>
                    <input type="checkbox" id="label4" class="cssacc" />
                    <label for="label4"><p>Q.シゴトって具体的に何をするの？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.旅先に行き、感想を記事にします。</p>
                    </div>
                    <input type="checkbox" id="label5" class="cssacc" />
                    <label for="label5"><p>Q.リターンはありますか？</p></label>
                    <div class="accshow">
                      <P class="qanda_p">A.金銭的なリターンはありません。<br>GOGYOZANで記事執筆スキルを高めた後、SAGOJOというサービスをご利用ください。<br>SAGOJOでは「旅の資金」「航空券」「宿泊費」「交通費」「旅で使えるアイテム」などのリターンがもらえます。</P>
                      <a href="https://www.sagojo.link/" class="btn-flat-border margin_auto margin_h20px display_block">
                        <div class="btn cursor">
                          <p>SAGOJOを開く</p>
                        </div>
                      </a>
                    </div>
                    <input type="checkbox" id="label6" class="cssacc" />
                    <label for="label6"><p>Q.GOGYOZANの登録方法がわからない。</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.GOGYOZANはSAGOJOと連携しています。<br>シゴトをする場合は、あらかじめSAGOJOへの登録をして、そちらで登録したメールアドレスとパスワードでログインするようにしてください。</p>
                      <a href="https://www.sagojo.link/" class="btn-flat-border margin_auto margin_h20px display_block">
                        <div class="btn cursor">
                          <p>SAGOJOを開く</p>
                        </div>
                      </a>
                    </div>
                    <input type="checkbox" id="label7" class="cssacc" />
                    <label for="label7"><p>Q.シゴトを辞退したいです。</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.シゴトをする、シゴトを辞退する、どちらも自由となっています。ただし、記事に関するメールのやり取りが途中の場合は、そちらを終えるまで次のシゴトをすることはできませんので、ご理解をよろしくお願いします。</p>
                    </div>
                    <input type="checkbox" id="label8" class="cssacc" />
                    <label for="label8"><p>Q.SAGOJOって何？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.SAGOJOは、旅先でコンテンツ制作の「シゴト」をすることで、企業から「リターン」を受け取りながら旅することができる「すごい旅人求人サイト」です。</p>
                      <a href="https://www.sagojo.link/" class="btn-flat-border margin_auto margin_h20px display_block">
                        <div class="btn cursor">
                            <p>SAGOJOを開く</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </section>
                <section id="sm2">
                  <h2 class="font20px color_yellow padding_h40px_0">飲食店の方へ</h2>
                  <div class="accbox">
                    <input type="checkbox" id="label14" class="cssacc" />
                    <label for="label14"><p>Q.旅先登録って何？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.旅人の旅先に店舗をGOGYOZANに登録することです。登録すると旅人が店舗に訪れ、記事が公開されます。</p>
                    </div>
                    <input type="checkbox" id="label10" class="cssacc" />
                    <label for="label10"><p>Q.登録にはいくらかかりますか？？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.申請は無料です。申請フォームから登録をお願いします。</p>
                    </div>
                    <input type="checkbox" id="label11" class="cssacc" />
                    <label for="label11"><p>Q.掲載される記事を削除できますか？</p></label>
                    <div class="accshow">
                      <p>A.記事の削除はできません。ただし、旅人の記事で掲載できない内容やレベルである場合は、リテイクをお願いしている為、掲載される記事の内容につきましては心配ありません。</p>
                    </div>
                    <input type="checkbox" id="label12" class="cssacc" />
                    <label for="label12"><p>Q.掲載した情報を取り消したいです。</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.店舗の掲載を取り消したい場合は、お問い合わせフォームからご連絡ください。</p>
                    </div>
                    <input type="checkbox" id="label13" class="cssacc" />
                    <label for="label13"><p>Q.シゴトって具体的に何をするの？</p></label>
                    <div class="accshow">
                      <p class="qanda_p">A.登録情報を変更したい場合は、お問い合わせフォームからご連絡ください。</p>
                    </div>
                  </div>
                </section>
              </section>
        </section>
      </div>
      <!--右のカラム-->
      <div class="right">
        <div class="sticky">
          <div class="mokuji">
            <h2>目次</h2>
            <nav>
              <ul>
                <li><a href="#sm1"><p>旅人の方へ</p></a></li>
                <li><a href="#sm2"><p>飲食店の方へ</p></a></li>
              </ul>
            </nav>
          </div>
          <aside class="ad">
            <a href="https://www.sagojo.link/">
              <img alt="SAGOJOの広告" src="../assets/ad.png">
            </a>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
/*＝＝ここからメインコンテンツ＝＝*/

.main_contents {
  width: 339px;
  margin: 20px auto;
  .right {
    margin: 60px auto 0;
  }
  img {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding: 20px 0;
  }
}

/*＝＝FAQ＝＝*/

.accbox {
  width: 339px;
  margin-left: 0px;
  padding: 0;
  max-width: 648px;
  /*最大幅*/
  p {
    width: 310px;
  }
}

.accbox label {
  display: block;
  position: relative;
  margin-bottom: 10px;
  padding: 13px 12px;
  color: #333333;
  font-weight: bold;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .16);
}

.accbox label::after {
  font-size: 16px;
  content: '▼';
  padding-right: 10px;
  position: absolute;
  right: 0;
  top: 25px
}

.accbox input {
  display: none;
}

.accbox .accshow {
  background: #ffffff;
  height: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.8s;
  margin-top: -11px;
  margin-bottom: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .16);
}

.cssacc:checked+label+.accshow {
  height: auto;
  padding: 5px;
  background: #ffffff;
  opacity: 1;
}

.accbox .accshow .qanda_p {
  margin: 15px 10px
}

.cssacc:checked+label::after {
  content: '▲';
}

.accshow_p {
  padding: 0;
}

/*＝＝アイキャッチ画像＝＝*/

.eyecatch {
  display: block;
  width: 100%;
  margin: 0 auto;
}

#sm1, #sm2, #sm3, #sm4 {
  margin-top: -80px;
  padding-top: 80px;
  margin-bottom: 60px;
}

.ad {
  width: 300px;
  margin: 80px auto;
  position: relative;
   ::after {
    content: "PR";
    width: 300px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    color: #ffffff;
    background: #000000;
    position: absolute;
    bottom: -26px;
    right: 0px;
    z-index: 1;
  }
  img {
    display: block;
    width: auto;
    margin: 0 auto;
    padding: 0;
  }
}

.mokuji {
  display: none;
}

h2 {
  width: 339px;
  margin: 0 auto;
  border-bottom: solid 3px #FFCB00;
  font-size: 22px;
  font-weight: 900;
  line-height: 30.4px;
  padding: 12px 0 0 0;
  margin: 0 0 10px;
}

h3 {
  width: 339px;
  color: #000000;
  font-size: 16px;
  line-height: 30px;
  font-weight: 900;
  padding: 10px 0;
  margin: 0 auto;
}

p {
  width: 339px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 27.2px;
  padding: 10px 0;
}

.left {
  section {
    margin-top: 40px;
  }
  section:first-child {
    margin-top: 0px;
  }
}

.btn {
  width: 339px;
  height: 50px;
  margin: 20px auto;
  background: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .16);
  position: relative;
  p {
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    padding: 0;
  }
}

/*＝＝CSS 850px以上＝＝*/

@media screen and (min-width: 850px) {
  .accbox {
    width: 339px;
    margin-left: 20px;
    padding: 0;
    max-width: 648px;
    /*最大幅*/
    p {
      width: 310px;
    }
  }
  .eyecatch {
    width: 780px;
  }
  h2 {
    margin: 16px 20px;
  }
  .main_contents {
    width: 780px;
    margin: 30px auto 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "areaA areaB";
    .left {
      width: 375px;
      grid-area: areaA;
      margin-right: 30px;
    }
    .right {
      width: 375px;
      grid-area: areaB;
      margin: 0 auto;
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 90px;
      }
    }
  }
  .mokuji {
    display: inline;
  }
}

/*＝＝CSS 1120px以上＝＝*/

@media screen and (min-width: 1095px) {
  /*＝＝FAQ＝＝*/
  .accbox {
    width: 610px;
    padding: 0;
    margin: 0;
    p {
      width: 580px;
    }
  }
  .accbox label {
    display: block;
    position: relative;
    margin-bottom: 10px;
    padding: 13px 12px;
    color: #333333;
    font-weight: bold;
    background: #ffffff;
    cursor: pointer;
    transition: all 0.5s;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .16);
  }
  .accbox label::after {
    font-size: 16px;
    content: '▼';
    padding-right: 10px;
    position: absolute;
    right: 0;
    top: 25px
  }
  .accbox input {
    display: none;
  }
  .accbox .accshow {
    background: #ffffff;
    height: 0;
    padding: 0;
    overflow: hidden;
    opacity: 0;
    transition: 0.8s;
    margin-top: -11px;
    margin-bottom: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .16);
  }
  .cssacc:checked+label+.accshow {
    height: auto;
    padding: 5px;
    background: #ffffff;
    opacity: 1;
  }
  .accbox .accshow .qanda_p {
    margin: 15px 10px
  }
  .cssacc:checked+label::after {
    content: '▲';
  }
  .accshow_p {
    padding: 0;
  }
  .eyecatch {
    width: 1055px;
  }
  .main_contents {
    width: 1055px;
    margin: 30px auto 60px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "areaA areaB";
    .left {
      grid-area: areaA;
      margin-right: 30px;
      .btn p {
        width: 339px;
      }
    }
    .right {
      width: 375px;
      grid-area: areaB;
      margin: 0 auto;
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 110px;
      }
      img {
        display: block;
        width: auto;
        margin: 0 auto;
        padding: 0;
      }
    }
    img {
      display: block;
      width: 260px;
      margin: 0 auto;
      padding: 20px 0;
    }
  }
  h2 {
    width: 610px;
    margin: 0 auto;
    border-bottom: solid 3px #FFCB00;
    font-size: 22px;
    font-weight: 900;
    line-height: 30.4px;
    padding: 12px 0 0 0;
    margin: 0 0 10px;
  }
  h3 {
    width: 610px;
    color: #000000;
    font-size: 18px;
    line-height: 30.6px;
    font-weight: 900;
    padding: 10px 0;
    margin: 0;
  }
  p {
    width: 610px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 27.2px;
    padding: 10px 0;
    margin: 0;
  }
  .right {
    h2 {
      width: 339px;
    }
    h3 {
      width: 339px;
    }
    p {
      width: 339px;
    }
  }
}
</style>
