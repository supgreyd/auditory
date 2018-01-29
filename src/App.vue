<template>
  <div id="app">
    <App-header @sideBarSlide="sideBarHide = !sideBarHide"
                @filterSlide="filtersSlide =!filtersSlide">
    </App-header>
    <Sidebar :sideBarOpen="sideBarHide"></Sidebar>
    <div class="page-wrapper" :class="{'page-wrapper-small' : sideBarHide, 'filterActive' : filtersSlide}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/header/header'
  import Sidebar from './components/sidebar/sidebar'
export default {
  name: 'App',
  data: () => ({
    sideBarHide: false,
    filtersSlide: false
  }),
  components: {
    AppHeader,
    Sidebar
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
  .page-wrapper{
    padding-top: 112px;
    margin-left: 50px;
    transform: translateX(0);
    transition: all .3s;
  }
  .page-wrapper-small{
    margin-left: 265px;
  }
  @media(max-width: 1023px) {
    /*.page-wrapper-small{*/
      /*margin-left: 0;*/
      /*transform: translateX(265px);*/
      /*position: absolute;*/
    /*}*/
    .filterActive{
      transform: translateX(290px);
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
