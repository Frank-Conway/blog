<script setup>
import {defineAsyncComponent, ref} from "vue";
import { useRouter } from "vue-router";
import { configStore } from "@/stores";
import { storeToRefs } from "pinia";

import MdiDebian from '~icons/mdi/debian';
const router = useRouter()



const { getIsDark } = storeToRefs(configStore());
const isDark = ref(getIsDark.value);

const menuList = [
  {
    title: "首页",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/heart")),
    path: "/home",
    children: [],
  },
  {
    title: "时间轴",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/clock")),
    path: "/archive",
    children: [],
  },
  {
    title: "说说",
    path: "/talk",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/comment-dots")),
    children: [],
  },
  {
    title: "更多",
    icon: defineAsyncComponent(() => import("~icons/fa-regular/list-alt")),
    path: "/more",
    children: [
      {
        title: "关于我",
        icon: defineAsyncComponent(() => import("~icons/fa6-regular/face-kiss-wink-heart")),
        path: "/more/about",
      },
    ],
  },
]

const handleSelect = (path) => {
  if (!path) return;
  router.push(path);
  // router.push({
  //   path,
  //   query: {
  //     t: new Date().getTime(),
  //   },
  // });
};


</script>

<template>
  <div class="header-container">
    <div class="left">
      <MdiDebian class="logo"/>
    </div>
    <div class="right">
      <el-menu :ellipsis="false" mode="horizontal" @select="handleSelect">
        <div v-for="menu in menuList" :key="menu.path">
          <el-sub-menu v-if="menu.children.length" :index="menu.path">
            <template #title>
              <component class="menu-icon" :is="menu.icon"></component>
              {{ menu.title }}</template>
            <el-menu-item v-for="subMenu in menu.children" :key="subMenu.path" :index="subMenu.path">
              <component class="menu-icon text-black" :is="subMenu.icon"></component> <span class="text-black">{{ subMenu.title }} </span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="menu.path">
            <component class="menu-icon" :is="menu.icon"></component>{{ menu.title }}
          </el-menu-item>
        </div>
      </el-menu>
      <el-avatar>M</el-avatar>
      <el-switch v-model="isDark" @change="configStore().setToggleDark()" class="mb-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="light" inactive-text="dark" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  //容器内的项目会在水平方向上均匀分布（第一个项目贴左，最后一个项目贴右）。
  justify-content: space-between;
  //同时，所有项目都会在垂直方向上居中对齐。
  align-items: center;

  .left {
    width: 20%;

    .logo {
      width: 3rem;
      height: 3rem;
      transition: all 0.3s;
    }

    .logo:hover {
      transform: rotate(180deg);
    }
  }

  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.menu-icon {
  margin-right: 0.2rem;
  width: 1rem;
  height: 1rem;
}
</style>
