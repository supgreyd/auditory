<template>
  <div class="sidebar" :class="{'sidebar__active' : sideBarOpen}">
    <ul>
      <li v-for="(elem, key) in menu" @click="setMenuActive(key)" :class="{'sidebar__link_active' : elem.active}">
        <router-link :to="elem.link">
          <img src="../../assets/images/icon_info.png" alt="">
          <span :to="elem.link">{{ elem.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "sidebar",
      data: () => ({
        menu: [
          {
            name: 'Главное Меню',
            active: false,
            link: '/emptyPage'
          },
          {
            name: 'Виджеты',
            active: false,
            link: '/emptyPage'
          },
          {
            name: 'Диалоги',
            active: false,
            link: '/emptyPage'
          },
          {
            name: 'Аудитория',
            active: true,
            link: '/'
          }
        ]
      }),
      props: {
        sideBarOpen: {
          type: Boolean,
          default: false
        }
      },
      methods: {
          setMenuActive(n){
            this.menu.forEach(item => {
              item.active = false
            })
            this.menu[n].active = true
            this.$router.push({path: this.menu[n].link})
          }
      },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";
  .sidebar{
    position: fixed;
    z-index: 1000;
    width: 50px;
    top: 112px;
    bottom: 0;
    background-color: $sidebar-color;
    overflow: hidden;
    white-space: nowrap;
    transition: all .3s;
    &:hover{
      width: 265px;
      li{
        padding-left: 25px;
      }
    }
    a{
      text-decoration: none;
    }
    li{
      padding: 14px 15px;
      transition: all.3s;
      cursor: pointer;
      &:hover{
        background-color: #161c1f;
      }
      img{
        height: 16px;
        width: 16px;
        transition: all .3s;
        transform: translateX(0);
      }
      span{
        padding-left: 25px;
        color: white;
        font-size: .875rem;
      }
    }
    .sidebar__link_active{
      background: #161c1f;
      span{
        color: $accent-color;
      }
    }
  }
  .sidebar__active{
    width: 265px;
    li{
      padding-left: 25px;
    }
  }
</style>
