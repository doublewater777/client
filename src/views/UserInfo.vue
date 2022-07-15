<template>

  <div class="plane" v-if="userInfo.phone" >
    <h2>用户资料</h2>
    <br>
    <Row class="text-item">
         <i-col span="12">
            用户名:
        </i-col>
         <i-col span="12">
            
             <input type="text" v-model="userInfo.username"  style="width:auto">
        </i-col>
    </Row>
    <br>
    <Row class="text-item">
         <i-col span="12">
            
             输入电话:
        </i-col>
         <i-col span="12">
            <input type="text" v-model="userInfo.phone" style="width:auto">
        </i-col>
    </Row>
    <br>
    <Row class="text-item">
         <i-col span="12">
            输入年龄:
        </i-col>
         <i-col span="12">
            
             <input type="number" v-model.number="userInfo.age" icon="ios-clock-outline" style="width:auto">
        </i-col>
    </Row>
    <br>
     <Row class="text-item">
         <i-col span="12">
             选择性别:
        </i-col>
         <i-col span="12">
            <input name="sex" value="male" v-model="userInfo.sex" type="radio">男
            <input name="sex" value="female" v-model="userInfo.sex" type="radio">女
        </i-col>
       
    </Row>
    <Button @click="changeInfo" type="primary">修改信息</Button>
    <div>
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
    </div>
    
    <Button @click="changePwd" type="primary">修改密码</Button>

  </div>
  <div v-else>
    <Row class="text-item">
         <i-col span="12">
            用户名:
        </i-col>
         <i-col span="12">
            
             {{userInfo.username}}
        </i-col>
    </Row>
    <br>
     <Row class="text-item">
         <i-col span="12">
            昵称:
        </i-col>
         <i-col span="12">
            
             {{userInfo.nikename}}
        </i-col>
    </Row>
    <br>
    <br>
    <Row class="text-item">
         <i-col span="12">
            年龄:
        </i-col>
         <i-col span="12">
            
              {{userInfo.age}}
        </i-col>
    </Row>
    <br>
     <Row class="text-item">
         <i-col span="12">
             性别://邮箱
        </i-col>
         <i-col span="12">
           {{userInfo.sex}}
        </i-col>
       
    </Row>
    <br>
    留言:
    <input type="textarea" v-model="textMail">
    <Button @click="send">发送</Button>
  </div>

</template>

<script>
export default {
    name:'Register',
    data(){
        return{
            userInfo:{},
            password:'',
            repassword:'',
            textMail:''
        }
    },
    created(){
         console.log(this.$route.params)
        if('username' in this.$route.params){
            console.log(this.$route.params.username)
            this.$api.get('users/user/info/'+this.$route.params.username).then((res)=>{
                if(res.code === 0)
                {
                   console.log(res.data)
                    this.userInfo=res.data
                }
                else{
                    this.$Notice.open({

                        title:'错误',
                        desc:'用户信息获取错误',
                        duration:5
                    })
                    if(res.code===403){
                        this.$router.push({path:'/login'})
                    }
                }
            })
        }
    },
    methods:{
        changeInfo(){
            let data={
                username:this.userInfo.nikename,
                age:this.userInfo.age,
                phone:this.userInfo.phone,
                sex:this.userInfo.sex
            }
            this.submitChange(data)

        },
        changePwd(){
            if(this.password === this.repassword){
                let data={password:this.password}
                this.submitChange(data)
                this.exit()
            }else{
                this.$Notice.info({
                    title:'提示',
                    desc:'两次输入不一致'
                })
            }
        },
        submitChange(data){
            this.$api.post('users/user/changeInfo',data).then(res=>{
                if(res.code===0){
                    this.$Notice.info({
                        title:'提示',
                        desc:res.message
                    })
                }
            })
           
            },
         exit(){
            sessionStorage.removeItem('token')
            this.$router.push('/login').catch(err => err)
            this.$Notice.info({
                title:'成功退出,请重新登录',
                
            })
        },
        send(){
            let sendData={
                'text':this.textMail
            }
            this.$api.post('users/user/mail/'+this.userInfo.username,sendData).then(res=>{
                
                if(res.code===0){
                    this.textMail=''
                    this.$Notice.success({
                        title:'已发送留言',
                        desc:res.message
                    })
                   

                }else{
                    this.$Notice.info({
                        title:'提示',
                        desc:res.message
                    })
                }
            })
        
        }
        },
        
       

    
}
</script>

<style>

</style>