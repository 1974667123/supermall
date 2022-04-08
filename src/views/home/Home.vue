<template>
  <div id="home">
    <nav-bar class="home-nav clearfix"><div slot="center">购物街</div></nav-bar>
    <home-swipe :banners="banners" />
    <home-recommend-view :recommends="recommends" />
    <feature />
    <tabcontrol :title="['流行', '新款', '推荐']" />
    <goodslist :goods="goods['pop'].list" />
  </div>
</template>

<script>
import homeSwipe from "./childrencomps/HomeSwipe.vue";
import HomeRecommendView from "./childrencomps/HomeRecommendView.vue";
import Feature from "./childrencomps/Feature";

import NavBar from "components/common/navbar/NavBar.vue";
import Tabcontrol from "components/content/tabcontrol/TabControl";
import Goodslist from "components/content/goods/Goodslist.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    homeSwipe,
    HomeRecommendView,
    Feature,
    NavBar,
    Goodslist,
    Tabcontrol,
  },
  created() {
    this.getHomeMultidata(), this.getHomeGoods("pop"), this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //请求商品数据
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  color: #fff;
  background: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
