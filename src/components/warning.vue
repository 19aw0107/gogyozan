<template>
  <div id="warning" v-if="warActive === false">
    <p>
      ※このwebサイトはSAGOJO様からの許可を頂き、学校の進級制作で制作して就職活動の為に公開したものであり、公式なコンテンツではありません。
    </p>
    <button v-on:click="warning()"><p>close</p></button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      warActive: false
    }
  },
  methods: {
    warning: function () {
      this.warActive = !this.warActive
    }
  }
}
</script>

<style lang="scss" scoped>
#warning{
  width: 100%;
  text-align: center;
  border: #FFCB00 2px solid;
  background: #FFFFFF;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  button{
    margin: 10px 0;
  }
}
</style>
