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
          :to="{
            path: '/articleType',
            query: { type: article.type, typename: article.typename },
          }"
        >
          <Icon type="ios-cafe"></Icon>
          {{ article.typename }}
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
      <p class="article-p">创作时间:{{ Date(article.time) |date }}</p>
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
    <!-- <div class="type">
      <List item-layout="vertical">
        <ListItem v-for="talk in articleTalk" :key="talk.talk">
          <ListItemMeta :title="talk.username" :description="Date(talk.date) || date">{{
            talk.talk
          }}</ListItemMeta>
        </ListItem>
      </List>
    </div> -->
    <!--收藏和点赞-->
    <div class="float">

        <Button v-on:click="aLike(article.a_id, 1)" type="info" ghost>
        <Icon type="ios-thumbs-up" />
        
      </Button>
      <Button v-on:click="aLike(article.a_id, 0)" type="warning" ghost>
        <Icon type="ios-thumbs-down" />
        
      </Button>
       <Button v-on:click="commentLead" type="info" ghost>
        <Icon custom="iconfont icon-pinglun" />
        
      </Button>
       <!--收藏-->
      <Button v-on:click="collection(article.a_id)" type="error" ghost>
        <Icon type="ios-heart" />
      </Button>

    </div>
    <!--评论详情-->
    <div class="type" id="comment">
      <Divider />
      <List item-layout="vertical">
        <ListItem v-for="talk in articleTalk" :key="talk.talk">
          <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" :title="talk.username" :description="Date(talk.date) |date" />
          {{ talk.talk }}
        </ListItem>
      </List>
    </div>
    <!--评论-->
    <Talk :a_id="article.a_id"></Talk>
    <Button v-on:click="returntop" type="info" id="returntop" ghost>
      <Icon type="md-arrow-round-up" />
    </Button>
  </div>
</template>

<script>
import Talk from "@/components/Talk.vue";
export default {
  name: "Article",
  data() {
    return {
      article: {},
      articleTalk: [],
    };
  },
  components: {
    Talk,
  },
  created() {
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      //获取文章
      this.$api.get("getArticle/" + id).then((res) => {
        if (res.code === 0) {
          this.article = res.data;
          console.log(this.article, "this.article");
        } else {
          this.info(res.message);
        }
        this.getArticleTalk(id);
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
    getArticleTalk(id) {
      this.$api.get("getArticleTalk/" + id).then((res) => {
        this.articleTalk = res.data;
      });
    },
    collection(id) {
      this.$api.get("users/user/save/" + id).then((res) => {
        this.info(res.message);
      });
    },
    aLike(id, like) {
      if (localStorage.getItem("article_" + id + "_like")) {
        this.info("您已经进行过了选择");
      } else {
        this.$api.get("users/user/like/" + id + "/" + like).then((res) => {
          this.info(res.message);
          localStorage.setItem("article_" + id + "_like", 1);
        });
      }
    },
    returntop(){
      scrollTo({
        top:0,
        behavior:"smooth"
      })

    },
    commentLead(){
      let bottombox = document.getElementById("comment");
      bottombox.scrollIntoView(false)
    }
  },
  mounted() {
    console.log(this.article, "article");
  },
};
</script>

<style>
@import '../assets/icon_custom/iconfont.css';
.type {
  text-align: left;
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
  text-align: left;
  padding: 20px 10vw 20px 10vw;
}
.float{
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 100px;
  top: 250px;

}
.float Button{
  margin:10px
}
#returntop{
  position:fixed;
  right:50px;
  bottom:50px;
}
</style>