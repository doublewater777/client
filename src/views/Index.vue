<template>
<div class="wrap">
    <header>
        <label for="section-1-trigger"><span>个人简介</span> </label>
        <label for="section-2-trigger"><span>兴趣爱好</span> </label>
        <label for="section-3-trigger"><span>学习目的</span> </label>
        <label for="section-4-trigger"><span>更多表达</span> </label>
    </header>
    <input id="section-1-trigger" type="radio" name="sections" tabindex="1" checked>
    <section class="section section-one">
        <h1>我是谁?</h1>
        <img src="../assets/photo.jpg" >
        <p>我是潘洋!很高兴认识你.这是我的第一个个人网站,这里面的功能都是自己很喜欢的.你可以通过这个网站了解我.我学习前端不长,目前只能说了解HTML,CSS,JavaScript,Vue,Node.js,Element.Ui等等.
           
        </p>
        <p> 我喜欢一切美的东西.希望这个网站永远可以带给我对前端学习的激情,网站的背景图片都是杭电的官微里下载的,今后学习到新技术,会加入自己喜欢的部分!</p>
        <p>
            我也经常使用Github,用博客记录自己的学习,明白了写下来是一种加深理解的方式!
        </p>
        <p>在左边可以点击我的GitHub和掘金主页</p>
        <button></button>
    </section>

    <input id="section-2-trigger" type="radio" name="sections" tabindex="2">
    <section class="section section-two">
        <h1>我也是一个什么样的人?</h1>
        <p>我是一个经常去看艺术展和音乐现场的人,不过最近好久没去了,因为各种演出互动都暂停了.</p>
        <p>我也是一个喜欢跑步和远足的人,大一就加入了学校的甲壳虫跑团,在每年的假期都会和社团朋友们一起去爬山跑步,很有意义! </p>
        
        <img src="../assets/2nd.jpg" alt="音乐">
        <img src="../assets/tea.jpg" alt="远足">
        <img src="../assets/bycicle.jpg" alt="骑行">
    </section>


    <input id="section-3-trigger" type="radio" name="sections" tabindex="3">
    <section class="section section-three">
        <h1>为什么要选择前端呢?</h1>
        <p>最直接的原因是我想实现我的一个人生目标:为我喜欢的乐队做一个网站.也许听起来有些无理,不过确实是因为这个,我觉得他们真的有那么好,值得有一个乐队网站,大乐队都有网站了.比如英国的
            <a href="https://www.coldplay.com/homepage/" target="blank">Coldplay</a>,<a href="https://www.thebeatles.com/" target="blank">The Beatles</a>
        ,<a href="https://www.linkinpark.com/" target="blank">Linkin Park</a>
        ,<a href="https://www.acdc.com/" target="blank">AC/DC</a>
        ,<a href="https://www.sunsetrollercoaster.com/" target="blank">落日飞车</a>等等.
        </p>
        <p>在大陆是很少乐队有个人网站的,可能是因为付不起钱,因为人们对这块的需求没有发达国家大,许多乐队都是入不敷出.并且,许多乐队都不会选择网易云或者QQ音乐作为他们的基地,因为网易云和QQ音乐大部分都面向普通观众,对于音乐没有尊重.</p>
        <p>
            而如果我们国家能够持续发展,人们对艺术的要求不断提高,艺术家们如果需要提供建设个人网站服务,我想我可以占取先机,建立团队,在今后可能成为这方面的领导者.
        </p>
        <div class="images">
            <div class="image">
            <a href="https://www.coldplay.com/homepage/" target="blank"><img src="../assets/coldplay.webp" alt="coldplay" title="Coldplay,点击参观网站"></a>,
                
            </div>
            <div class="image">
            <a href="https://www.thebeatles.com/" target="blank"><img src="../assets/beatles.webp" alt="beatles" title="The beatles,点击参观网站"></a>
                
            </div>
            <div class="image">
                 <a href="https://www.linkinpark.com/" target="blank">
             <img src="../assets/linkin_park.jpg" alt="linkin park" title="林肯公园,点击参观网站">
            </a>
            </div>
            <div class="image">
                <a href="https://www.acdc.com/" target="blank">
        <img src="../assets/acdc.jpg" alt="acdc" title="AC/DC,点击参观网站">

            </a>
            </div>
            <div class="image">
            <a href="https://www.sunsetrollercoaster.com/" target="blank"><img src="../assets/luori.jpg" alt="落日飞车" title="落日飞车,点击参观网站"></a>
                
            </div>

           
            
        
            
        
        </div>

    </section>

    <input id="section-4-trigger" type="radio" name="sections" tabindex="4">
    <section class="section section-four">
        <h1>我的小小尝试</h1>
        <p>
            在大学自学了吉他,虽然技术不是很厉害,不过也能弹自己喜欢的歌曲,也在尝试的创作歌曲. <br>
            对我来说,做前端和弹吉他有相似之处,这两个都可以表达自己.<br>
            前端表达了自己对于美术的构想构思,吉他则更多地表达了自己的心情和处境.<br>
            一位我非常喜欢的博主说过,<i>
                做事情一定要做自己喜欢的事情,这样你工作才会觉得快乐,能够
            做得更深更轻松
            </i>
            <br>
            我也是这么认为的.做自己喜欢的事情,往往都是内在驱动的,会有自己想要做好的决心.
            <br>
            这是我写的第一首歌,纯粹简单,单纯的为了快乐而做的,也希望自己之后多快乐地工作
        </p>
       
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1959258478&auto=1&height=66"></iframe>

    <div>

        <p class="lyrics" style="text-align:center;margin-right: -10px;">吃早餐</p>
    </div>
        <p class="lyrics">

