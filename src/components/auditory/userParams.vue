<template>
  <div>
    <div class="users__params" v-for="(elem, key) in data">
      <button v-if="elem.value" :class="{'bg-orange' : key === 'asked', 'bg-red' : key === 'dissatisfied', 'bg-blue' : key === 'share'}">{{elem.text}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user-params",
    props: {
      data: {
        type: Object,
        function(){
          return {}
        }
    },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .users__params{
    display: inline-block;
    padding-right: 3px;
    padding-bottom: 3px;
    button{
      outline: none;
      border-radius: 7px;
      padding: 2px 10px;
      font-size: .75rem;
      cursor: pointer;
      background-color: $green-color;
      transition: all .3s;
      position: relative;
      border: 1px solid transparent;
      &:hover{
        border-color: black;
      }
    }
    .bg-orange{
      background-color: $orange-color;
    }
    .bg-red{
      background-color: $red-color;
    }
    .bg-blue{
      background-color: $accent-color;
    }
  }
</style>
