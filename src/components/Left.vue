<template>
  <div>
    <div class="top">
      <img src="../assets/leftlogo.jpg" />
      <div class="name">潘洋</div>
         
           
      <div class="locate">
            <img src="../assets/locate.svg" alt="定位">浙江杭州
        </div>
      <div class="email">return_panyang@163.com</div>
  
      <div class="school">杭州电子科技大学23届本科生</div>
    </div>
    <div>
      <ul class="social-icons">
        <li>
          <a class="linkedin" href="https://github.com/doublewater777" target="blank" title="GitHub"
            ><img src="../assets/github.svg" />
          </a>
        </li>
        <li>
          <a class="linkedin" href="https://juejin.cn/user/2331420885001271" target="blank" title="掘金"
            ><img src="../assets/blog.svg" />
          </a>
        </li>
        <li>
          <a class="github" href="https://weibo.com/u/5597970337" target="blank" title="新浪微博"
            ><img src="../assets/sina-weibo (1).svg"
          /></a>
        </li>
        <li>
          <a
            class="dribbble"
            href="https://space.bilibili.com/404614050?spm_id_from=333.1007.0.0" target="blank" title="哔哩哔哩"
            ><img src="../assets/bilibili.svg"
          /></a>
        </li>
      </ul>
    </div>
    <div class="button-group">
      <router-link to="/" class="button">首页</router-link>
      <router-link to="/articles" class="button">文章</router-link>
      <router-link to="/study" class="button">学习资料</router-link>
      <router-link to="/" class="button">休闲娱乐</router-link>
      <!-- <button >文章</button>
    <button >学习资料</button>
    <button>休闲娱乐</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Left",
};
</script>

<style scoped>
.top {
  margin-top: 300px;
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  font-weight: 800;
  font-size: large;
}
.locate{
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    font-family: Microsoft YaHei,Microsoft JhengHei,SimHei;
    font-size: large;
    /* height: 50px; */
}
.locate img{
    width:20px;
    height: 20px;
}
.email {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font: 1em sans-serif;
  font-size: medium;
  margin: 10px 0;
}
.school{
    font-family:fantasy;
    margin: 10px 0;
}
.button-group {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
.button {
  /* background-color: white; */
  width: 200px;
  height: 40px;
  color: #409eff;
  border: #409eff;
  line-height: 40px;
}
.button:hover {
  background-color: #409eff;
  color: white;
}
.social-icons{
    display: flex;
    flex: row nowrap;
    justify-content: space-around;

}
.social-icons img{
    width: 44px;
    height: 44px;
    opacity: 0.5;
    color: #29aafe;
    /* margin-bottom: ; */
}
.social-icons a {

  /* background-color: #eceeef; */
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
</style>