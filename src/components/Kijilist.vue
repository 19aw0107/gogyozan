<template>
  <div id="app2">
    <ul v-for="kiji in limit" :key="kiji.id">
      <li>
        <router-link v-bind:to="'/article/' + kiji.id">
          <div class="kiji">
            <img :src="kiji.img" class="kiji_img left">
            <div class="right">
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
</template>

<script>
export default {
  data () {
    return {
      kijis: this.$store.state.kijis,
      count: 4// 最初は4つまで記事を掲載
    }
  },
  computed: {
    limit () {
      var list = this.kijis
      return list.slice(0, this.count)// this.count)
    }
  },
  methods: {
    // buttonをクリックすると記事が2つ増える
    More () {
      this.count += 2
    }
  }
}
</script>

<style scoped lang="scss">
a{
  text-decoration: none;
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
  /*＝＝ここまで記事＝＝*/

  @media screen and (min-width: 1095px){
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
