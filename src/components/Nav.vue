<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <div class="main">
                <Icon type="md-book" />
                <router-link to="/">{{index}}</router-link>

            </div>
        </MenuItem>
        <MenuItem v-for=" item in menu" :name="item.name" :key="item.name">
            <router-link to="item.src">{{item.name}}</router-link>
        </MenuItem>
        <MenuItem name="2">
            <Dropdown v-if="userBtn">
                <a href="javascript:void(0)">
                    用户:{{username}}
                    <Icon type="arrow-down"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>
                        <div @click="goUrl('/userInfo/'+username)">个人信息</div>
                    </Dropdown-item>
                    <Dropdown-item>
                        <div @click="goUrl('/mail/')">我的私信</div>
                    </Dropdown-item>
                    <Dropdown-item>
                        <div @click="goUrl('/collection/')">我的收藏</div>
                    </Dropdown-item>
                    <Dropdown-item>
                        <div @click="exit">退出</div>
                    </Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
            <router-link v-if="!userBtn" :to="{path:'/login'}">登录</router-link>
        </MenuItem>
         <MenuItem name="3" v-if="username==='admin'">
            <div class="main">
                
                <router-link :to="{path:'/admin'}">访问Admin界面</router-link>

            </div>
        </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
    name:'Nav',
    data(){
        return{
            menu:[],
            index:'Mysite',
            theme1:'light',
            userBtn:false,
            username:''
        }
    },
    created(){
        //获取导航惨淡
        this.$api.get('getNavMenu').then((res)=>{
            console.log(res.data);
            
            this.menu = res.data
        }),
        setInterval(()=>{
            if(sessionStorage.getItem('token')){
                this.userBtn=true
                this.username=sessionStorage.getItem('username')
            }
            else{
                this.userBtn=false
            }
        },1000)
        
    },
    updated(){

    },
    methods:{
        goUrl(url){
           
          
            this.$router.push({path:url})
            
            
           
        },
        exit(){
            sessionStorage.removeItem('token')
            this.$Notice.success({
                title:'提示',
                desc:'已成功退出',
                duration:1
            })
            this.$router.push({path:'/login'})
        }
    }
}
</script>

<style scoped>
    .main{
        font-weight: 600;
    }
    a{
        color:#2f2f2f
    }
</style>