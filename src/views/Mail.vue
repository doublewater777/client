<template>
  <div class="article">
    <h3>与{{mail.toUser}}的对话</h3>
    <List>
        <ListItem v-for="item in mail.mail" :key="item.time">
            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" :title="Date(item.time)|date" :description="item.text">
            </ListItemMeta>
        </ListItem>
    </List>

  <div>
    <h3>对话:</h3>
    <input type="textarea" v-model="mailText" placeholder="请输入">
    <br>
    <Button @click="send">发送</Button>
  </div>
  </div>
  
</template>

<script>
export default {
    name:'Mail',
    data(){
        return{
            mail:{mail:[],toUser:''},
            mailText:'',
            id:''
        }
    },
    created(){
        if('id' in this.$route.params){
            let id = this.$route.params.id
            console.log(id);
            this.getMail(id)
        }
    },
    methods:{
        getMail(id){
            this.$api.get('users/user/mailGetter/'+ id).then((res)=>{
                if(res.code===0){
                    this.mail=res.data
                    this.id=id
                }
                else{
                    this.$Notice.info({
                        title:'提示',
                        desc:res.message
                    })
                }
            })
        },
        send(){
            let sendData={
                text:this.mailText
            }
            this.$api.post('users/user/mail/'+this.mail.toUser,sendData).then(res=>{
                if(res.code===0){
                    this.mailText=''
                    this.getMail(this.id)
                }else{
                    this.$Notice.info({
                        title:'提示',
                        desc:res.message
                    })
                }
            })
        }
    }
}
</script>

<style>

</style>