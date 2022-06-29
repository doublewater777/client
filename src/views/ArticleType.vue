<template>
  <div class="article-list">
    <row type="flex" class="code-row-bg">
      <i-col span="24">
        <article-list :list="list" :title="listTitle"> </article-list>
      </i-col>
    </row>
  </div>
</template>

<script>
import ArticleList from "../components/ArticleList.vue";
export default {
  name: "ArticleType",
  data() {
    return {
      list: [],
      listTitle: "",
    };
  },
  components: { ArticleList },
  created() {
    if ("type" in this.$route.query) {
      let data = { type: this.$route.query.type };
      this.getData(data, "分类:" + this.$route.query.type);
    }
    if ("tag" in this.$route.query) {
      let data = { tag: this.$route.query.tag };
      this.getData(data, "标签:" + this.$route.query.tag);
    }
  },
  methods: {
    getData(data, title) {
      this.$api.post("getArticles", data).then((res) => {
        this.list = res.data.filter((item) => item.id != 0);
      });
      this.listTitle = title;
    },
  },
};
</script>

<style>
</style>