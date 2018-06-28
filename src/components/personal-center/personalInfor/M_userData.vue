<template>
  <div class="page-cell">
    <M-Header pageTitle="个人资料">
      <mt-button>保存</mt-button>
    </M-Header>
    <div class="container">
      <div>
        <mt-cell title="头像" is-link>
          <img :src="img" />
        </mt-cell>
        <mt-cell title="昵称" :value="nickname" is-link></mt-cell>
        <mt-cell title="真实姓名" :value="name" is-link></mt-cell>
      </div>
      <div>
        <mt-cell title="性别" :value="sex" is-link></mt-cell>
        <mt-cell title="年龄" :value="age" is-link></mt-cell>
        <mt-cell title="地区" is-link></mt-cell>
      </div>
      <div>
        <mt-cell title="新科元" is-link>
          <span style="color:red">{{score}}</span>
        </mt-cell>
        <mt-cell title="等级" is-link>
          <span class="level" >{{level}}</span>
          <span style="color:#ffa523">{{honor}}</span>
        </mt-cell>
      </div>
      <div>
        <mt-cell title="个性签名"  is-link>
          <span class="signature">{{signature}}</span>
        </mt-cell>
      </div>
      <mt-cell title="修改密码" is-link to="/personalInfor/changePsd"></mt-cell>
    </div>
    <M-BreadCrumb></M-BreadCrumb>
    <M-Footer></M-Footer>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    components: {
      'M-Header': resolve => require(['@/components/common/Header'], resolve),
      'M-Footer': resolve => require(['@/components/common/Footer'], resolve),
      'M-BreadCrumb': resolve => require(['@/components/common/BreadCrumb'], resolve)
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
        signature: '没有梦想的咸鱼'
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {}
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
  .level{
    color:white;
    background: #ffa523;
    margin-right:0.278rem
  }
  img {
    width: 3.75rem;
    height: 3.75rem;
    padding: 0.5rem;
    border-radius:50%;
  }
  .signature{
    display: inline-block;
    /*width: 3.5rem;*/
    width:112px;
  }
</style>
