<template>
  <div class="col-md-3 tabletFilter blockHeight">
    <div class="filters">
      <div class="blockHead">
        <span>Пользователи</span><span>{{ filteredUsers }}<img src="../../assets/images/icon_torso.png" alt=""></span>
      </div>
      <div class="filters__params">
        <span v-for="(elem, key) in newFilters">
          <button class="filters__params_add" v-if="elem.canAdd">+</button>{{ elem.value }}
          <button v-if="elem.canClose" @click="filterRemove(key)" class="filters__params_close">x</button>
        </span>
      </div>
      <div class="filters__addFilter"
           :class="{'filters__addFilter_active' : addFilter}">
        <div @click="addFilter = !addFilter"><img src="../../assets/images/add.png" alt=""><span>Добавить еще фильтр</span></div>
        <ul class="addFilter__menu"
            :class="{'addFilter__menu_active' : addFilter}">
          <li v-for="elem in filterMenu" @click="filterAdd(elem)">{{ elem.value }}
            <img v-if="elem.subMenu" src="../../assets/images/arrow.png" alt="">
            <ul class="addFilter__menu">
              <li v-for="item in elem.subMenu" @click="filterAdd(elem, item)">{{ item.value }}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="bottomBlock">
        <input type="text" placeholder="Добавит название сегмента">
        <button>Сохранить сегмент</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AppFilter",
      data: () => ({
        filteredUsers: 201,
        addFilter: false,
        filters: [
          {
            value: 'Тестик',
            canClose: true,
            canAdd: false
          },
          {
            value: 'Прошел опрос',
            canClose: false,
            canAdd: false
          },
          {
            value: 'Yandex реклама',
            canClose: false,
            canAdd: true
          },
          {
            value: 'Купил 1 раз',
            canClose: false,
            canAdd: false
          }
        ],
        filterMenu: [
          {
            value: 'Прошли опрос',
            subMenu: false
          },
          {
            value: 'Оставили телефон',
            subMenu: false
          },
          {
            value: 'Выбрали ответ',
            subMenu: [{value: 'Да'}, {value:'Нет'}]
          },          {
            value: 'Есть дети',
            subMenu: [{value:'Нет'}, {value:'1'}, {value:'2'}, {value:'Больше 2х'}]
          },
          {
            value: 'Любят цветы',
            subMenu: [{value:'Да'}, {value:'Нет'}, {value:'Гвоздики'}, {value:'Розы'}]
          }
        ]
      }),
      computed:{
        newFilters(){
          let a = this.filters
          return a
        }
      },
      methods:{
          filterAdd(n, s){
            if(!n.subMenu){
              this.newFilters.push({value: n.value, canClose: true})
            }
            else{
              this.newFilters.push({value: n.value + ' ' + s.value, canClose: true})
            }
          },
        filterRemove(n){
          this.newFilters.splice(n, 1)
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/variables';
  .filters{
    .blockHead{
      span:nth-child(2){
        position: absolute;
        right: 15px;
      }
      img{
        padding-left: 10px;
      }
    }
    .filters__params{
      display: inline-block;
      span{
        display: inline-block;
        padding: 2px 10px;
        font-size: .75rem;
        background-color: #fff;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: 6px;
    }
      button{
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
      }
      .filters__params_close{
        margin-left: 20px;
        z-index: 1;
      }
      .filters__params_add{
        z-index: 1;
        margin-right: 5px;
      }
    }
    .filters__addFilter{
      position: relative;
      margin-top: 60px;
      cursor: pointer;
      border-radius: 7px;
      background: transparent;
      transition: all .3s;
      img{
        position: absolute;
      }
      span{
        margin-left: 30px;
        padding: 10px;
        display: block;
      }
      .addFilter__menu{
        width: 225px;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(100%);
        background-color: $bg-color;
        z-index: 10;
        transition: all .3s;
        max-height: 0;
        overflow: hidden;
        border-radius: 7px;
        li{
          position: relative;
          padding: 10px;
          border-radius: 7px;
          transition: all .3s;
          &:hover{
            background: rgba($accent-color, 0.5);
            img{
              transform: rotate(-90deg);
            }
            ul{
              max-height: 300px;
            }
          }
          img{
            position: absolute;
            right: 10px;
            top: 15px;
            transition: all .3s;
          }
          ul{
            max-height: 0;
          }
        }
      }
      .addFilter__menu_active{
       max-height: 300px;
        overflow: unset;
      }
    }
    .filters__addFilter_active{
      background: rgba($accent-color, 0.5);
    }
    .bottomBlock{
      input{
        border: none;
        border-radius: 7px;
        padding: 8px 10px;
        margin-bottom: 15px;
        width: 100%;
        outline: none;
        box-sizing: border-box;
      }
      button{
        @include button
      }
    }
  }
  @media (max-width: 1023px) {
    .tabletFilter{
      position: absolute;
      transform: translateX(-100%);
      width: 290px;
    }
    .filters .filters__addFilter .addFilter__menu{
      transform: translate(0, 0);
      left: 0;
      top: 38px;
      width: 260px;
    }
  }
</style>
