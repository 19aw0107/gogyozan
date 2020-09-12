<template>
    <!--ここからスライド下のバナー-->
    <section class="top_banner_area">
      <ul>
        <li><router-link to="/beginner">
          <div class="top_banner">
            <p class="beginner">初めての方へ</p>
          </div>
        </router-link></li>
        <li><router-link to="/ad">
          <div class="top_banner">
            <p class="new">新規店舗登録</p>
          </div>
        </router-link></li>
      </ul>
    </section>
    <!--ここまでスライド下のバナー-->
</template>

<style scoped lang="scss">
/*＝＝ここからスライド下のボタン（SPのみ）＝＝*/
.top_banner_area{
  width: 339px;
  margin: 30px auto 30px;
  li{
    display: inline-block; //横並び
  }
  li:nth-child(1){
    margin-right: 19px;//右にマージン
  }
  .top_banner{
    display: inline-block;
    width: 158px;
    height: 90px;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(0,0,0,.16);
    position: relative;
    p{
      font-size: 16px;
      font-weight: 900;
      line-height: 90px;
      position: absolute;
      left: 44px;
      z-index: 1px;
    }
    p.beginner:after {
      content:"";
      width: 18px;
      height: 18px;
      display: inline-block;
      background: url(../assets/icon_01.png);
      background-size: contain;
      vertical-align: middle;
      position: absolute;
      top: 37px;
      left: -26px;
      z-index: 1px;
    }
    p.new:after {
      content:"";
      width: 18px;
      height: 18px;
      display: inline-block;
      background: url(../assets/icon_02.png);
      background-size: contain;
      vertical-align: middle;
      position: absolute;
      top: 37px;
      left: -26px;
      z-index: 1px;
    }
  }
}
/*＝＝ここまでスライド下のボタン（SPのみ）＝＝*/

/*＝＝CSS 750px以上＝＝*/
@media screen and (min-width: 850px)  {
  .top_banner_area{
    display: none;
  }
}
</style>
