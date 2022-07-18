<template>
  <div class="page-container">
    

    <div class="main-content">
      <nav class="navbar user-info-navbar" role="navigation">
        <ul class="user-info-menu left-links list-inline list-unstyled">
          <!-- <li class="hidden-sm hidden-xs">
            <a href="#" data-toggle="sidebar"><i class="fa-bars"></i></a>
          </li> -->
          <li class="dropdown hover-line language-switcher">
           
            <ul class="dropdown-menu languages">
              <li
                :class="{ active: langItem.key === lang.key }"
                v-for="langItem in langList"
                :key="langItem.key"
              >
                <a href="#" @click="lang = langItem">
                  <img :src="langItem.flag" /> {{ langItem.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="user-info-menu right-links list-inline list-unstyled">
          <li class="hidden-sm hidden-xs">
            
          </li>
        </ul>
      </nav>

      <div v-for="(item, idx) in items" :key="idx">
        <div v-if="item.web">
          <WebItem :item="item" :transName="transName" />
        </div>
        <div v-else v-for="(subItem, idx) in item.children" :key="idx">
          <WebItem :item="subItem" :transName="transName" />
        </div>
      </div>

      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import WebItem from "../components/WebItem.vue";

import itemsData from "../assets/data.json";


export default {
  name: "Resource",
  components: {
    WebItem,
  },
  data() {
    return {
      items: itemsData,
      lang: {},
      langList: [
        {
          key: "zh",
          name: "简体中文",
          flag: "../assets/images/flags/flag-cn.png",
        },
        {
          key: "en",
          name: "English",
          flag: "../assets/images/flags/flag-us.png",
        },
      ],
    };
  },
  created() {
    this.lang = this.langList[0];
    // loadJs();
  },
  methods: {
    transName(webItem) {
      return this.lang.key === "en" ? webItem.en_name : webItem.name;
    },
  },
};
</script>

<style>

</style>
