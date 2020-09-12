<template>
  <div class="home">
    <!--スライド-->
    <Slide />
    <!--スライド直下のバナー-->
    <Slidebanner />
    <!--メインのエリア-->
    <section class="main_contents">
      <!--左のカラム-->
      <div class="left">
        <h2>新着記事</h2>
        <Kijilist />
      </div>
      <!--右のカラム-->
      <div class="right">
        <div class="sticky">
          <h2>インフォメーション</h2>
          <Sidebar />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slide from '@/components/Slide.vue'
import Slidebanner from '@/components/Slidebanner.vue'
import Kijilist from '@/components/Kijilist.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Slide,
    Slidebanner,
    Kijilist,
    Sidebar
  }
}
</script>

<style scoped lang="scss">
/*＝＝ここからメインコンテンツ＝＝*/

.main_contents {
  width: 339px;
  margin: 0 auto 30px;
  .right {
    margin: 60px auto 0;
  }
}

/*＝＝CSS 750px以上＝＝*/

@media screen and (min-width: 850px) {
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
}

/*＝＝CSS 1120px以上＝＝*/

@media screen and (min-width: 1095px) {
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
    }
  }
}
</style>
