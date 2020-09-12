<template>
  <footer>
      <nav>
        <ul class="footer_menu">
          <li><router-link to="/"><P>トップページ</P></router-link></li>
          <li><router-link to="/beginner"><P>初めての方へ</P></router-link></li>
          <li><router-link to="/article"><P>記事の一覧</P></router-link></li>
          <li><router-link to="/upload"><P>記事を投稿する</P></router-link></li>
          <li><router-link to="/travel"><P>旅先の一覧</P></router-link></li>
          <li><router-link to="/ad"><P>新規店舗登録</P></router-link></li>
          <li><router-link to="/faq"><P>FAQ</P></router-link></li>
          <li><a href="https://www.sagojo.link/"><P>SAGOJO</P></a></li>
        </ul>
      </nav>
      <p class="copyright">© SAGOJO Inc.</p>
    </footer>
</template>

<style lang="scss" scoped>
/*＝＝ここからフッター＝＝*/
p{
  color: #FFFFFF;
}
footer{
  width: 100%;
  height: 300px;
  background: #000000;
  .footer_menu{
    width: 280px;
    margin: 0 auto;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 120px 120px;
    grid-template-rows: 14px 14px 14px 14px;
    grid-column-gap: 40px;
    grid-row-gap: 30px;
    justify-items: start;
    align-items: stretch;
    font-weight: 400;
  }
  .copyright{
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 300;
    margin-top: 70px;
    text-align: center;
  }
  a{
    color: #FFFFFF;
  }
}
/*＝＝ここまでフッター＝＝*/

/*＝＝PC版：1095px以上の時＝＝*/
@media screen and (min-width: 1095px) {
  /*＝＝ここからフッダー＝＝*/
  footer{
    width: 100%;
    height: 160px;
    background: #000000;
    .footer_menu{
      width: 1000px;
      padding-top: 30px;
      display: block;
      text-align: center;
      font-weight: 400;
      li{
        display: inline-block;
        margin-left: 20px;
        :nth-child(1){
          margin: 0;
        }
      }
      a{
        color: #FFFFFF;
      }
    }
    .copyright{
      font-size: 12px;
      font-weight: 300;
      margin-top: 70px;
      text-align: center;
    }
  }
  /*＝＝ここまでフッダー＝＝*/
}
</style>
