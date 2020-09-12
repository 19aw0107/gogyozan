<template>
    <div class="home">

        <!--ここからメインカラム-->
        <div class="main_colum">

            <!--ここからメインコンテンツ-->
            <section class="main_contents">
                <section>
                  <!--今回はフロントエンドのみの実装の為、formタグを消し、代わりにvueで表示しています。-->
                  <!--<form method="" action="">-->
                    <h2>新規店舗登録フォーム</h2>
                    <h3>店舗名</h3>
                    <input type="text" class="input" placeholder="サンプル太郎">
                    <h3>返信を希望するメールアドレス</h3>
                    <input type="email" class="input" placeholder="sample@gmail.com">
                    <h3>お問い合わせ内容</h3>
                    <textarea rows="10" cols="46"></textarea>
                    <div class="btn cursor" @click="$store.state.UpOk = !$store.state.UpOk">
                        <p>送信</p>
                    </div>
                  <!--</form>-->
                  <div class="up_ok kan" v-show="!$store.state.UpOk">
                    <h3>送信完了しました</h3>
                    <img src="../assets/upload/04.png" alt="送信の画像" class="kanimg">
                    <div class="btn cursor" @click="$store.state.UpOk = !$store.state.UpOk">
                        <p>閉じる</p>
                    </div>
                  </div>
                </section>
            </section>
            <!--ここまでメインコンテンツ-->

        </div>
    <!--ここまでメインカラム-->
    </div>
</template>

<style scoped lang="scss">
.main_contents{
  height: calc(100vh - 200px);
}

/*＝＝フォントサイズ＝＝*/
h3{
  color: #000000;
  font-size: 16px;
  font-weight: 600;
}
/*＝＝inputタグ＝＝*/
input{
  display: block;
}
input.input{
  width: 335px;
  height:40px;
  margin: 18px 0;
  border: 2px solid rgb(209, 209, 209) !important;
}
input.input:focus{
  outline: 0;
  box-shadow: 0 0 3px 0 #FFCB00;
  border: 2px solid #FFCB00!important;
}
input.up{
  width: 335px;
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border: solid 1px #dddddd;
  margin: 50px 0;
  p{
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    line-height: 40px;
    text-align: center;
  }
}
input.file{
  background: transparent;
  border: none !important;
}
textarea{
  border: 2px solid rgb(209, 209, 209) !important;
  margin: 18px 0;
}
textarea:focus{
  outline: 0;
  box-shadow: 0 0 3px 0 #FFCB00;
  border: 2px solid #FFCB00!important;
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

/*＝＝ここからもっとみるボタン＝＝*/
.btn{
    display: inline-block;
    width: 337px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border: solid 1px #dddddd;
    margin: 0 auto;
    position: relative;
    p{
        color: #000000;
        font-size: 15px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;
    }
    p:after {
        content: url("../assets/arrow2.svg");
        position: absolute;
        top: 0px;
        right: 8px;
        z-index: 1px;
    }
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
        color: #000000;
        font-size: 15px;
        font-weight: 600;
        line-height: 40px;
        text-align: center;
    }
    p:after {
        content: url("../assets/arrow2.svg");
        position: absolute;
        top: 0px;
        right: 8px;
        z-index: 1px;
    }
}
/*＝＝ここまでもっとみるボタン＝＝*/

/*＝＝CSS 375px以上＝＝*/
@media screen and (min-width: 375px){
    /*＝＝ここからメインコンテンツ＝＝*/
    .main_colum{//メインカラム
        width: 375px;
        margin: 0 auto;
        .main_contents{
          padding: 20px;
          margin-bottom: 30px;
          width: 335px;
          background: #ffffff;
          img{
              display: block;
              width: 200px;
              height: 140px;
              padding: 20px 0;
              margin: 20px auto;
          }
        }
        a{
            color: #000000;
        }
        h2{
            width: 335px;
            font-weight: 600;
            color: #000000;
        }
        .info{
            width: 315px;
            height: 100px;
            margin: 0 auto 20px;
            background: #ffffff;
            border: solid 1px #dddddd;
            box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
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
    }
}

/*＝＝CSS 790px以上＝＝*/
@media screen and (min-width: 790px) {
    .eyecatch{
        width: 790px;
    }
    .main_colum{//メインカラム
        width: 335px;
        margin: 0 auto;
        font-weight: 400;
        background: #ffffff;
    }
    .main_colum{
      background: transparent;
      padding: 0;
      margin-bottom: 30px;
    }
    .main_contents{
      margin: 0 auto;
      background: #ffffff;
    }
    .webarea{
      margin-top: 80px;
    }
}

/*＝＝CSS 1120px以上＝＝*/
@media screen and (min-width: 1120px) {
    .eyecatch{
        width: 335px;
    }
    .main_colum{//メインカラム
        width: 335px;
        margin: 0 auto;
        font-weight: 400;
        .main_contents{
          width: 335px;
          margin: 0 auto;
          h2{
            font-size: 24px;
            width: 100%;
            font-weight: 600;
            color: #000000;
          }
          p{
            font-size: 17px;
            color: #000000;
          }
          h3{
              color: #000000;
              font-size: 20px;
              font-weight: 600;
          }
          img{
            display: block;
            width: 200px;
            margin: 0 auto;
            padding: 20px 0;
          }
        }
    }
    .webarea{
      margin-top: 100px;
    }
}
</style>

<script>
export default {
  data () {
    return {
      login: this.$store.state.login
    }
  },
  methods: {
    Login () {
      this.$store.state.login = !this.$store.state.login
    }
  }
}
</script>
