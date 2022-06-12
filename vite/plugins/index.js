import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import createRestart from './restart'
import createHtml from './html'
import createAutoImport from './auto-import'
import createComponents from './components'
import createSetupExtend from './setup-extend'
import createSvgIcon from './svg-icon'
import createMock from './mock'
import createLayouts from './layouts'
import createPages from './pages'
import createCompression from './compression'
import createSpritesmith from './spritesmith'
import createBanner from './banner'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import {
    createStyleImportPlugin,
    VantResolve
} from 'vite-plugin-style-import'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [
        vue(),
        vueJsx(),
        Unocss({
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons()]
        }),
        Components({
            resolvers: [VantResolver()]
        }),
        createStyleImportPlugin({
            resolves: [
                VantResolve()
            ]
        })
    ]
    !isBuild && vitePlugins.push(createRestart())
    vitePlugins.push(createHtml(viteEnv, isBuild))
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createComponents())
    vitePlugins.push(createSetupExtend())
    vitePlugins.push(createSvgIcon(isBuild))
    vitePlugins.push(createMock(viteEnv, isBuild))
    vitePlugins.push(createLayouts())
    vitePlugins.push(createPages())
    isBuild && vitePlugins.push(...createCompression(viteEnv))
    vitePlugins.push(...createSpritesmith(isBuild))
    vitePlugins.push(createBanner())
    return vitePlugins
}
