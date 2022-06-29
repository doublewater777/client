<template>
  
    <div class="plane">
    <h2>注册</h2>
    <br>
    <Row class="text-item">
        <i-col span="12">
            输入用户名:
        </i-col>
        <i-col span="12">
            <input v-model="username"  style="width:auto">
        </i-col>
        
        
    </Row>
    <br>
    <Row class="text-item">

         <i-col span="12">
            输入密码:
        </i-col>
         <i-col span="12">
            <input type="password" v-model="password"  style="width:auto">
        </i-col>
        
    </Row>
    <br>
     <Row class="text-item">
         <i-col span="12">
            重新输入密码:
        </i-col>
         <i-col span="12">
            <input type="password" v-model="repassword" style="width:auto">
        </i-col>
        
    </Row>
    <br>
    <Row class="text-item">
         <i-col span="12">
            输入用户昵称:
        </i-col>
         <i-col span="12">
            
             <input type="text" v-model="nickname"  style="width:auto">
        </i-col>
    </Row>
    <br>
    <Row class="text-item">
         <i-col span="12">
            
             输入电话:
        </i-col>
         <i-col span="12">
            <input type="text" v-model="phone" style="width:auto">
        </i-col>
    </Row>
    <br>
    <Row class="text-item">
         <i-col span="12">
            输入年龄:
        </i-col>
         <i-col span="12">
            
             <input type="number" v-model.number="age" icon="ios-clock-outline" style="width:auto">
        </i-col>
    </Row>
    <br>
     <Row class="text-item">
         <i-col span="12">
             选择性别:
        </i-col>
         <i-col span="12">
            <input name="sex" value="male" v-model="sex" type="radio">男
            <input name="sex" value="female" v-model="sex" type="radio">女
        </i-col>
       
    </Row>
    <Button @click="register" type="primary">注册</Button>

  </div>
  
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      sex: "",
      username: "",
      password: "",
      repassword: "",
      age: 0,
      nickname: "",
      phone: "",
    };
  },
  methods: {
    register() {
      if (this.username && this.password && this.repassword) {
        if (this.password === this.repassword) {
          let data = {
            phone: this.phone ? this.phone : "未知",
            sex: this.sex ? this.sex : "未知",
            age: this.age ? this.age : "未知",
            nickname: this.nickname ? this.nickname : "未知",
            username: this.username,
            password: this.password,
          };
          this.$api.post("users/register", data).then((res) => {
            this.$Notice.info({
              title: "提示",
              desc: res.message,
            });
            if (res.code === 0) {
              sessionStorage.setItem("token", res.data.token);
              this.$router.push({ path: "/login" });
            }
          });
        } else {
          this.$Notice.info({
            title: "错误",
            desc: "内容输入错误,密码输入错误",
            deration: 5,
          });
        }
      } else {
        this.$Notice.info({
          title: "错误",
          desc: "内容输入错误,请输入必要性信息",
          duration: 5,
        });
      }
    },
  },
};
</script>

<style scoped>
.plane {
  padding: 5vw 20vw;
  margin-bottom: -5vw;
}
.text-item {
  padding-top: 10px;
}
Button {
  margin-top: 10px;
}
</style>