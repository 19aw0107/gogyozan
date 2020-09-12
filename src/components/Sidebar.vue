<template>
  <section>
    <router-link to="/travel">
      <div class="info">
        <p>旅先の一覧</p>
      </div>
    </router-link>
    <router-link to="/upload">
      <div class="info">
        <p>記事を投稿する</p>
      </div>
    </router-link>
    <router-link to="/faq">
      <div class="info">
        <p>FAQ</p>
      </div>
    </router-link>
    <router-link to="/ad">
      <div class="info">
        <p>新規店舗登録</p>
      </div>
    </router-link>
    <aside class="ad">
      <a href="https://www.sagojo.link/">
        <img alt="SAGOJOの広告" src="../assets/ad.png">
      </a>
    </aside>
  </section>
</template>

<style scoped lang="scss">
  /*＝＝ここからメインコンテンツ＝＝*/
  .info_list_ad{
    width: 339px;
    margin: 60px auto 0;
  }
  .info{
    width: 339px;
    height: 100px;
    margin: 0 auto 20px;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(0,0,0,.16);
    position: relative;
    p{
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      line-height: 100px;
    }
    :after {
      content: url("../assets/arrow2.svg");
      position: absolute;
      top: 2px;
      right: 8px;
      z-index: 1px;
    }
  }
  .ad{
    width: 300px;
    margin: 80px auto;
    position: relative;
    ::after{
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
  }

/*＝＝CSS 750px以上＝＝*/
@media screen and (min-width: 750px) {
  .top_banner_area{
    display: none;
  }
  .info_list_ad{
    width: 339px;
    background: transparent;
    padding: 0;
    margin: 0 auto;
    padding-bottom: 10px;
  }
  .info_bg{
    width: 345px;
    padding: 20px;
  }
}

/*＝＝CSS 1120px以上＝＝*/
@media screen and (min-width: 1120px) {
  .info_list_ad{
    width: 375px;
  }
}
</style>
