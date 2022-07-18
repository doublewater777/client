<template>
  
  <div>
    <div class="container">
      <h3 slot="title" class="title">{{ title }}</h3>

      <article class="article">
        <div v-for="item in list" :key="item.id">
          <router-link :to="'/article/' + item.id" class="flex1">
            
              <div class="article__image">
                <img src="../assets/orange.jpg" alt="">
              </div>
              <div class="flex vertical-flex">
                <h3 class="article__title">{{ item.title }}</h3>
                <p class="article__description">
                  文章简介,不过由于后端接口未实现这个功能,我会想办法尽快完成
                </p>
                
              </div>
            
          </router-link>
        </div>
      </article>
    </div>
  </div>

</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {};
  },
  created() {},
  props: {
    list: Array,
    title: String,
  },
};
</script>

<style scoped>

.container {
  width: 768px;
  margin: 0 auto;
  margin-top: 30px;
 
}
.container>h2{
  font-family: "Oswald", sans-serif;
    text-align: left;
    margin: 30px;
}
.article {
  padding: 10px 0 30px 0;
  margin: 0px 0 30px 0;
  border-bottom: 1px solid #ddd;
}

.article__image {
  width: 160px;
  height: 120px;
  margin: 0 15px 0 0;
  background-image: url("../assets/orange.jpg");
  /* background-color: #ddd; */
  flex-shrink: 0;
}
.article__title {
  margin: 0;
  font-size: 18px;
}
.article__description {
  margin: 5px 0;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: .5px;
  color:  rgb(103, 103, 138);

}
.article__metadata {
  font-size: 14px;
  align-self: flex-end;
}

.flex1 {
  display: flex;
  flex-wrap: nowrap;
  margin: 30px 0 0px 0;
  padding: 0px 0 30px 0;
  border-bottom: 1px solid #ddd;

}
.flex1 :last-child{
  margin: 0;
}
.vertical-flex {
  flex-flow: column;
}
img{
  width: 160px;
  height: 120px;
}

</style>