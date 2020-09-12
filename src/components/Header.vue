<template lang="html">
  <div>
    <header id="header">
      <div class="pc-center">
        <router-link to="/">
        <img src="@/assets/mainlogo.png" class="logo"/>
        </router-link>
        <div class="menu-colum">
          <nav>
            <ul>
              <li>
                <router-link to="/" id="iro">
                  <p>トップページ</p>
                </router-link>
              </li>
              <li>
                <router-link to="/beginner" id="iro">
                  <p>初めての方へ</p>
                </router-link>
              </li>
              <li>
                <router-link to="/article" id="iro">
                  <p>記事の一覧</p>
                </router-link>
              </li>
              <li>
                <router-link to="/upload" id="iro">
                  <p>記事を投稿する</p>
                </router-link>
              </li>
              <li>
                <router-link to="/travel" id="iro">
                  <p>旅先の一覧</p>
                </router-link>
              </li>
              <li>
                <router-link to="/ad" id="iro">
                  <p>新規店舗登録</p>
                </router-link>
              </li>
              <li>
                <router-link to="/faq" id="iro">
                  <p>FAQ</p>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <burger-button
        :active="isActive"
        :bar-color="isActive ? '#38b508' : 'black'"
        @click="isActive = !isActive"
      />
      <!--<div class="link">
        <router-link to="/">
          top
        </router-link>
        <router-link to="/about">
          about
        </router-link>
        <router-link to="/works">
          works
        </router-link>
        <router-link to="/posts">
          frameworks
        </router-link>
        <router-link to="/languages">
          languages
        </router-link>
        <router-link to="/skills">
          contacts
        </router-link>
        <div class="clear" />
      </div>-->
    </header>
    <transition name="hmenu-area">
      <div
        class="hmenu-erea-bg"
        v-if="isActive"
        @click="isActive = !isActive"
      >
      </div>
    </transition>
    <transition name="hmenu">
      <div
        class="hmenu-bg"
        v-if="isActive"
      >
      <ul class="hmenu-colum">
        <li @click="isActive = !isActive">
          <router-link to="/">
            <p>トップページ</p>
          </router-link>
        </li>
        <li @click="isActive = !isActive">
          <router-link to="/beginner">
            <p>初めての方へ</p>
          </router-link>
        </li>
        <li @click="isActive = !isActive">
          <router-link to="/article">
            <p>記事の一覧</p>
          </router-link>
        </li>
        <li @click="isActive = !isActive">
          <router-link to="/upload">
            <p>記事を投稿する</p>
          </router-link>
        </li>
        <li @click="isActive = !isActive">
          <router-link to="/travel">
            <p>旅先の一覧</p>
          </router-link>
        </li>
        <li @click="isActive = !isActive">
          <router-link to="/ad">
            <p>新規店舗登録</p>
          </router-link>
        </li>
        <li @click="isActive = !isActive">
          <router-link to="/faq">
            <p>FAQ</p>
          </router-link>
        </li>
      </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import BurgerButton from 'vue-burger-button'
export default {
  components: { BurgerButton },
  data: () => ({ isActive: false })
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 0 10px hsla(0, 0%, 62.7%, 0.5);
  z-index: 100;
}
.logo {
  display: inline-block;
  height: 26px;
  margin: 14px 0 0 20px;
}

.hmenu-enter-to, .hmenu-leave {
  transition:.5s
}
.hmenu-enter, .hmenu-leave-to{
  transition: .5s;
  transform: translateX(300px);
}

.hmenu-area-enter-active, .hmenu-area-leave-active {
  transition: opacity .5s
}
.hmenu-area-enter, .hmenu-area-leave-to {
  opacity: 0
}
.hmenu-colum li{
  width: 300px;
  border-bottom: 1px solid hsla(0, 0%, 62.7%, 0.8);
  list-style: none;
  a{
    display: block;
    text-decoration: none;
    //color: #000;
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 20px 20px;
  }
}

