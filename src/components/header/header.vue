<template>
  <div class="header container-fluid">
    <div class="row">
      <div class="header__logoBlock">
        <img src="../../assets/images/logo.png" alt="">
        <h1>{{ title }}</h1>
      </div>
      <div class="header__contentBlock">
        <img v-for="elem in headerContent" :src="elem.icon" alt="" @click="sideBarSlide(elem.code)">
      </div>
      <button>Создать сообщение</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppHeader",
      data: () => ({
        title: 'Аудитория',
        headerContent: [
          {
            code: 'menu',
            icon: require('../../assets/images/menu.png')
          },
          {
            code: 'filter',
            icon: require('../../assets/images/graph.png')
          }
        ]
      }),
      methods: {
        sideBarSlide(code) {
          code === 'menu' ? this.$emit('sideBarSlide') : code === 'filter' ? this.$emit('filterSlide') : ''
        },
      }
    }
</script>

<style lang="scss">
  @import "../../assets/scss/variables";
  .header{
    position: fixed;
    width: 100vw;
    font-size: 0;
    padding-top: 36px;
    padding-bottom: 36px;
    background-color: $bg-color;
    z-index: 1000;
    .header__logoBlock{
      padding-left: 15px;
      padding-right: 15px;
      display: inline-block;
      img{
        height: 36px;
        width: 36px;
      }
      h1{
        display: inline-block;
        vertical-align: super;
        margin-left: 30px;
        text-transform: uppercase;
      }
    }
    .header__contentBlock{
      display: inline-block;
      padding-left: 15px;
      padding-right: 15px;
      img{
        margin-right: 30px;
        cursor: pointer;
        vertical-align: super;
        transform: scale(1);
        transition: transform .3s;
        &:hover{
          transform: scale(1.2);
        }
      }
    }
    button{
      position: absolute;
      right: 30px;
      @include button
    }
  }
  @media(max-width: 550px){
    .header{
      .header__logoBlock{
        h1{
          display: none;
        }
      }
    }
  }
</style>
