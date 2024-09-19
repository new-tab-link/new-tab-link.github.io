
import { i18nFileDetectorVersion, watchI18nFiles } from "@0xff336699/js-i18n-files-detector"
import { lngsMapLocale, jsI18nLngsVersion } from "@0xff336699/js-i18n-lngs"

// const projectRoot = `C:\\work\\js\\fanfanlo\\test\\`
const projectRoot = `C:\\work\\chrome-extenstions\\new-tab-link-doc\\`
const nsPrefixPath = 'doc'
const conf = {
    // watchRoot: "C:\\work\\tools\\nodejs\\js-i18n-file-detector\\pages\\i18n-file-detector\\src",
    // exportRoot: "C:\\work\\tools\\nodejs\\js-i18n-file-detector\\pages\\i18n-file-detector\\i18nMergedFiles\\origin",
    // i18nFileName: "C:\\work\\tools\\nodejs\\js-i18n-file-detector\\pages\\i18n-file-detector\\src\\types\\i18n.ts",
    watchRoot: [{root:`${projectRoot}src`, nsPrefixPath:nsPrefixPath}],
    exportRoot: [`${projectRoot}i18n-raw\\origin`, `${projectRoot}public\\locales\\zh-CN\\${nsPrefixPath}`],
    i18nFileName: `${projectRoot}src\\types\\i18n.ts`,
    matchFile: "**/**.i18n.json",
    mergeFolderToNs: true,
    i18nResourcesImportFileRoot: "../../i18n-raw/origin",
    folderFileName: "content.json",
    // nsPrefixPath: nsPrefixPath
}
// C:\work\tools\nodejs\js-i18n-file-detector\pages\testdata\01\app\zh-CN\about


function listen(){
    // console.log(lngsMapLocale, jsI18nLngsVersion)
    watchI18nFiles([], [conf])
    console.log(`conf=`, i18nFileDetectorVersion, conf)
}
listen()