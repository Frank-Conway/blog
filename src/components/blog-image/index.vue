<script setup>
import MdiErrorOutline from "~icons/mdi/error-outline";
import SvgSpinners3DotsScale from "~icons/svg-spinners/3-dots-scale";

defineProps({
  src: {
    type: String,
    default: "",
  },
  lazy: {
    type: Boolean,
    default: true,
  },
  fit: {
    type: String,
    default: "cover",
  },
  animate: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <el-image :class="['w-[100%]', 'h-[100%]', animate ? 'duration-300 hover:scale-110' : '']" :src="src" lazy :fit="fit" v-bind="$attrs">
    <template #placeholder>
      <div class="w-[100%] h-[100%] grid place-items-center">
        <SvgSpinners3DotsScale class="w-[2rem] h-[2rem]" />
      </div>
    </template>
    <template #error>
      <div class="w-[100%] h-[100%] grid place-items-center">
        <MdiErrorOutline class="w-[2rem] h-[2rem]" />
      </div>
    </template>
  </el-image>
</template>
