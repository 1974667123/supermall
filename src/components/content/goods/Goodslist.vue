<template>
  <div class="goodslist">
    <goodslistitem v-for="item in goods" :goodsitem="item" />
  </div>
</template>

<script>
import Goodslistitem from "./Goodslistitem.vue";
export default {
  name: "Goodslist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { Goodslistitem },
};
</script>

<style>
.goodslist {
  display: flex;
  flex-wrap: wrap; /*  让item等分 */
  justify-content: space-around;
}
</style>
