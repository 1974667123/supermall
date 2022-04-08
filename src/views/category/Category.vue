<template>
  <div class="category">
    <div class="wrapper">
      <ul>
        <li>标题1</li>
        <li>标题2</li>
        <li>标题3</li>
        <li>标题4</li>
        <li>标题5</li>
        <li>标题6</li>
        <li>标题7</li>
        <li>标题8</li>
        <li>标题9</li>
        <li>标题10</li>
        <li>标题11</li>
        <li>标题12</li>
        <li>标题13</li>
        <li>标题14</li>
        <li>标题15</li>
        <li>标题16</li>
        <li>标题17</li>
        <li>标题18</li>
        <li>标题19</li>
        <li>标题20</li>
        <li>标题21</li>
        <li>标题22</li>
        <li>标题23</li>
        <li>标题24</li>
        <li>标题25</li>
        <li>标题26</li>
        <li>标题27</li>
        <li>标题28</li>
        <li>标题29</li>
        <li>标题30</li>
        <li>标题31</li>
        <li>标题32</li>
        <li>标题33</li>
        <li>标题34</li>
        <li>标题35</li>
        <li>标题36</li>
        <li>标题37</li>
        <li>标题38</li>
        <li>标题39</li>
        <li>标题40</li>
        <li>标题41</li>
        <li>标题42</li>
        <li>标题43</li>
        <li>标题44</li>
        <li>标题45</li>
        <li>标题46</li>
        <li>标题47</li>
        <li>标题48</li>
        <li>标题49</li>
        <li>标题50</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScoll from "better-scroll";
import bscroll from "better-scroll";

export default {
  name: "Category",
  components: {
    BScoll,
  },
  mounted() {
    const bscroll = new BScoll(document.querySelector(".wrapper"), {
      probeType: 3,
    });
    bscroll.on("scroll", (position) => {
      console.log(position);
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>