/* #menu-bg {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background: black;
  &.open {
    display: block;
  }
} */
.hmenu-bg{
  width: 300px;
  height: calc(100% - 54px);
  background: #fff;
  position: fixed;
  top: 54px;
  right: 0px;
  z-index: 51;
  box-shadow: 5px 4px 3px -3px rgba(0,0,0,.2);
  -moz-box-shadow: 5px 4px 3px -3px rgba(0,0,0,.2);
  -webkit-box-shadow: 5px 4px 3px -3px rgba(0,0,0,.2);
  -o-box-shadow: 5px 4px 3px -3px rgba(0,0,0,.2);
  -ms-box-shadow: 5px 4px 3px -3px rgba(0,0,0,.2);
}
.hmenu-erea-bg {
  width: 100%;
  height: calc(100% - 54px);
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 54px;
  left: 0px;
  z-index: 50;
}

.menu-colum{
  display: none;
}

@media screen and (min-width: 768px) {
  header {
    width: 100%;
    height: 60px;
  }
  .pc-center {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    max-width: 748px;
    height: 60px;
    margin: 0 auto;
  }
  .logo {
    height: 34px;
    margin: 0;
  }
  .hmenu-enter-to, .hmenu-leave {
    transition:.5s
  }
  .hmenu-enter, .hmenu-leave-to{
    transition: .5s;
    transform: translateX(calc((100% - 748px) / 2) + 300px);
  }

  .hmenu-area-enter-active, .hmenu-area-leave-active {
    transition: opacity .5s
  }
  .hmenu-area-enter, .hmenu-area-leave-to {
    opacity: 0
  }
  .hmenu-bg{
    width: calc(300px + ((100% - 748px) / 2));
  }
  .hmenu-erea-bg {
    width: 100%;
    height: calc(100% - 60px);
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 60px;
    left: 0px;
    z-index: 50;
  }
  .hmenu-colum li{
    border-bottom: 1px solid hsla(0, 0%, 62.7%, 0.8);
    list-style: none;
    a{
      display: block;
      text-decoration: none;
      //color: #000;
      font-size: 18px;
      font-weight: bold;
      padding: 20px 0 20px 20px;
    }
  }
}
@media screen and (min-width: 1060px) {
  header {
    width: 100%;
    height: 80px;
  }
  .pc-center {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    max-width: 1040px;
    height: 80px;
    margin: 0 auto;
  }
  .logo {
    height: 40px;
  }
  /*.menu-colum li{
    display: inline-block;
    list-style: none;
    height: 80px;
    vertical-align: middle;
    a{
      text-decoration: none;
      color: #000;
      font-size: 18px;
      font-weight: bold;
      padding: 20px 0 20px 20px;
    }
    p{
      vertical-align: middle;
      line-height: 18px;
    }
  }*/
  .menu-colum {//PC版メニュー
    display: inline;
    position: fixed;
    right: calc((100% - 1040px)/2);
    top: 29px;
    z-index: 2;
    li{
      display: inline-block;
      margin-left: 30px;
      :nth-child(1){
        margin: 0;
      }
    }
    p{
      //color: #000000;
      font-size: 16px;
      font-weight: 900;
    }
  }
}
@media screen and (min-width: 1260px) {
  header {
    width: 100%;
    height: 80px;
  }
  .pc-center {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    height: 80px;
    margin: 0 auto;
  }
  .logo {
    height: 40px;
  }
  .menu-colum {//PC版メニュー
    display: inline;
    position: fixed;
    right: calc((100% - 1240px)/2);
    top: 29px;
    z-index: 2;
    li{
      display: inline-block;
      margin-left: 30px;
      :nth-child(1){
        margin: 0;
      }
    }
    p{
      //color: #000000;
      font-size: 16px;
      font-weight: 900;
    }
    a{
      text-decoration: none;
      &.router-link-exact-active{
        color: #42b983;
      }
    }
  }
}
a#iro{
  text-decoration: none;
  &.router-link-exact-active p{
    color: #FFCB00!important;
  }
}
</style>
<style src="vue-burger-button/dist/vue-burger-button.css"></style>

<!--<style lang="css" scoped>
.html{
  margin:0;
}
.body{
  margin:0;
}

.header{
  height:50px;
  display:flex;
  justify-content:space-around;
  margin:0;
}

.menu{
  width:16%;
  text-align:center;
  height:44%;
  padding:20px;
  margin:0;
}
.menu:hover{
  background-color:green;
  opacity:0.5;
  color:black;
}

</style>-->