酸辣粉我真的喜欢吃 <br>
酸辣粉我真的喜欢吃  <br>
每天早上出门吃一碗<br>
吃完我心里真的喜欢<br>
再来一碗路边的豆腐脑<br>
它一定是甜口的<br>
热干面面窝豆皮糯米鸡<br>
现在我真的很怀念<br>
因为来到杭电之后<br>
这里吃不到,这里吃不到<br>
但是啊<br>
是我的选择啊<br>
饿了么居然找不到<br>
还好现在有家早餐店<br>
它开在学校不远的外面<br>
他家的生煎真的好吃<br>
喷香扑鼻,色味俱全<br>
但是啊,小心你的嘴巴啊<br>
别被它烫伤了<br>
现在我很少出去外面吃<br>
因为出去吃花个半小时<br>
所以我买了面包和牛奶<br>
虽然他们一般但其实也凑合<br>
其实啊吃什么都可以<br>
食物它不分贵贱啊<br>
        </p>
    </section>
</div>
</template>

<script>


  

    export default {
        name: 'Home',
        
        
    }
</script>

<style scoped lang="less">

@import url(http://fonts.googleapis.com/css?family=Oswald:400,300,700);
html,
body {
    box-sizing: border-box;
    font-size: 100%;
    height: 100%;
    width: 100%;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}
body {
    font-family: Arial, sans-serif;
    font-weight: normal;
    position: relative;
}
h1,
h2,
h3 {
    font-family: "Oswald", sans-serif;
    font-weight: 400;
}
@media (min-width: 25em) {
    h1,
    h2,
    h3 {
        font-weight: 700;
    }
}
h2,
h3 {
    margin: 1.414em 0 0.5em;
    line-height: 1.2;
}
h1 {
    font-size: 1.5em;
    font-size: 7.6vw;
    line-height: 1.2;
    margin: 0 0 0.5em;
}
@media (min-width: 31.25em) {
    h1 {
        font-size: 2.25em;
    }
}
@media (min-width: 50em) {
    h1 {
        font-size: 3.375em;
    }
}
h2 {
    font-size: 1em;
}
@media (min-width: 31.25em) {
    h2 {
        font-size: 1.5em;
    }
}
@media (min-width: 50em) {
    h2 {
        font-size: 2.25em;
    }
}
h3 {
    font-size: 0.667em;
}
@media (min-width: 31.25em) {
    h3 {
        font-size: 1em;
    }
}
@media (min-width: 50em) {
    h3 {
        font-size: 1.5em;
    }
}
p,
ul {
    font-size: 0.667em;
    line-height: 1.4;
    margin-bottom: 0.75em;
}
@media (min-width: 31.25em) {
    p,
    ul {
        font-size: 1em;
    }
}
@media (min-width: 81.25em) {
    p,
    ul {
        font-size: 1.15em;
    }
}
strong {
    font-weight: bold;
}
.wrap {
    background: #ecf0f1;
    color: #fff;
    display: block;
    height: 94vh;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    text-align: center;
    width: 100%;
}
.wrap header {
    background: rgba(255, 255, 255, 0.5);
    color: #222;
    font-size: 1rem;
    position: relative;
    text-align: center;
    z-index: 900;
}
.wrap header label {
    cursor: pointer;
    display: inline-block;
    font-size: 0.667em;
    font-weight: bold;
    line-height: 3rem;
    padding: 0 1em;
}
@media (min-width: 34.6875em) {
    .wrap header label {
        font-size: 1em;
    }
}
@media (min-width: 81.25em) {
    .wrap header label {
        font-size: 1.15em;
    }
}
.wrap header label:hover {
    background: #fff;
}
.wrap header label + label {
    margin-left: 0.25em;
}
@media (min-width: 31.25em) {
    .wrap header label + label {
        margin-left: 0em;
    }
}
@media (min-width: 41.25em) {
    .wrap header label + label {
        margin-left: 2em;
    }
}
.wrap header label span {
    display: none;
}
@media (min-width: 25em) {
    .wrap header label span {
        display: inline-block;
    }
}
.wrap h1 {
    margin: 1em 0;
}
input {
    left: 0;
    position: absolute;
    top: -1000%;
}
.section {
    color: #fff;
    display: inline-block;
    font-size: 1rem;
    height: 100%;
    left: 100%;
    max-width: 100%;
    padding: 3em 1em;
    position: absolute;
    text-align: center;
    top: 0;
    vertical-align: top;
    -webkit-transition: left 0s 0.75s;
    transition: left 0s 0.75s;
    width: 100%;
    z-index: 10;
}
@media (min-width: 28.75em) {
    .section {
        padding: 3em;
    }
}
@media (min-width: 43.75em) {
    .section {
        padding: 3em;
    }
}
@media (min-width: 87.5em) {
    .section {
        padding: 3em 6em;
    }
}
@media (max-height: 26.875em) {
    .section {
        height: auto;
    }
}
.section-one {
    background: #ecf0f1 url('../assets/1st.jpg');
    background-size: cover;
}
.section-two {
    background: #bdc3c7 url('../assets/football.jpg');
    background-size: cover;
}
.section-three {
    background: #e74c3c url("../assets/3rd.jpg");
    background-size: cover;
}
.section-four {
    background: #bdc3c7 url("../assets/4th.jpg");
    background-size: cover;
}
.section p {
    text-align: left;
    text-shadow: 1px 1px #000;
    width: 60vw;
}
@media (min-width: 25em) {
    .section p {
        /* -webkit-column-count: 2; */
        -webkit-column-gap: 20px;
    }
}
.section h1,
.section p {
    opacity: 0;
    top: 3em;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    -webkit-transition: all 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: all 0.75s cubic-bezier(0, 1.2, 0.89, 1.3);
    transition: all 0.75s cubic-bezier(0, 1.2, 0.89, 1.3);
}
.section img{
     -webkit-transition: all 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: all 0.75s cubic-bezier(0, 1.2, 0.89, 1.3);
    transition: all 0.75s cubic-bezier(0, 1.2, 0.89, 1.3);
    width: 200px;
    float: left;
}
.section-two>img{
    width: 300px;
    margin: 300px 45px;

}
.section-three .images {
    display: flex;
    margin-top: 100px;
    height: 25vh;
    margin-left: -50px;
}
.section-three  .images img{
    width: 24vw;
    height: 35vh;
    border-radius: 1rem;
    transition: all 0.6s;
}
.section-three  .images .image:not(:first-child) {
  margin-left: -7vw;
}

input:checked + .section {
    left: 0;
    -webkit-transition: left 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    transition: left 0.75s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-transition: left 0.75s cubic-bezier(0, 1.2, 0.89, 1.3);
    transition: left 0.75s cubic-bezier(0, 1.2, 0.89, 1.3);
    z-index: 100;
}
input:checked + .section h1,
input:checked + .section p {
    opacity: 1;
    top: 0;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.75s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
    transition: all 0.75s cubic-bezier(0.19, 1, 0.22, 1) 0.9s;
    -webkit-transition: all 0.75s cubic-bezier(0, 1.2, 0.89, 1.3) 0.9s;
    transition: all 0.75s cubic-bezier(0, 1.2, 0.89, 1.3) 0.9s;
}
.lyrics{
    
    
    
    font-family: FangSong;
    font-size: 24px;
      -webkit-column-count: 2;
        -webkit-column-gap: 20px;
}
iframe{
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>
<style lang="less" scoped>

.section-three  .images .image:hover,
.section-three  .images .image:focus-within{
    transform: scale(1.2);
    
  ~.section-three .images .image {
    transform: translateX(12rem);
  }
}
</style>>
