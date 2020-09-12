<template>
  <div id="smapp">
    <!--メインのエリア-->
    <section class="main_contents">
      <!--左のカラム-->
      <div class="left">
        <section id="sm4">
          <h2>餃子専門店「鱈腹（たらふく）」 </h2>
          <img src="../../assets/kiji_list/6-8.png" alt="鱈腹">
          <p style="margin: 0 auto">
            八王子駅から徒歩10分にある餃子専門店です。
            外はパリッと、中はジューシーな餃子が自慢で、長年愛されてきました。
            <br>
            おすすめは餃子12個と半チャーハンのセット。
          </p>
          <div class="btn" @click="$store.state.UpOk2 = !$store.state.UpOk2">
            <p>シゴトを確認する</p>
          </div>
        </section>
        <section id="sm1">
          <h2>店舗情報</h2>
          <h3>営業時間</h3>
          <p>
            平日（定休日：月曜日、水曜日）<br>
            10:00~22:00<br>
            土曜日、日曜日、祝日<br>
            09:00~21:00
          </p>
          <h3>座席数</h3>
          <p>
            カウンター:20席<br>
            テーブル:6席
          </p>
          <h3>電話番号</h3>
          <p>
            xxx-xxxx-xxxx
          </p>
          <h3>アクセス</h3>
          <p>
            八王子駅から徒歩10分。<br>
            東京都八王子市旭町サンプル丁目
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103736.00770929018!2d139.22580742638414!3d35.65852467310431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60191eb9b729f437%3A0x27d80e549d4e1c62!2z5p2x5Lqs6YO95YWr546L5a2Q5biC!5e0!3m2!1sja!2sjp!4v1579513111193!5m2!1sja!2sjp" width="312" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </section>
        <div class="up_ok kan" v-show="!$store.state.UpOk2">
          <h3>シゴト内容</h3>
          <p>ここにシゴト内容が入ります。</p>
          <div class="btn cursor" @click="$store.state.UpOk2 = !$store.state.UpOk2">
            <p>閉じる</p>
          </div>
        </div>
      </div>
      <!--右のカラム-->
      <div class="right">
        <div class="sticky">
          <aside class="ad">
            <a href="https://www.sagojo.link/">
              <img alt="SAGOJOの広告" src="../../assets/ad.png">
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

.up_ok{
  width: 348px;
  height: 280px;
  padding: 20px;
  background: #FFFFFF;
  border: solid 3px #FFCB00;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: calc((100% - 360px)/2);
  left: calc((100% - 350px)/2);
  z-index: 4;
}
.kan .btn{
    display: inline-block;
    width: 300px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border: solid 1px #dddddd;
    margin: 0 auto;
    position: relative;
    p{
      width: 339px;
        color: #000000;
        font-size: 15px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;
    }
    p:after {
        content: url("../../assets/arrow2.svg");
        position: absolute;
        top: 0px;
        right: 8px;
        z-index: 1px;
    }
}
/*＝＝ここまでもっとみるボタン＝＝*/

.main_contents .left .kan .btn p{
    width: 300px;
}

.main_colum .main_contents img{
    display: block;
    width: 200px;
    margin: 0 auto;
    padding: 20px 0;
    margin: 20px auto;
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
