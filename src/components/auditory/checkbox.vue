<template>
  <label class="checkbox">
    <input type="checkbox" />
    <div class="checkbox__text"></div>
  </label>
</template>

<script>
  export default {
    name: "checkbox"
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";
  .checkbox input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .checkbox__text {
    position: relative;
    cursor: pointer;
    &:before{
      content: '';
      position: absolute;
      top: -12px;
      left: 0;
      width: 14px;
      height: 14px;
      background: #CDD1DA;
      transition: .3s;
      border: 1px solid transparent;
    }
    &:after{
      content: '';
      position: absolute;
      top: -8px;
      left: 4px;
      width: 8px;
      height: 8px;
      background: transparent;
      transition: .3s;
    }
    &:hover:before{
      border-color: $accent-color
    }
  }
  .checkbox input:checked + .checkbox__text:before {

  }
  .checkbox input:checked + .checkbox__text:after {
    background-color: $accent-color;
  }
</style>
