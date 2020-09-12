<template>
  <div key="flickity" scoped>
    <flickity
      :options="flickityOptions"
      ref="flickity"
      @dragMove="dragMove"
      @init="api=$event.flickityApi"
    scoped>
      <div class="carousel-cell carousel-cell-img1"><router-link to="/upload" id="slide-link"></router-link></div>
      <div class="carousel-cell carousel-cell-img2"><a href="https://www.sagojo.link/" id="slide-link"></a></div>
      <div class="carousel-cell carousel-cell-img3"><router-link to="/ad" id="slide-link"></router-link></div>
    </flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity-2'
import 'vue-flickity-2/dist/vue-flickity-2.css'

export default {
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        autoPlay: 2000,
        pageDots: false,
        resize: true,
        prevNextButtons: true,
        wrapAround: true,
        initialIndex: 0,
        draggable: true,
        cellAlign: 'center'
      },
      api: {}
    }
  },
  methods: {
    dragMove (event, pointer, moveVector) {
      console.log(event, pointer, moveVector)
    },
    next () {
      this.api.next()
    },
    previous () {
      this.api.previous()
    }
  }
}
</script>

<style  scoped lang="scss">
#slide-link{
  width: 100%;
  height: 100%
}
.carousel-cell {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 4px solid #fff;
}
.carousel-cell-img1{
  width: 90vw;
  height: 60vw;
  background: url(../assets/slide/slide01.png);
  background-size :cover;
}
.carousel-cell-img2{
    width: 90vw;
  height: 60vw;
    background: url(../assets/slide/slide02.png);
    background-size :cover;
}
.carousel-cell-img3{
    width: 90vw;
  height: 60vw;
    background: url(../assets/slide/slide03.png);
    background-size :cover;
}
.flickity-button{
    background: none;
}
@media screen and (min-width: 768px) {
    .carousel-cell-img1{
  width: 80vw;
  height: 40vw;
  background: url(../assets/slide/slide012.png);
  background-size :cover;
}
.carousel-cell-img2{
    width: 80vw;
  height: 40vw;
    background: url(../assets/slide/slide022.png);
    background-size :cover;
}
.carousel-cell-img3{
    width: 80vw;
  height: 40vw;
    background: url(../assets/slide/slide032.png);
    background-size :cover;
}
}
@media screen and (min-width: 1060px) {
    @media screen and (min-width: 768px) {
    .carousel-cell-img1{
  width: 70vw;
  height: 35vw;
  background: url(../assets/slide/slide012.png);
  background-size :cover;
}
.carousel-cell-img2{
    width: 70vw;
  height: 35vw;
    background: url(../assets/slide/slide022.png);
    background-size :cover;
}
.carousel-cell-img3{
    width: 70vw;
  height: 35vw;
    background: url(../assets/slide/slide032.png);
    background-size :cover;
}
}
}
@media screen and (min-width: 1260px) {
    @media screen and (min-width: 768px) {
    .carousel-cell-img1{
  width: 60vw;
  height: 27vw;
  background: url(../assets/slide/slide013.png);
  background-size :cover;
}
.carousel-cell-img2{
    width: 60vw;
  height: 27vw;
    background: url(../assets/slide/slide023.png);
    background-size :cover;
}
.carousel-cell-img3{
    width: 60vw;
  height: 27vw;
    background: url(../assets/slide/slide033.png);
    background-size :cover;
}
}
}
</style>
