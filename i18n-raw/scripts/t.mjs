
import { googleGeminiIntersectionEn } from "@0xff336699/js-i18n-lngs";


import path from "path";
import { fileURLToPath } from 'url';
import {transMulti, createMultiConf} from '@0xff336699/js-i18n-translator'

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); 
const lng = 'zh-CN'
function createConf(){
    // const root = `C:\\work\\chrome-extenstions\\open-links\\new-tab-link.github.io`
    const root = path.join(__dirname, "../../")
    const i18nRaw = `i18n-raw`
    const pub = `public/locales/doc`
    const transConfTemplate = {
        folderWithLng: true,
        templateFileLanguage: lng,
        translaterSupportLngMap: googleGeminiIntersectionEn,
        appSupportLngMap: googleGeminiIntersectionEn,
        fromLng: lng,
        translatorType: 'google',
        savePrevFile:true,
        exportFileName:'content'
    }
    const conf = createMultiConf(root, i18nRaw, pub, {transConfTemplate})
    return conf
}

async function main() {
    const multi = createConf()
    await transMulti(multi)
    console.log('totally complete')
}

main()