<template>
  <div>
    <div class="list-manager">
      <row type="flex" justify="space-around" class="code-row-bg">
        <i-col span="15">
          <List>
            <ListItem v-for="item in list" :key="item.id" class="item">
              <ListItemMeta :title="item.username"> </ListItemMeta>
              <template slot="action">
                <li>
                  <Button @click="online(item.username)">
                    {{ item.login == 0 ? "封停" : "解封" }}
                  </Button>
                </li>
              </template>
            </ListItem>
          </List>
        </i-col>
      </row>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminUsers",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.$api.get("admin/getAllUser").then((res) => {
        this.list = res.data;
      });
    },
    online(name) {
      this.$api.get("admin/stopLogin/" + name).then((res) => {
        this.$Notice.info({
          title: "提示",
          desc: res.message,
        });
        this.getUsers();
      });
    },
  },
};
</script>

<style>
</style>