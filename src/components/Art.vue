<template>
  <div>
    <div class="container">
      <h2 slot="title">{{ title }}</h2>

      <article class="article">
        <div v-for="item in list" :key="item.id" class="item1">
          <router-link :to="'/article/' + item.id">
            <a href="" class="flex">
              <div class="article__image"></div>
              <div class="flex vertical-flex">
                <h3 class="article__title">{{ item.title }}</h3>
                <p class="article__description">
                  文章简介,不过由于后端接口未实现这个功能,我之后会添加上
                </p>
                <div class="article__metadata">
                  <span>阅读更多</span>
                </div>
              </div>
            </a>
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
}
.article {
  padding: 0 0 30px 0;
  margin: 0 0 30px 0;
  border-bottom: 1px solid #ddd;
}
.article__image {
  width: 160px;
  height: 120px;
  margin: 0 15px 0 0;
  background-image: url("../assets/orange.jpg");
  background-color: #ddd;
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
  letter-spacing: 0.5px;
}
.article__metadata {
  font-size: 14px;
  align-self: flex-end;
}

.flex {
  display: flex;
  flex-wrap: nowrap;
}
.vertical-flex {
  flex-flow: column;
}
</style>