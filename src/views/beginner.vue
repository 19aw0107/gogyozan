<template>
  <div id="smapp">
    <!--ここからメインビジュアル-->
    <section class="main_visual">
      <picture>
        <source media="(min-width: 1095px)" srcset="../assets/eyecatch/hajimete1.png">
        <source media="(min-width: 850px)" srcset="../assets/eyecatch/hajimete2.png">
        <img alt="GOGYOZANで記事を書いてスキルアップしませんか？" src="../assets/eyecatch/hajimete3.png" class="eyecatch">
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
          <h2>記事を書くユーザーのメリット</h2>
          <h3>記事執筆のスキルアップ</h3>
          <img src="../assets/beginner/lvup.png" alt="スキルアップの画像">
          <p>
            GOGYOZANでは実際に記事を書くシゴトをして、記事執筆のスキルを高めることができます！
          </p>
          <router-link to="/upload">
            <div class="btn">
              <p>記事を投稿する</p>
            </div>
          </router-link>
        </section>
        <section id="sm4">
          <h2>自分のお店を旅先にするメリット</h2>
          <h3>無料で集客できる</h3>
          <img src="../assets/beginner/syuukyaku.png" alt="集客の画像">
          <p>
            お店を旅先に登録して、無料で集客しませんか？ 登録すると、旅人がお店にやってきます！
          </p>
          <router-link to="/ad">
            <div class="btn">
              <p>新規店舗登録</p>
            </div>
          </router-link>
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
                <li><a href="#sm3"><p>記事を書くユーザーのメリット</p></a></li>
                <li><a href="#sm4"><p>自分のお店を旅先にするメリット</p></a></li>
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
