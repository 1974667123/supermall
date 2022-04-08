<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <img :src="item.image" alt="" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  margin-top: 10px;
  width: 100%;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  font-size: 15px;
  text-align: center;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>
