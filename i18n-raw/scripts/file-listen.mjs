
import { i18nFileDetectorVersion, watchI18nFiles } from "@0xff336699/js-i18n-files-detector"
import path from 'path'
import fs from 'fs'

// const projectRoot = `C:\\work\\js\\fanfanlo\\test\\`
// const projectRoot = `C:\\work\\chrome-extenstions\\new-tab-link-doc\\`
const projectRoot = process.cwd()
const nsPrefixPath = 'doc'
const conf = {
    // watchRoot: "C:\\work\\tools\\nodejs\\js-i18n-file-detector\\pages\\i18n-file-detector\\src",
    // exportRoot: "C:\\work\\tools\\nodejs\\js-i18n-file-detector\\pages\\i18n-file-detector\\i18nMergedFiles\\origin",
    // i18nFileName: "C:\\work\\tools\\nodejs\\js-i18n-file-detector\\pages\\i18n-file-detector\\src\\types\\i18n.ts",
    // watchRoot: [{root:`${projectRoot}src`, nsPrefixPath:nsPrefixPath}],
    watchRoot: [{root:path.resolve(path.join(projectRoot, 'src')), nsPrefixPath:nsPrefixPath}],
    // exportRoot: [`${projectRoot}i18n-raw\\origin`, `${projectRoot}public\\locales\\zh-CN\\${nsPrefixPath}`],
    exportRoot: [path.resolve(path.join(projectRoot, 'i18n-raw', 'origin')), path.resolve(path.join(projectRoot, 'public', 'locales','zh-CN', nsPrefixPath))],
    // i18nFileName: `${projectRoot}src\\types\\i18n.ts`,
    i18nFileName: path.resolve(path.join(projectRoot, `src\\types\\i18n.ts`)),
    matchFile: "**/**.i18n.json",
    mergeFolderToNs: true,
    i18nResourcesImportFileRoot: "../../i18n-raw/origin",
    folderFileName: "content.json",
    onChanged:onChanged
    // nsPrefixPath: nsPrefixPath
}
// C:\work\tools\nodejs\js-i18n-file-detector\pages\testdata\01\app\zh-CN\about
function onChanged(){
    console.log(`pppppppppppppppppppppppppppp`)
    const content = `
    export const i18nFileVersion = "${Date.now()}"
    `
    const p = path.resolve(path.join(projectRoot, 'src', 'i18nconf', 'i18nFileVersion.ts'))
    fs.writeFileSync(p, content)
    console.log(`i18nFileVersion file exported`,p, content)
}

function listen(){
    // console.log(lngsMapLocale, jsI18nLngsVersion)
    watchI18nFiles([], [conf])
    console.log(`conf=`, i18nFileDetectorVersion, conf)
}
listen()