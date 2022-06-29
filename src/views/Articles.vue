<template>
  <div>
    <div class="article-list">
        <row type="flex" justify="space-around" class="code-row-bg">
            <i-col span="24">
                <article-list :list="list" :title="listTitle"></article-list>
            </i-col>
        </row>
    </div>
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue'
export default {
 
    name:'Home',
    data(){
        return{
            list:[],
            listTitle:'所有文章'
        }
    },
     components: { ArticleList },
    created() {
      this.$api.get('getNewArticle').then((res)=>{
        let tData=[]
        res.data.map((item)=>{
            if(item.id!==0){
                tData.push(item)
            }
        })
        this.list=tData
      })  
    },
}
</script>

<style>

</style>