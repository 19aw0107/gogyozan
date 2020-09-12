<template>
  <div id="app">
    <Header />
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <transition mode=”out-in”>
      <router-view class="webarea" />
    </transition>
    <Footer />
    <warning />
  </div>
</template>

<script>
import '@/assets/common.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import warning from './components/warning.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    warning
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  inset-inline-start: 0px;
  scroll-behavior: smooth;
}
span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p{
  transform: rotate(0.03deg);
  color: #333;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
}
.v-enter {
  transform: translate(0,40px);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.webarea{
  margin-top: 54px;
}

h2{
  width: 350px;
  line-height: 28px;
  color: #000000;
  font-size: 22px;
  font-weight: 900;
  margin: 0 0 10px;
}

@media screen and (min-width: 768px) {
  .webarea{
    margin-top: 60px;
  }
}
@media screen and (min-width: 1060px) {
  .webarea{
    margin-top: 80px;
  }
}

a#iro{
  text-decoration: none;
  &.router-link-exact-active{
    color: #42b983!important;
  }
}
</style>
