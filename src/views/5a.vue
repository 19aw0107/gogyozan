<template>
  <div id="smapp">
    <!--メインのエリア-->
    <section class="main_contents">
      <!--左のカラム-->
      <div class="left">
        <section id="sm1">
          <h2>餃子といえばこのお店しかない！</h2>
          <img src="../assets/kiji_list/6.jpg" alt="餃子">
          <p>
            餃子の街で知られている宇都宮で人気の餃子店。<br>
            外はパリッ、中はジューシー。<br>
            そんな餃子を味わえるのが、宇都宮駅から徒歩10分にある餃子店「鱈腹」です。
          </p>
        </section>
        <section id="sm2">
          <h2>赤いのれんと餃子の匂いが目印</h2>
          <img src="../assets/kiji_list/6-2.png" alt="餃子">
          <p>
            宇都宮駅を降りて10分歩くと、香ばしく焼かれた餃子の匂いがしてきました。<br>
            赤いのれんには「餃子」の文字。<br>
            ここが今回紹介するお店です。
          </p>
        </section>
        <section id="sm3">
          <h2>注文5分で餃子が運ばれてきます</h2>
          <img src="../assets/kiji_list/6-4.png" alt="餃子">
          <p>
            餃子はなんと、1皿12個で300円！！<br>
            なんてお財布に優しいのでしょうか。<br>
            早速餃子を注文。<br>
            <br>
            ……すると、5分くらいで餃子が運ばれてきました！！<br>
            餃子ってそんなに早く焼きあがるものでしたっけ？
          </p>
        </section>
        <section id="sm4">
          <h2>見るだけで分かるおいしさ</h2>
          <img src="../assets/kiji_list/6-3.png" alt="餃子">
          <p>
            パリッと焼きあがった餃子は見るだけでそのおいしさが伝わってきます。
          </p>
        </section>
        <section id="sm4">
          <h2>鱈腹自慢の特製ダレに付けて食べる</h2>
          <img src="../assets/kiji_list/6-1.png" alt="餃子">
          <p>
            餃子は鱈腹独自のレシピで調合された特製ソースでいただきます。<br>
            <br>
            評判通り、外はパリッとしていて、噛むとあっつあつの肉汁が中からあふれ出てきます。<br>
            とても美味しいです。
          </p>
        </section>
        <section id="sm4">
          <h2>この餃子の秘密は……</h2>
          <img src="../assets/kiji_list/6-5.png" alt="餃子">
          <p>
            ここ「鱈腹」では、油を多めに敷き、短時間で餃子を強火で一気に焼き上げているのだそうです。<br>
            だから注文してすぐに運ばれてきたんですね。<br>
            <br>
            これが外はパリッ、中はジューシーな餃子の秘密です！
          </p>
        </section>
        <section id="sm4">
          <h2>今回紹介したお店はこちら！ </h2>
          <h3 style="text-align:center">餃子専門店「鱈腹（たらふく）」</h3>
          <img src="../assets/kiji_list/6-8.png" alt="鱈腹">
          <p style="width:270px;margin: 0 auto">
            八王子駅から徒歩10分にある餃子専門店。<br>
            住所：東京都八王子市<br>
            電話番号:xxx-xxxx-xxxx
          </p>
          <router-link to="/1t">
            <div class="btn">
              <p>詳しくはこちら</p>
            </div>
          </router-link>
        </section>
      </div>
      <!--右のカラム-->
      <div class="right">
        <div class="sticky">
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
    width: 300px;
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
  padding-top: 20px;
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
  #sm1, #sm2, #sm3, #sm4 {
    padding-top: 20px;
    margin-bottom: 60px;
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
