<template>
  <div class="article_writer">
    <div class="item">
      <h3>文章名称</h3>
      <Input v-model="title" style="width: 300px" placeholder="输入文章名称" />
    </div>
    <div class="item">
      <h3>文章作者</h3>
      <Input v-model="writer" style="width: 300px" placeholder="输入文章作者" />
    </div>
    <div class="item">
      <h3>文章分类</h3>
      <Select v-model="type" style="width: 200px">
        <Option v-for="item in articleType" :value="item.uid" :key="item.uid">{{
          item.name
        }}</Option>
      </Select>
    </div>
    <div class="item">
      <h3>文章小标签</h3>
      <Input
        v-model="tag"
        style="width: 300px"
        placeholder="使用空格进行分割"
      />
    </div>
    <!--文章详情-->
    <div v-if="mode">
      <h3 style="text-align: left">文章详情</h3>
      <Button @click="mode = !mode" type="primary">切换MarkDown模式</Button>
      <Editor id="tinymce" v-model="text" :init="init"></Editor>
      <br />
      <br />
      <Button v-on:click="submission">提交</Button>
    </div>
    <div v-else>
      <h3 style="text-align: left">文章详情</h3>
      <Button @click="mode = !mode" type="primary">切换正常编辑器</Button>
      <textarea v-model="text" class="markdown"></textarea>
      <br />
      <br />
       <Button v-on:click="submission">提交</Button>
    </div>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver/theme";
import marked  from 'marked' 
export default {
  name: "WriterArticle",
  components: {
    Editor,
  },
  data() {
    return {
      text: "",
      title: "",
      type: "",
      tag: "",
      writer: "",
      mode: true,
      //类别
      articleType: [],
      //初始化配置
      init: {
        selector: "#tinymce", // change this value according to your HTML
        plugin: "a_tinymce_plugin",
        a_plugin_option: true,
        menubar: "file edit",
        skin_url: "/skins/ui/oxide", // skin路径
        height: 300, //编辑器高度
        branding: false, //是否禁用“Powered by TinyMCE”,
      },
    };
  },
  mounted() {
    tinymce.init({});
  },
  created: function () {
    //获取所有分类
    this.$api.get("users/user/articleType").then((res) => {
      //写数据
      this.articleType = res.data;
    });
  },
  methods: {
    info(text) {
      this.$Notice.info({
        title: "提示",
        desc: text,
      });
    },
    //文章提交方法
    submission() {
      if (this.mode == true) {
        let data = {
          title: this.title,
          writer: this.writer,
          text: this.text,
          type: parseInt(this.type),
          tag: this.tag.split(" "),
        };
        this.$api.post("admin/setArticle", { article: data }).then((res) => {
          //写数据
          this.info(res.message);
        });
      } else if(this.mode == false) {
        let data = {
          title: this.title,
          writer: this.writer,
          text: marked(this.text),
          type: parseInt(this.type),
          tag: this.tag.split(" "),
        };
        this.$api.post("admin/setArticle", { article: data }).then((res) => {
          //写数据
          this.info(res.message);
        });

      }
    },
  },
};
</script>
<style>
.article_writer {
  padding: 40px 10vw 40px 10vw;
  text-align: left;
}

.article_writer .item {
  padding-bottom: 20px;
}

.article h2 {
  padding: 20px;
}
.markdown{
    display: block;
    width:100%;
    height: 300px;
}
</style>