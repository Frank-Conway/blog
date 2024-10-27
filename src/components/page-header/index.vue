<script setup>
import { debounce } from "@/utils/tool"
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from "vue-router";
import { storeToRefs } from 'pinia'

import { articleStore } from "@/stores";

import FaRegularListAlt from "~icons/fa-regular/list-alt"
import FaRegularBookmark from "~icons/fa-regular/bookmark"
import Fa6RegularThumbsUp from "~icons/fa6-regular/thumbs-up"
import Fa6RegularEye from "~icons/fa6-regular/eye"
import Fa6RegularCalendarDays from "~icons/fa6-regular/calendar-days"
import Fa6RegularClock from "~icons/fa6-regular/clock";



import girl from "@/assets/images/girl.jpeg"
import MdiChevronDoubleDown from '~icons/mdi/chevron-double-down'

const route = useRoute()
const { getArticle } = storeToRefs(articleStore())


const scrollToBottom = () => {
  const homeElement = document.querySelector("#home");

  if (homeElement) {
    // 使用 scrollHeight 来确保滚动到元素内容的底部
    const scrollTop = homeElement.scrollHeight;

    document.body.scrollTo({
      top: scrollTop,
      behavior: "smooth"
    });

    // 如果您希望滚动整个页面到底部，而不是仅 home 元素，
    // 可以使用以下代码代替上面的 window.scrollTo：
    // window.scrollTo({
    //   top: document.body.scrollHeight,
    //   behavior: "smooth"
    // });
  }
};

const showScrollBottom = ref(true);

const scrollListener = () => {
  if (window.scrollY > 50 || document.body.scrollTop > 50) { // 改进了滚动位置的检测方式
    showScrollBottom.value = false;
  } else {
    showScrollBottom.value = true;
  }
};

const debouncedScrollListener = debounce(scrollListener, 100);

const initScrollEvent = () => {
  document.body.addEventListener("scroll", debouncedScrollListener); // 监听 window 对象的 scroll 事件可能更为准确
};

const removeScrollEvent = () => {
  document.body.removeEventListener("scroll", debouncedScrollListener); // 在组件卸载时移除事件监听器
};

onMounted(() => {
  initScrollEvent();
});

onUnmounted(() => {
  removeScrollEvent(); // 确保在组件卸载时清理事件监听器，防止内存泄漏
});



</script>

<template>
  <div class="page-header">
    <div id="home" v-if="route.path === '/home'" class="home">
      <el-image :src="girl" class="banner" fit="cover"></el-image>
      <div class="content">
        <div class="title">Blog</div>
        <div class="saying">Never put off till tomorrow what you can do</div>
      </div>
      <div class="mask"></div>
      <div v-if="showScrollBottom" class="scroll-bottom"><MdiChevronDoubleDown @click="scrollToBottom" class="w-[2rem] h-[2rem] text-white scroll-icon"/>
      </div>

    </div>

    <div v-else-if="route.path === '/article'" class="article">
      <el-image :src="girl" class="banner" fit="cover"></el-image>
      <div class="content text-white">
        <div class="title mb-3">{{ getArticle.title }}</div>
        <div class="info text-md mb-3 flex flex-wrap justify-center items-center max-w-[60vw]">
          <div class="item mr-[0.3rem] flex items-center">
            <Fa6RegularCalendarDays class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
            <span>发表于 {{ getArticle.createTime }}</span>
          </div>
          <div class="item mr-[0.3rem] flex items-center">
            <Fa6RegularClock class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
            <span>更新于 {{ getArticle.updateTime }}</span>
          </div>
          <div class="item mr-[0.3rem] flex items-center">
            <FaRegularListAlt class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
            <span>{{ getArticle.category }}</span>
          </div>
          <div class="item mr-[0.3rem] flex items-center">
            <FaRegularBookmark class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
            <span>{{ getArticle.tagList.join('、') }}</span> ｜
          </div>
          <div class="item mr-[0.3rem] flex items-center">
            <Fa6RegularThumbsUp class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
            <span>点赞数 {{ getArticle.likes }}</span> ｜
          </div>
          <div class="item mr-[0.3rem] flex items-center">
            <Fa6RegularEye class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
            <span>浏览次数 {{ getArticle.views }}</span>
          </div>
        </div>

      </div>

      <div class="mask"></div>
    </div>

    <div v-else class="other">
      <el-image :src="girl" class="banner" fit="cover"></el-image>
      <div class="content">
        <div class="title">{{ route.name }}</div>
      </div>
      <div class="mask"></div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.page-header {
  width: 100%;

  .home {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .scroll-bottom {
      position: absolute;
      left: 50%;
      bottom: 15px;
      transform: translateX(-50%);
      z-index: 2;

      .scroll-icon {
        cursor: pointer;
        animation: bounce 1.5s infinite;
      }
    }


  }

  .article {
    position: relative;
    width: 100%;
    height: 24rem;
    overflow: hidden;
  }

  .other {
    position: relative;
    width: 100%;
    height: 24rem;
    overflow: hidden;
  }

  .banner{
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60%;
    z-index: 2;

    .title {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }

    .saying {
      font-size: 1.4rem;
      color: #fff;
      text-align: center;
    }
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      opacity: 1;
    }
    60% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      opacity: 0.5;
    }
  }

}






</style>
