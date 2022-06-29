<template>
  <div class="plane">
    <h2>登录</h2>
    <br>
    <row>
        <input v-model.trim="username" prefix="ios-contack" placeholder="请输入用户名" style="width:auto">
    </row>
    <br>
    <row>
        <input type="password" v-model="password" icon="ios-clock-outline" placeholder="输入密码" style="width:auto">
    </row>
    <br>
    <Button @click="login" type="primary">登录</Button>
    <Button @click="register">注册</Button>

  </div>
</template>

<script>
export default {
    name:'login',
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      login(){
        let data={"username":this.username,"password":this.password}
        this.$api.post('users/login',data).then(res=>{
          this.$Notice.info({
            title:'提示',
            desc:res.message
          });
          if(res.code===0){
              sessionStorage.setItem('token',res.data.token)
              sessionStorage.setItem('username',this.username)
              this.$router.push({path:'/'})
          }else{
            sessionStorage.removeItem('token')
          }
        })
      },
      register(){
        this.$router.push({path:'register'})
      }
    }
}
</script>

<style scoped>
  .plane{
   
    padding:10vw 20vw;
    
  }
  
  .ivu-row{
      justify-content: center;
  }
</style>