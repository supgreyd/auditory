<template>
  <div class="col-md-6 col-sm-8 col-xs-12 pr_1">
    <div class="blockHeight bg-white">
      <div class="users">
        <div class="blockHead">
          <div class="users__col users__col_checkbox">
            <Checkbox></Checkbox>
          </div>
          <div class="users__col users__col_name">
            <span>Имя пользователя</span>
          </div>
          <div class="users__col users__col_params">
            <span>Параметры</span>
          </div>
        </div>
        <div class="users__usersBlock" v-for="user in users">
          <div class="users__usersBlock_name" @click="isMobileInfo = !isMobileInfo">
            <div class="users__col users__col_checkbox">
              <Checkbox></Checkbox>
            </div>
            <div class="users__col users__col_name">
              <span>{{ user.name + ' ' + user.surname}}</span>
            </div>
          </div>
          <div class="users__col users__col_params">
            <User-params :data="user.params"></User-params>
          </div>
          <div class="hideInfo">
            <User-info :mobileInfo="isMobileInfo" :userId="user.id"></User-info>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserParams from './userParams'
  import Checkbox from './checkbox'
  import UserInfo from './userInfo'

    export default {
        name: "users",
      data: () => ({
        isMobileInfo: false,
        users: [
          {
            id: '1',
            name: 'Вася',
            surname: 'Васильев',
            params: {
              share: {
                value: true,
                text: 'Поделился',
                active: false
              },
              asked: {
                value: true,
                text: 'Прошел опрос',
                active: false
              },
              dissatisfied: {
                value: true,
                text: 'Недоволен',
                active: false
              }
            }
          },
          {
            id: '2',
            name: 'Виталий',
            surname: 'Леонидович',
            params: {
              share: {
                value: true,
                text: 'Поделился',
                active: false
              },
              asked: {
                value: true,
                text: 'Прошел опрос',
                active: false
              },
              dissatisfied: {
                value: false,
                text: 'Недоволен',
                active: false
              }
            }
          }
        ]
      }),
      components: {
          UserParams,
          Checkbox,
          UserInfo
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  .users{
    .users__col{
      display: inline-block;
    }
    .users__col_checkbox{
      padding-right: 15px;
    }
    .users__col_name,
    .users__col_params{
      padding: 0 10px;
    }
    .users__col_name{
      width: 170px;
    }
    .users__usersBlock{
      padding: 12px 15px;
      margin: 0 -15px;
      border-bottom: 1px solid $bg-color;
      font-size: .75em;
      position: relative;
      .users__usersBlock_name{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
     }
      .users__col_params{
        margin-left: 190px;
      }
    }
  }
  .hideInfo{
    display: none;
  }
  @media(max-width: 767px) {
    .users{
      .users__usersBlock{
        display: inline-block;
        .users__usersBlock_name{
          top: unset;
          transform: translateY(0);
        }
      }
    }
    .hideInfo{
      display: block;
    }
  }
  @media(max-width: 415px){
    .users{
      .users__col_name{
        width: 75px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: bottom;
      }
    }
    .users .users__usersBlock .users__col_params{
      margin-left: 100px;
    }
  }
</style>
