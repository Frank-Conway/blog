<script setup>
import {ref, onMounted, reactive} from "vue"
import {useRouter} from "vue-router";

import BlogImage from '../components/blog-image/index.vue'

import FaRegularListAlt from "~icons/fa-regular/list-alt"
import FaRegularBookmark from "~icons/fa-regular/bookmark"
import Fa6RegularThumbsUp from "~icons/fa6-regular/thumbs-up"
import Fa6RegularEye from "~icons/fa6-regular/eye"
import Fa6RegularCalendarDays from "~icons/fa6-regular/calendar-days"
import Fa6RegularClock from "~icons/fa6-regular/clock";

import BasilQqSolid from '~icons/basil/qq-solid'
import UilGithub from '~icons/uil/github'

import RaphaelSpeaker from '~icons/raphael/speaker';
import Fa6RegularChartBar from "~icons/fa6-regular/chart-bar";

import time1 from '@/assets/images/time.JPG'

const router = useRouter()
const gotoArticle = (id) => {
  if (!id) return;
  router.push({ path: "/article", query: { id } });
};


const articleList = ref([])
const params = reactive({
  currentPage: 1,
  pageSize: 3,
})

const staticArticleList = [
  {
    id: 1,
    title: "博客部署教程-宝塔面板",
    desc: "部署教程，记录一下",
    cover: "time1",
    createTime: "2024-05-19 19:47:44",
    updateTime: "2024-05-19 19:47:44",
    views: "1w",
    likes: "1w",
    category: "博客部署",
    tags: ["Vue", "Js"],
  },
  {
    id: 2,
    title: "博客部署教程-宝塔面板",
    desc: "部署教程，记录一下",
    cover: "time1",
    createTime: "2024-05-19 19:47:44",
    updateTime: "2024-05-19 19:47:44",
    views: "1w",
    likes: "1w",
    category: "博客部署",
    tags: ["Vue", "Js"],
  },
  {
    id: 3,
    title: "博客部署教程-宝塔面板",
    desc: "部署教程，记录一下",
    cover: "time1",
    createTime: "2024-05-19 19:47:44",
    updateTime: "2024-05-19 19:47:44",
    views: "1w",
    likes: "1w",
    category: "博客部署",
    tags: ["Vue", "Js"],
  },
  {
    id: 4,
    title: "博客部署教程-宝塔面板",
    desc: "部署教程，记录一下",
    cover: "time1",
    createTime: "2024-05-19 19:47:44",
    updateTime: "2024-05-19 19:47:44",
    views: "1w",
    likes: "1w",
    category: "博客部署",
    tags: ["Vue", "Js"],
  },
  {
    id: 5,
    title: "博客部署教程-宝塔面板",
    desc: "部署教程，记录一下",
    cover: "time1",
    createTime: "2024-05-19 19:47:44",
    updateTime: "2024-05-19 19:47:44",
    views: "1w",
    likes: "1w",
    category: "博客部署",
    tags: ["Vue", "Js"],
  },
];

const getArticleList = () => {
  const start = (params.currentPage - 1) * params.pageSize
  articleList.value = staticArticleList.slice(start, start + params.pageSize);
}

onMounted(() => {
  getArticleList();
})

const tagList = ['Django', 'Vue', 'Flask', 'Mysql', 'Docker']

</script>

<template>
  <div>
    <el-row :gutter="20">
      <el-col :sm="16" :xs="24">
        <el-card class="mb-[1.2rem]" v-for="article in articleList" :key="article.id" shadow="always">
          <div class="article-item w-[100%] md:h-[18rem] h-[24rem] flex md:flex-row flex-col">

            <div class="article-image md:w-[45%] md:h-[100%] w-[100%] h-[50%] overflow-hidden" @click="gotoArticle(article.id)">
              <BlogImage :src="time1" fit="cover" :animate="true" />
