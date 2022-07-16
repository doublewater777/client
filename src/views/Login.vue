<template>
  <div class="form">
    <ul class="tab-group">
      <li class="tab active"><router-link to="/login">登录</router-link></li>
      <li class="tab"><router-link to="/register">注册</router-link></li>
    </ul>

    <div class="tab-content">
       <div id="login">
        <h1>欢迎登录!</h1>

        <div class="field-wrap">
          <!-- <label> <span class="req">*</span> </label> -->
          <input type="text" required autocomplete="off" v-model.trim="username" placeholder="用户名*"/>
        </div>

        <div class="field-wrap">
          <!-- <label> Password<span class="req">*</span> </label> -->
          <input type="password" required autocomplete="off" v-model.trim="password" placeholder="密码*" />
        </div>

        <button class="button button-block" @click="login">登录</button>
      </div>
      <div id="signup">
        <h1>注册</h1>

        <div class="top-row">
          <div class="field-wrap">
            <label> 用户名<span class="req">*</span> </label>
            <input type="text" required autocomplete="off" v-model.trim="username" />
          </div>

          <div class="field-wrap">
            <label> 昵称<span class="req">*</span> </label>
            <input type="text" required autocomplete="off" v-model="nickname" />
          </div>
        </div>

        <div class="field-wrap">
          <label> 电话号码<span class="req">*</span> </label>
          <input type="number" required autocomplete="off" v-model="phone" />
        </div>

        <div class="field-wrap">
          <label> 密码<span class="req">*</span> </label>
          <input
            type="password"
            required
            autocomplete="off"
            v-model="password"
          />
        </div>
        <div class="field-wrap">
          <label> 重复密码<span class="req">*</span> </label>
          <input
            type="password"
            required
            autocomplete="off"
            v-model="repassword"
          />
        </div>
        <button type="submit" class="button button-block" @click="register">注册</button>
      </div>

     
    </div>
    <!-- tab-content -->
  </div>
</template>
<script src="https://wow.techbrood.com/libs/jquery/jquery-1.11.1.min.js"></script>
<script>
export default {
  name: "login",
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
    login() {
      let data = { username: this.username, password: this.password };
      this.$api.post("users/login", data).then((res) => {
        this.$Notice.info({
          title: "提示",
          desc: res.message,
        });
        if (res.code === 0) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("username", this.username);
          this.$router.push({ path: "/" });
        } else {
          sessionStorage.removeItem("token");
        }
      });
    },
    // register(){
    //   this.$router.push({path:'register'})
    // }
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
*,
*:before,
*:after {
  box-sizing: border-box;
}
html {
  overflow-y: scroll;
}
body {
  background: #c1bdba;
  font-family: "Titillium Web", sans-serif;
}
a {
  text-decoration: none;
  color: #1ab188;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
}
a:hover {
  color: #179b77;
}
.form {
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}
.tab-group {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}
.tab-group:after {
  content: "";
  display: table;
  clear: both;
}
.tab-group li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  background: rgba(160, 179, 176, 0.25);
  color: #a0b3b0;
  font-size: 20px;
  float: left;
  width: 50%;
  text-align: center;
  cursor: pointer;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
}
.tab-group li a:hover {
  background: #179b77;
  color: #ffffff;
}
.tab-group .active a {
  background: #1ab188;
  color: #ffffff;
}
.tab-content > div:last-child {
  display: none;
}
h1 {
  text-align: center;
  color: #ffffff;
  font-weight: 300;
  margin: 0 0 40px;
}
label {
  position: absolute;
  -webkit-transform: translateY(6px);
  transform: translateY(6px);
  left: 13px;
  color: rgba(255, 255, 255, 0.5);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 22px;
}
label .req {
  margin: 2px;
  color: #1ab188;
}
label.active {
  -webkit-transform: translateY(50px);
  transform: translateY(50px);
  left: 2px;
  font-size: 14px;
}
label.active .req {
  opacity: 0;
}
label.highlight {
  color: #ffffff;
}
input,
textarea {
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #a0b3b0;
  color: #ffffff;
  border-radius: 0;
  -webkit-transition: border-color 0.25s ease, box-shadow 0.25s ease;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
input:focus,
textarea:focus {
  outline: 0;
  border-color: #1ab188;
}
textarea {
  border: 2px solid #a0b3b0;
  resize: vertical;
}
.field-wrap {
  position: relative;
  margin-bottom: 40px;
}
.top-row:after {
  content: "";
  display: table;
  clear: both;
}
.top-row > div {
  float: left;
  width: 48%;
  margin-right: 4%;
}
.top-row > div:last-child {
  margin: 0;
}
.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #1ab188;
  color: #ffffff;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}
.button:hover,
.button:focus {
  background: #179b77;
}
.button-block {
  display: block;
  width: 100%;
}
.forgot {
  margin-top: -20px;
  text-align: right;
}
</style>