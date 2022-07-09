<template>
  <div class="article">
    <h3>与{{ mail.toUser }}的对话</h3>
    <!-- <List>
        <ListItem v-for="item in mail.mail" :key="item.time">
            <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" :title="Date(item.time)|date" :description="item.text">
                  {{item.text}}
            </ListItemMeta>
        </ListItem>
    </List> -->
    <div class="chat-content">
      <div v-for="item in mail.mail" :key="item.time">
        <div class="word" v-if="item.read[0] != username">
          <img
            src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          />
          <div class="info">

              <p class="time">{{ item.read[0] }} {{ Date(item.time) | date }}</p>
          <div class="info-content">{{ item.text }}</div>
          </div>
        </div>
        <div class="word-my" v-else>
            <div class="info">

                <p class="time">{{ item.read[0] }} {{ Date(item.time) | date }}</p>
          <div class="info-content">{{ item.text }}</div>
            </div>
          <img src="https://img.jinse.com/5499866_image3.png" />
        </div>
      </div>
    </div>
    <div>
      <h3>对话:</h3>
      <input type="textarea" v-model="mailText" placeholder="请输入" />
      <br />
      <Button @click="send">发送</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mail",
  data() {
    return {
      mail: { mail: [], toUser: "" },
      mailText: "",
      id: "",
      username: "",
    };
  },
  created() {
    if ("id" in this.$route.params) {
      let id = this.$route.params.id;
      console.log(id);
      this.getMail(id);
    }
    this.username = sessionStorage.getItem("username");
  },
  methods: {
    getMail(id) {
      this.$api.get("users/user/mailGetter/" + id).then((res) => {
        if (res.code === 0) {
          this.mail = res.data;
          this.id = id;
          console.log(this.mail, "this.mail");
        } else {
          this.$Notice.info({
            title: "提示",
            desc: res.message,
          });
        }
      });
    },
    send() {
      let sendData = {
        text: this.mailText,
      };
      this.$api
        .post("users/user/mail/" + this.mail.toUser, sendData)
        .then((res) => {
          if (res.code === 0) {
            this.mailText = "";
            this.getMail(this.id);
          } else {
            this.$Notice.info({
              title: "提示",
              desc: res.message,
            });
          }
        });
    },
  },
};
</script>
<style lang="less" scoped>
.chat-content {
  width: 100%;
  padding: 20px;
  .word {
    display: flex;
    margin-bottom: 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .info {
      margin-left: 10px;
      .time {
        font-size: 12px;
        color: rgba(51, 51, 51, 0.8);
        margin: 0;
        height: 20px;
        line-height: 20px;
        margin-top: -5px;
      }
      .info-content {
        padding: 10px;
        font-size: 14px;
        background: #fff;
        position: relative;
        margin-top: 8px;
      }
      //小三角形
      .info-content::before {
        position: absolute;
        left: -8px;
        top: 8px;
        content: "";
        border-right: 10px solid #fff;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      }
    }
  }

  .word-my {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .info {
      width: 90%;
      margin-left: 10px;
      text-align: right;
      .time {
        font-size: 12px;
        color: rgba(51, 51, 51, 0.8);
        margin: 0;
        height: 20px;
        line-height: 20px;
        margin-top: -5px;
        margin-right: 10px;
      }
      .info-content {
        max-width: 70%;
        padding: 10px;
        font-size: 14px;
        float: right;
        margin-right: 10px;
        position: relative;
        margin-top: 8px;
        background: #a3c3f6;
        text-align: left;
      }
      //小三角形
      .info-content::after {
        position: absolute;
        right: -8px;
        top: 8px;
        content: "";
        border-left: 10px solid #a3c3f6;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
      }
    }
  }
}
</style>