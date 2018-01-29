<template>
  <div class="container-fluid">
    <div class="row">
      <App-filter></App-filter>
      <Users></Users>
      <User-info></User-info>
    </div>
  </div>
</template>

<script>
  import AppFilter from './AppFilter'
  import Users from './users'
  import UserInfo from './userInfo'
    export default {
    name: "index",
    components: {
      AppFilter,
      Users,
      UserInfo
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/variables.scss";
  .blockHead{
    background-color: $bg-color !important;
    padding: 10px 15px;
    font-size: 1rem;
    color: $text-grey;
    font-weight: 600;
    margin: 0 -15px;
  }
  .bottomBlock {
    position: absolute;
    text-align: center;
    bottom: 58px;
    width: calc(100% - 30px);
  }
  @media(max-width: 767px){
    .bottomBlock{
      position: relative;
      bottom: 0;
      padding: 15px 0;
      width: 100%;
    }
    .hideComp{
      display: none;
    }
  }
</style>