<!--              <el-image class="w-[100%] h-[100%] duration-300 hover:scale-125" fit="cover" :src="time1"></el-image>-->
            </div>

            <div class="article-content md:w-[55%] md:h-[100%] w-[100%] h-[50%] p-[1.2rem] flex flex-col justify-center ">
              <div class="title text-3xl mb-5" @click="gotoArticle(article.id)">{{ article.title }}</div>
              <div class="info text-sm mb-3 flex flex-wrap items-center">
                <div class="item mr-[0.3rem] flex items-center">
                  <Fa6RegularCalendarDays class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                  <span>发表于 {{ article.createTime }}</span>
                </div>
                <div class="item mr-[0.3rem] flex items-center">
                  <Fa6RegularClock class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                  <span>更新于 {{ article.updateTime }}</span>
                </div>
                <div class="item mr-[0.3rem] flex items-center">
                  <FaRegularListAlt class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                  <span>{{ article.category }}</span>
                </div>
                <div class="item mr-[0.3rem] flex items-center">
                  <FaRegularBookmark class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                  <span>{{ article.tags.join('、') }}</span> ｜
                </div>
                <div class="item mr-[0.3rem] flex items-center">
                  <Fa6RegularThumbsUp class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                  <span>{{ article.likes }}</span> ｜
                </div>
                <div class="item mr-[0.3rem] flex items-center">
                  <Fa6RegularEye class="w-[1rem] h-[1rem] mr-[0.2rem]"/>
                  <span>{{ article.views }}</span>
                </div>
              </div>
              <div class="desc text-xl w-[100%] overflow-hidden text-ellipsis whitespace-nowrap">
                {{ article.desc }}
              </div>
            </div>

          </div>
        </el-card>

        <div class="flex justify-center items-center">
          <el-pagination v-model:current-page="params.currentPage" v-model:page-size="params.pageSize" background
                         layout="prev, pager, next" :total="staticArticleList.length" @change="getArticleList"/>
        </div>

      </el-col>

      <el-col :sm="8" :xs="24">
        <el-card class="m-6">
          <div class="self-card w-[100%] h-[8rem] flex">
            <el-image class="w-[100%] h-[100%]" fit="cover" overflow-hidden :src="time1"></el-image>
          </div>
          <div class="info-box flex items-center p-[0.8rem]">
            <el-avatar :size="50" class="mr-[5px]">M</el-avatar>
            <div>个人博客</div>
          </div>
          <div class="say p-[0.8rem]">怅然若失</div>
          <div class="flex justify-around items-center p-[1rem]">
            <div class="item">
              <div class="title text-center">文章</div>
              <div class="value text-center">20</div>
            </div>
            <div class="item">
              <div class="title text-center">分类</div>
              <div class="value text-center">20</div>
            </div>
            <div class="item">
              <div class="title text-center">标签</div>
              <div class="value text-center">20</div>
            </div>
          </div>
          <div class="flex justify-around items-center p-[1rem]">
            <BasilQqSolid class="w-[1.8rem] h-[1.8rem]"/>
            <UilGithub class="w-[1.8rem] h-[1.8rem]"/>
          </div>
        </el-card>

        <el-card class="m-6">
          <template #header>
            <div class="flex items-center">
              <RaphaelSpeaker class="w-[2rem] h-[2rem] mr-[0.3rem]"/>
              <div class="text-xl font-bold">公告</div>
            </div>
          </template>
          <div class="p-[1rem]">你好 我有一集</div>
        </el-card>
        <el-affix style="width: inherit" :offset="60">
          <el-card class="m-6">
            <template #header>
              <div class="flex items-center">
                <FaRegularBookmark class="w-[2rem] h-[2rem] mr-[0.3rem]" />
                <div class="text-xl font-bold">标签</div>
              </div>
            </template>
            <div class="p-[1rem] flex items-center flex-wrap">
              <div class="py-[0.1rem] px-[0.3rem] bg-slate-300 mr-[0.3rem] mb-[0.3rem] rounded-md" v-for="tag in tagList" :key="tag">
                {{ tag }}
              </div>
            </div>
          </el-card>

          <el-card class="m-6">
            <template #header>
              <div class="flex items-center">
                <Fa6RegularChartBar class="w-[2rem] h-[2rem] mr-[0.3rem]" />
                <div class="text-xl font-bold">网站资讯</div>
              </div>
            </template>
            <div class="p-[1rem] flex flex-col justify-center items-center">
              <div class="item flex justify-between items-center w-[100%]">
                <div class="title text-md">文章数目</div>
                <div class="value text-md">20</div>
              </div>
              <div class="item flex justify-between items-center w-[100%]">
                <div class="title text-md">运行时间</div>
                <div class="value text-md">20天</div>
              </div>
              <div class="item flex justify-between items-center w-[100%]">
                <div class="title text-md">博客访问次数</div>
                <div class="value text-md">20w+</div>
              </div>
            </div>
          </el-card>
        </el-affix>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
