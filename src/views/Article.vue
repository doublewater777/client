<template>
  <div class="article">
    <!-- 面包屑分类导航 -->
    <div class="type">
      <Breadcrumb>
        <BreadcrumbItem to="/">
          <Icon type="ios-home-outline"></Icon>
          主页
        </BreadcrumbItem>
        <BreadcrumbItem to="/articles">
          <Icon type="logo-buffer"></Icon>
          全部文章
        </BreadcrumbItem>
        <BreadcrumbItem
          :to="{ path: '/articleType', query: { type: article.type } }"
        >
          <Icon type="ios-cafe"></Icon>
          {{ article.type }}
        </BreadcrumbItem>
        <BreadcrumbItem :to="{ path: '/userInfo/' + article.writer }">
          <Icon type="ios-body"></Icon>
          {{ article.writer }}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>

    <!-- 文章详情 -->
    <div class="detail">
      <h2>{{ article.title }}</h2>
      <p class="article-p">创作时间:{{ Date(article.time) }}</p>
      <p class="article-p">阅读:{{ article.view }}</p>
      <div class="article-text">
        <div v-html="article.text"></div>
      </div>
    </div>
    <!-- 显示小标签 -->
    <div>
      <Tag v-for="item in article.tag" :key="item">
        <router-link :to="{ path: '/articleType', query: { tag: item } }">{{
          item
        }}</router-link>
      </Tag>
    </div>
    <!-- 显示详情 -->
    <div class="type">
      <List item-layout="vertical">
        <ListItem v-for="talk in articleTalk" :key="talk.talk">
          <ListItemMeta :title="talk.username" :description="Date(talk.date)">{{
            talk.talk
          }}</ListItemMeta>
        </ListItem>
      </List>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {},
      articleTalk: [],
    };
  },
  created() {
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      //获取文章
      this.$api.get("getArticle/" + id).then((res) => {
        if (res.code === 0) {
          this.article = res.data;
          this.$api.get("getArticleTalk/" + id).then((res) => {
            this.articleTalk = res.data;
          });
        } else {
          this.info(res.message);
        }
      });

      //判断用户是否看过文章,看过就view+1,如果是第一次看,则调用浏览量+1的API
      let view = localStorage.getItem("article_" + id);
      console.log(view + "view的次数:");

      if (view) {
        localStorage.setItem("article_" + id, parseInt(view) + 1);
      } else {
        this.$api.get("viewArticle/" + id).then((res) => {
          console.log(res);
        });
        localStorage.setItem("article_" + id, 1);
      }
    }
  },
  methods: {
    info(text) {
      this.$Notice.info({
        title: "提示",
        desc: text,
      });
    },
  },
};
</script>

<style>
.type {
  text-align: left;
}
.detail {
  padding: 40 10vw 40px 10vw;
}
.article {
  padding: 40px 10vw 40px 10vw;
}

.article-p {
  color: #ababab;
}
.article h2 {
  padding: 20px;
}
.article-text {
  /* display: block; */
  text-align: left;
  background-color: bisque;
  padding: 12px;
}
</style>