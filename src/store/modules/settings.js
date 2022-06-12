const useSettingsStore = defineStore(
    // 唯一ID
    'settings',
    {
        state: () => ({
            title: '',
            theme: ''
        }),
        actions: {
            // 设置网页标题
            setTitle(title) {
                this.title = title
            },
            // 设置深色或者浅色主题
            setTheme(theme) {
                console.log(theme)
                this.theme = theme
            }
        }
    }
)

export default useSettingsStore
