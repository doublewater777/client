<template>
  <div class="article">
    <div class="type">
        <List item-layout="vertical">
            <ListItem v-for="mail in mails" :key="mail.m_id">
                <router-link :to="/mailGetter/+mail.m_id">
                <ListItemMeta title="私信" :description="'来自:'+mail.users[1]">
                </ListItemMeta>
                </router-link>
            </ListItem>

         </List>   
    </div>
  </div>
</template>

<script>
export default {
    name:'Mails',
    components:{},
    data(){
        return{
            mails:[]
        }
    },
    created(){
        this.$api.get('users/user/mailsGet').then((res=>{
            if(res.code === 0){
                this.mails=res.data
            }else{
                this.info(res.message)
            }
        }))
    },
    methods:{
        info(text){
            this.$Notice.info({
                title:'提示',
                desc:text
            })
        },
        //获取所有评论
        getArticleTalk(id){
            this.$api.get('/getArticleTalk/'+id).then(res=>{
                this.articleTalk=res.data
            })
        }
    }
}
</script>

<style>

</style>