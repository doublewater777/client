<template>
  <div class="main1">
    <div class="article-list">
        <row type="flex" justify="space-around">
            <i-col>
                <article-list :list="list" :title="listTitle" span="8"></article-list>
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
            listTitle:'最新文章'
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

<style scoped>
.main1{
  background-size: 100% 36%;
  background-position: bottom;
  background-repeat: no-repeat;
   /* background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 583 95'%3e%3cpolygon points='0,42 583,95 0,95' opacity='0.3' fill='black'/%3e%3cpolygon points='0,42 583,95 583,0 0,95' opacity='0.2' fill='gray'/%3e%3c/svg%3e"); */
   background-blend-mode: multiply;
   /* background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c); */
   background: linear-gradient(0.25turn, #3f87a6,#FFE4B5, #ebf8e1, #f69d3c);

}
</style>