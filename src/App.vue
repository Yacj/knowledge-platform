<script setup>
import { getFormatDate } from '@/util/day'

const isRouterAlive = ref(true)

import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()
const theme = settingsStore.theme
const { h } = getFormatDate()

// 根据时间判断深色
if (h >= 6 && h <= 18) {
    settingsStore.setTheme('light')
} else {
    settingsStore.setTheme('dark')
}

provide('reload', reload)
function reload() {
    isRouterAlive.value = false
    nextTick(() => (isRouterAlive.value = true))
}
watch(() => theme, () => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.add('dark')
    }
}, {
    immediate: true
})

watch(() => settingsStore.title, () => {
    let title = settingsStore.title
    document.title = title ? `${title} - ${import.meta.env.VITE_APP_TITLE}` : import.meta.env.VITE_APP_TITLE
}, {
    immediate: true
})
</script>

<template>
    <van-config-provider :theme="settingsStore.theme">
        <RouterView v-if="isRouterAlive" />
    </van-config-provider>
</template>
