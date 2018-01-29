<template>
  <div class="col-md-3 col-sm-4 col-xs-12 pl_1">
    <div class="blockHeight bg-white">
      <div class="userInfo mobileHeight" :class="{'mobileHeight_active' : mobileInfo}">
        <div class="blockHead" :class="{'hide' : mobileInfo}">
          <span>Клиент</span>
        </div>
        <div class="userInfo__info">
          <div class="userInfo__info_avatar">
            <span>{{user[0].name[0]}}</span>
          </div>
          <div class="userInfo__info_name">
              {{ user[0].name + ' ' + user[0].surname}}
            <span>Последняя активность: {{ user[0].activity }}</span>
          </div>
        </div>
        <div class="userInfo__contacts">
          <ul>
            <li v-for="contact in user[0].contacts">
              <div class="userInfo__icons">
                <img :src="contact.icon" alt="">
              </div>
              <span>{{contact.value}}</span>
            </li>
          </ul>
        </div>
        <div class="userInfo__socials">
          <p class="userInfo__socials_title">Соц. Дем.</p>
          <ul>
            <li v-for="contact in user[0].socials">
              <div class="userInfo__icons">
                <img :src="contact.icon" alt="">
              </div>
              <span>{{contact.value}}</span>
            </li>
          </ul>
        </div>
        <div class="bottomBlock">
          <button>Написать сообщение</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "user-info",
      data: () => ({
        user: [
          {
            id: '1',
            activity: '3h',
            avatar: '',
            surname: 'Васильев',
            name: 'Вася',
            contacts: {
                location: {
                  value: 'Москва, Россия',
                  icon: require('../../assets/images/icon_location.png')
                },
                phone: {
                  value: '+790258428383',
                  icon: require('../../assets/images/icon_phone.png')
                },
                email: {
                  value: 'zhegin@mail.com',
                  icon: require('../../assets/images/icon_mail.png')
                },
                active_telegram: {
                  value: 'Активирован',
                  icon: require('../../assets/images/icon_telegram.png')
                },
                active_mesage:{
                  value: 'Активирован',
                  icon: require('../../assets/images/icon_messager.png')
                }
            },
            socials: {
              sex: {
                value: 'Мужчина',
                icon: require('../../assets/images/icon_sex.png')
              },
              age: {
                value: '35',
                icon: require('../../assets/images/icon_age.png')
              },
              married: {
                value: 'Женат',
                icon: require('../../assets/images/icon_married.png')
              },
              kids: {
                value: '2 дтей 4; 16',
                icon: require('../../assets/images/icon_children.png')
              },
              grade: {
                value: 'Среднее специальное',
                icon: require('../../assets/images/icon_grade.png')
              },
              sellary: {
                value: '20 000р. в год',
                icon: require('../../assets/images/icon_cash.png')
              }
            }
          },
          {
            id: '2',
            activity: '3h',
            avatar: '',
            surname: 'Леонидович',
            name: 'Виталий',
            contacts: {
              location: {
                value: 'Москва, Россия',
                icon: require('../../assets/images/icon_location.png')
              },
              phone: {
                value: '+790258428383',
                icon: require('../../assets/images/icon_phone.png')
              },
              email: {
                value: 'zhegin@mail.com',
                icon: require('../../assets/images/icon_mail.png')
              },
              active_telegram: {
                value: 'Активирован',
                icon: require('../../assets/images/icon_telegram.png')
              },
              active_mesage:{
                value: 'Активирован',
                icon: require('../../assets/images/icon_messager.png')
              }
            },
            socials: {
              sex: {
                value: 'Мужчина',
                icon: require('../../assets/images/icon_sex.png')
              },
              age: {
                value: '35',
                icon: require('../../assets/images/icon_age.png')
              },
              married: {
                value: 'Женат',
                icon: require('../../assets/images/icon_married.png')
              },
              kids: {
                value: '2 дтей 4; 16',
                icon: require('../../assets/images/icon_children.png')
              },
              grade: {
                value: 'Среднее специальное',
                icon: require('../../assets/images/icon_grade.png')
              },
              sellary: {
                value: '20 000р. в год',
                icon: require('../../assets/images/icon_cash.png')
              }
            }
          }
    ]
      }),
      props:{
        mobileInfo: {
          type: Boolean,
          default: false
        },
        userId: {
          type: String,
          default: ''
        }
      }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";
  .userInfo{
    .userInfo__info{
      padding: 15px 0;
      .userInfo__info_avatar{
        position: absolute;
        display: inline-block;
        border-radius: 50%;
        height: 34px;
        width: 34px;
        background-color: $accent-color;
        span{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .userInfo__info_name{
        display: inline-block;
        vertical-align: top;
        padding-left: 44px;
        font-weight: bold;
        span{
          line-height: 16px;
          display: block;
          font-weight: normal;
          color: $text-grey;
          font-size: .625rem;
        }
      }
    }
    .userInfo__contacts,
    .userInfo__socials{
      font-size: .75rem;
      color: $text-grey;
      ul{
        padding: 8px 0;
        li{
          height: 20px;
          margin: 8px 0;
          position: relative;
          .userInfo__icons{
            height: 20px;
            width: 20px;
            position: absolute;
            top: -6px;
            img{
              max-height: 20px;
              position: absolute;
              left: 10px;
              top: 4px;
            }
          }
          span{
            padding-left: 50px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            display: block;
          }
        }
      }
    }
    .bottomBlock{
      button{
        @include button
      }
    }
  }
  @media(max-width: 767px) {
    .blockHeight{
      margin-bottom: 0;
    }
    .mobileHeight{
      max-height: 0;
      transition: all .3s;
      overflow: hidden;
    }
    .mobileHeight_active{
      max-height: 530px;
    }
  }
</style>
