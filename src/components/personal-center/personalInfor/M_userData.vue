<template>
  <div class="page-cell">
    <M-Header pageTitle="个人资料">
      <mt-button>保存</mt-button>
    </M-Header>
    <div class="container">
      <div>
        <mt-cell title="头像" is-link>
          <img :src="img"/>
        </mt-cell>
        <mt-cell title="昵称" :value="userMessage.NickName" is-link></mt-cell>
        <mt-cell title="真实姓名" :value="userMessage.Name" is-link></mt-cell>
      </div>
      <div>
        <mt-cell title="性别" :value="userMessage.Sex" is-link></mt-cell>
        <mt-cell title="年龄" :value="userMessage.Age" is-link></mt-cell>
        <mt-cell title="地区" :value="userMessage.AreaId" is-link></mt-cell>
      </div>
      <!--<div>-->
        <!--<mt-cell title="新科元" is-link>-->
          <!--<span style="color:red">{{score}}</span>-->
        <!--</mt-cell>-->
        <!--<mt-cell title="等级" is-link>-->
          <!--<span class="level">{{level}}</span>-->
          <!--<span style="color:#ffa523">{{honor}}</span>-->
        <!--</mt-cell>-->
      <!--</div>-->
      <div>
        <mt-cell title="个性签名" is-link>
          <span class="signature">{{signature}}</span>
        </mt-cell>
      </div>
      <div @click="setTelephoneNum(userMessage.Tel);">
        <mt-cell title="修改密码" is-link to="/personalInfor/changePsd" ></mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
  import {getUserMessage} from '@/API';
  import {mapMutations} from 'vuex';

  export default {
    name: 'Header',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve)
    },
    data() {
      return {
        img: '/static/mob-img/avator.png',
        nickname: '相思入骨',
        name: '高盛',
        sex: '男',
        age: '28',
        score: '7974',
        level: 'LV.9',
        honor: '学有所成',
        signature: '没有梦想的咸鱼',
        userMessage: ''
      };
    },
    created: function () {
      getUserMessage().then(data => {
        if (data.success === 'true') {
          console.log(data);
          this.userMessage = data.data;
          // sessionStorage.setItem('phoneNum', this.userMessage.Tel);
        } else {
          console.log('暂无数据');
        }
      });
    },
    mounted() {

    },
    methods: {
      ...mapMutations(['SET_TELEPHONE_NUM']),
      setTelephoneNum(telephoneNum) {
        console.log(1);
        this.SET_TELEPHONE_NUM({telephoneNum});
      }
    }
  };
</script>
<style scoped>
  .page-cell {
    color: #333;
    background: #f7f7f7;
  }

  .container > div {
    margin-bottom: 0.361rem;
  }

  .page-cell > div .mint-cell {
    border-bottom: 0.055rem solid #f7f7f7;
  }

  .level {
    color: white;
    background: #ffa523;
    margin-right: 0.278rem
  }

  img {
    width: 3.75rem;
    height: 3.75rem;
    padding: 0.5rem;
    border-radius: 50%;
  }

  .signature {
    display: inline-block;
    /*width: 3.5rem;*/
    width: 112px;
  }
</style>
