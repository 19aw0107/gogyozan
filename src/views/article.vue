<template>
  <div class="home">
    <!--ここからメインビジュアル-->
    <section class="main_visual">
      <picture>
        <source media="(min-width: 1095px)" srcset="../assets/eyecatch/kijiitiran1.png">
        <source media="(min-width: 850px)" srcset="../assets/eyecatch/kijiitiran2.png">
        <img alt="GOGYOZANで記事を書いてスキルアップしませんか？" src="../assets/eyecatch/kijiitiran3.png" class="eyecatch">
      </picture>
    </section>
    <!--メインのエリア-->
    <section class="main_contents">
      <!--左のカラム-->
      <div class="left">
        <div class="sort_top">
          <h2>記事の並び替え</h2>
          <div id="sort" v-cloak>
            <div class="btn cursor" id="sort_btn_right" v-on:click="sorton1();Maca()" v-bind:class='{on:active01}'>
              <p class="sort_btn_p">新着順</p>
            </div>
            <div class="btn cursor" id="sort_btn_left" v-on:click="sorton2();Macaa()" v-bind:class='{on:active02}'>
              <p class="sort_btn_p">人気順</p>
            </div>
          </div>
        </div>
        <h2>記事一覧</h2>
        <div id="app2">
          <ul v-for="kiji in limit" :key="kiji.id">
            <li>
              <router-link v-bind:to="kiji.id + 'a'">
                <div class="kiji">
                  <img :src="kiji.img" class="kiji_img">
                  <div>
                    <h3>{{ kiji.title }}</h3>
                    <p class="kiji_text">{{ kiji.text }}</p>
                    <div class="tag_list">
                      <img src="../assets/tag.svg"><p class="tag">{{ kiji.tag[0] }}</p><img src="../assets/tag.svg"><p class="tag">{{ kiji.tag[1] }}</p><img src="../assets/tag.svg"><p class="tag">{{ kiji.tag[2] }}</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="btn cursor" v-if="(limit.length - count) > -1" type="button" @click="More">
            <p>もっと見る</p>
          </div>
        </div>
      </div>
      <!--右のカラム-->
      <div class="right">
        <div class="sticky">
          <h2>記事の並び替え</h2>
          <div id="sort" v-cloak>
            <div class="btn cursor" id="sort_btn_right" v-on:click="sorton1();Maca()" v-bind:class='{on:active01}'>
              <p class="sort_btn_p">新着順</p>
            </div>
            <div class="btn cursor" id="sort_btn_left" v-on:click="sorton2();Macaa()" v-bind:class='{on:active02}'>
              <p class="sort_btn_p">人気順</p>
            </div>
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

<script>
export default {
  data () {
    return {
      active01: true,
      active02: false,
      kijis: this.$store.state.kijis,
      count: 4, // 最初は4つまで記事を掲載
      sort: true,
      keyword: '' // 検索文字
    }
  },
  computed: {
    limit () {
      var sorts = this.sort // ソートの状況
      var list = this.kijis
      // return list.slice(0, 4) // this.count)
      if (sorts === true) { // trueの時
        var a = list.slice(0, this.count) // 0~記事の上限数の結果を返す
        return a
      } else { // falseの時
        var b = list.slice(0, this.count).reverse() // 0~記事の上限数の結果を返す
        return b
      }
    }
  },
  methods: {
    // buttonをクリックすると記事が2つ増える
    More () {
      this.count += 2
    },
    Maca () {
      this.sort = true
    },
    Macaa () {
      this.sort = false
    },
    sorton1 () {
      const element = document.getElementById('sort_btn_right')
      if (element.classList.contains('on') === false) {
        this.active01 = !this.active01
        this.active02 = !this.active02
      }
    },
    sorton2: function () {
      const element = document.getElementById('sort_btn_left')
      if (element.classList.contains('on') === false) {
        this.active01 = !this.active01
        this.active02 = !this.active02
      }
    }
  }
}
</script>

<style scoped lang="scss">
#sort .btn.on{
  background: #FFCB00;
}

/*＝＝アイキャッチ画像＝＝*/
.eyecatch {
  display: block;
  width: 100%;
  margin: 0 auto;
}

/*＝＝ここからメインコンテンツ＝＝*/

.main_contents {
  width: 339px;
  margin: 20px auto;
  .right {
    margin: 60px auto 0;
  }
}

/*＝＝ここから記事＝＝*/
.kiji{
  width: 339px;
  height: 400px;
  margin: 0 auto 15px;
  color: black;
  background: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0,0,0,.16);
  .kiji_img{
    width: 100%;
    height: 200px;
    border-radius: 3px 3px 0 0;
  }
  h3{
    width: 300px;
    margin: 0 auto;
    border-bottom: solid 2px #FFCB00;
    font-size: 18px;
    font-weight: 600;
    line-height: 30.6px;
    padding: 12px 0 0 0;
  }
  .kiji_text{
    width: 300px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 23.8px;
    padding: 9px 0 0 0;
  }
  .tag_list{
    margin: 14px 0 0 20px;
    .tag{
      display: inline;
      font-size: 12px;
      line-height: 20.4px;
      margin: 0 20px 0 6px;
    }
  }
}

/*＝＝ここからもっとみるボタン＝＝*/
.btn{
  width: 339px;
  height: 50px;
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0,0,0,.16);
  position: relative;
  p{
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
  }
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
.btn#sort_btn_left{
  display: inline-block;
  width: 168px;
  height: 50px;
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0,0,0,.16);
  position: relative;
  p{
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
  }
}
.btn#sort_btn_right{
  display: inline-block;
  width: 168px;
  height: 50px;
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0,0,0,.16);
  position: relative;
  p{
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
  }
}
/*＝＝CSS 750px以上＝＝*/

.right{
  display: none;
}

.sort_top{
  display: inline-block;
  margin-bottom: 40px;
}

@media screen and (min-width: 850px) {
  .sort_top{
    display: none;
  }
  .right{
    display: inline;
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
  #sort_btn_left{
    margin-top: 20px;
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
  /*＝＝ここから記事＝＝*/
    .kiji{
      width: 630px;
      height: 210px;
      display: grid;
      grid-template-columns: 300px 315px;
      grid-column-gap: 15px;
      background: #FFFFFF;
      border-radius: 3px;
      box-shadow: 0 2px 10px rgba(0,0,0,.16);
      .kiji_img{
        width: 335px;
        height: 200px;
        border-radius: 3px 3px 0 0;
        width: 284px;
        height: 168px;
        margin: 19px 0 0 14px;
        border-radius: 3px;
      }
      h3{
        width: 300px;
        border-bottom: solid 2px #FFCB00;
        font-size: 18px;
        font-weight: 600;
        line-height: 30.6px;
        padding: 24px 0 0 0;
        margin: 0;
      }
      .kiji_text{
        width: 300px;
        margin: 0;
        font-size: 14px;
        line-height: 23.8px;
        padding: 14px 0 0 0;
      }
      .tag_list{
        margin: 14px 0 0 0;
        .tag{
          display: inline;
          font-size: 12px;
          line-height: 20.4px;
          margin: 0 20px 0 6px;
        }
      }
    }
    /*＝＝ここまで記事＝＝*/
}
</style>
