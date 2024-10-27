<script setup>
import { reactive, ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import HomeBanner from "@/assets/images/time.JPG";

const staticTalkList = [
  {
    id: 1,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner, HomeBanner, HomeBanner],
  },
  {
    id: 2,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner,HomeBanner],
  },
  {
    id: 3,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 4,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 5,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 6,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 7,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 8,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 9,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 10,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 11,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 12,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
  {
    id: 13,
    user_id: 1,
    nick_name: "M",
    content: "要天天开心哦",
    imageList: [HomeBanner],
  },
];

const talkList = ref([]);
const params = reactive({
  currentPage: 1,
  pageSize: 5,
});
const loadMore = ref(true);
let observeDom = null,
    observe = null;

const getTalkList = () => {
  // 分到第几条了
  let current = (params.currentPage - 1) * params.pageSize;
  let sliceList = staticTalkList.slice(current, current + params.pageSize);

  talkList.value = params.currentPage === 1 ? sliceList : [...talkList.value, ...sliceList];
  // talkList.value.concat(sliceList);
  if (talkList.value.length === staticTalkList.length) {
    loadMore.value = false;
  }
};

const observeTalk = () => {
  observeDom = document.querySelector(".observer");

  observe = new IntersectionObserver((entries) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        params.currentPage++;
        getTalkList();
      }
    });
  });

  observeDom && observe.observe(observeDom);
};

const initTalk = () => {
  getTalkList();
  nextTick(() => {
    observeTalk();
  });
};

onMounted(() => {
  initTalk();
});

onBeforeUnmount(() => {
  observe && observe.unobserve(observeDom);
  observe = null;
});
</script>

<template>
  <el-card>
    <div class="p-[40px]">
      <div class="talk-item flex mb-[2rem] pb-[2rem] border-b" v-for="talk in talkList" :key="talk.id">
        <div class="left mr-[1rem]">
          <el-avatar :size="64" shape="square">{{ talk.nick_name }}</el-avatar>
        </div>
        <div class="right flex flex-col items-start">
          <div class="nick-name text-xl mb-[1.8rem]">{{ talk.nick_name }}</div>
          <div class="content mb-[1rem]">{{ talk.content }}</div>
          <div v-if="talk.imageList.length > 1" class="image grid grid-cols-3 gap-1">
            <div class="image w-[100px] h-[100px] overflow-hidden" v-for="url in talk.imageList">
              <el-image :src="url" class="w-[100%] h-[100%]" fit="cover"></el-image>
            </div>
          </div>
          <div v-else>
            <div class="image w-[308px] h-[308px] overflow-hidden">
              <el-image :src="talk.imageList[0]" class="w-[100%] h-[100%]" fit="cover"></el-image>
            </div>
          </div>
        </div>
      </div>
      <div class="observer text-center">
        {{ loadMore ? "下拉加载更多" : "已经到底了" }}
      </div>
    </div>
  </el-card>
</template>
