<template>
    <div class="home mt-2">
        <div class="home-search mb-3">
            <van-search shape="round" placeholder="请输入您想要找到课程名称" background="none" />
        </div>
        <div class="home-wrapper px-3">
            <div class="swipe  mb-3">
                <van-swipe :autoplay="3000" lazy-render>
                    <van-swipe-item v-for="item in bannersList" :key="item.pic">
                        <img :src="item.pic" alt="" class="w100% h45 rounded-lg">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="recommend  mb-3">
                <van-grid :column-num="5" :border="false">
                    <van-grid-item v-for="item in recommendList" :key="item.id">
                        <van-image
                            :src="item.icon"
                            width="47"
                            height="47"
                        />
                        <span class="text mt-3">  {{ item.title }}</span>
                    </van-grid-item>
                </van-grid>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { homeService } from '@/api/modules/home'

let bannersList = ref([])
const recommendList = ref([])

const getHomeData = () => {
    homeService.get_banner().then(res => {
        bannersList.value = res.data
    })
    homeService.get_recommend().then(res => {
        recommendList.value = res.data
    })
}

getHomeData()
</script>

<style scoped lang="scss">
.recommend {
    .text {
        font-size: 13px;
    }
}
::v-deep(.van-grid-item__content--center){
    padding-bottom: 0 !important;
}
</style>
