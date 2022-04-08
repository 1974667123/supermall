<template>
  <div class="tabcontrol">
    <div
      class="control-item"
      v-for="(item, index) in title"
      :class="{ active: index === currentindex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentindex = index;
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  height: 44px;
  position: sticky;
  top: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  z-index: 9;
}
.control-item {
  flex: 1;
}
.control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
