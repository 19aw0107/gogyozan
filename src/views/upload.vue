<template>
  <div id="smapp">
    <!--ここからメインビジュアル-->
    <section class="main_visual">
      <picture>
        <source media="(min-width: 1095px)" srcset="../assets/eyecatch/kijiup1.png">
        <source media="(min-width: 850px)" srcset="../assets/eyecatch/kijiup2.png">
        <img alt="GOGYOZANで記事を書いてスキルアップしませんか？" src="../assets/eyecatch/kijiup3.png" class="eyecatch">
      </picture>
    </section>
    <!--ここまでここからメインビジュアル-->
    <!--メインのエリア-->
    <section class="main_contents">
      <!--左のカラム-->
      <div class="left">
        <section id="sm1">
          <h2>GOGYOZANとは？</h2>
          <p>
            GOGYOZANは、SAGOJOの新人旅人の書いた記事が掲載されているメディアサイトです。
            旅人が実際に飲食店へ訪れ、感想記事を書いています。
          </p>
        </section>
        <section id="sm2">
          <h2>GOGYOZANの記事の特徴</h2>
          <h3>質の安定した飲食店の感想記事</h3>
          <img src="../assets/beginner/te.png" alt="感想記事の画像">
          <p>
            旅人が実際に訪れ、GOGYOZANのサポートの元、クオリティの安定した記事が掲載されます。
          </p>
          <router-link to="/article">
            <div class="btn">
              <p>記事の一覧を見る</p>
            </div>
          </router-link>
        </section>
        <section id="sm3">
          <h2>記事の投稿について</h2>
          <p>
            旅先へ行き、その感想記事を書いて投稿、掲載するまでの流れをシゴトといいます。<br>
            実際のシゴトを通じて、記事執筆について学んでみましょう。
          </p>
        </section>
        <section v-show="$store.state.login">
          <h2>ログイン</h2>
          <p>
            記事を投稿するには、SAGOJOに登録しているアカウントでログインする必要があります。
          </p>
          <div class="btn cursor" @click="$store.state.login = !$store.state.login">
            <p>ログインする</p>
          </div>
        </section>
        <section v-show="!$store.state.login">
          <h2>ログイン中のアカウント情報</h2>
          <p>
            ユーザー名：サンプル さん<br>
            メールアドレス：sample@gmail.com<br>
            ※フロントエンドのみの実装です。ログインの過程は省略しています。
          </p>
          <div class="btn cursor" @click="$store.state.login = !$store.state.login">
            <p>ログアウト</p>
          </div>
        </section>
        <section v-show="!$store.state.login">
          <h3>STEP1: 旅先を決めよう</h3>
          <img src="../assets/upload/01.png" alt="旅先の画像">
          <p>
            まずは旅先を決めましょう。<br>
            行きたい旅先を見つけたら、旅先の場所とシゴト内容を確認しておきましょう。
          </p>
          <router-link to="/travel">
            <div class="btn cursor">
              <p>旅先の一覧を見る</p>
            </div>
          </router-link>
        </section>
        <section v-show="!$store.state.login">
          <h3>STEP2: 旅先にいこう</h3>
          <img src="../assets/upload/02.png" alt="旅先の画像">
          <p>
            旅先へ行きましょう。<br>
            記事を書く際に必要な写真を撮影したり、感想をメモしておくのも忘れずに。
          </p>
        </section>
        <section v-show="!$store.state.login">
          <h3>STEP3: 記事を書く</h3>
          <img src="../assets/upload/03.png" alt="記事執筆の画像">
          <p>
            早速記事を書いてみましょう。<br>
            初めての人は、GOGYOZANで他の人が書いた記事などを参考にして書いてみましょう。
          </p>
        </section>
        <section v-show="!$store.state.login">
                    <h3>STEP4: 記事を送信する</h3>
                    <img src="../assets/upload/04.png" alt="送信の画像">
                    <p>
                      書いた記事をGOGYOZANに送信しましょう。<br>
                      記事は投稿専用の投稿フォームから投稿できます。
                    </p>
                    <router-link to="/uploadform">
                    <div class="btn cursor">
                        <p>投稿フォームはこちら</p>
                    </div>
                    </router-link>
        </section>
        <section v-show="!$store.state.login">
          <h3>STEP5: アドバイスを元に修正する</h3>
            <p>
              GOGYOZANから記事に対するアドバイスや修正事項がメールに送られてきます。<br>
              それに合わせて記事を修正して、再び記事を送信しましょう。<br>
              修正箇所が無くなり、掲載できる記事となるまで繰り返します。
            </p>
        </section>
        <section v-show="!$store.state.login">
            <h3>STEP6: 記事の掲載開始</h3>
            <p>
              掲載できる記事になると記事の掲載が始まります。<br>
              記事の掲載が始まるとSAGOJOのアカウントに旅人EXPが送られます。<br>
              記事を公開して旅人レベルを上げていきましょう！
            </p>
        </section>
      </div>
      <!--右のカラム-->
      <div class="right">
        <div class="sticky">
          <div class="mokuji">
            <h2>目次</h2>
            <nav>
              <ul>
                <li><a href="#sm1"><p>GOGYOZANとは？</p></a></li>
                <li><a href="#sm2"><p>GOGYOZANの記事の特徴</p></a></li>
                <li><a href="#sm3"><p>記事の投稿について</p></a></li>
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
      width: auto;
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
