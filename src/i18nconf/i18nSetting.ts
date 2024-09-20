"use client";
import { initReactI18next } from "react-i18next";
// import zhCN from './locales/zh-CN.json';
// import en from './locales/messages.json';
import _ from "lodash";
import { i18nResource } from "./resource";
import { Resource } from "i18next/typescript/options";

import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import i18next from "i18next";
import { Log } from "@src/libs/fanfanlo";
type II18n = typeof i18nResource;

const isProduction = process.env.NODE_ENV === "production";
const isBrowser = () => typeof window !== "undefined";
export const i18nLogger = new Log(false, `i18n`);
const backendOptions = {
  // loadPath: '/_locales/{{lng}}/messages.json',
  loadPath: function (lngs: string[], namespaces: string[]) {
    const log = i18nLogger.sub(false, `i18n loadpath`);
    // log.pause = true;
    let lng = lngs[0]
    lng = 'zh-CN'
    let p = `/options/_locales/${lngs[0].replace("-", "_")}/messages.json`;
    p = `/locales/zh-CN/ns1/content.json`;
    p = `locales/${lng}/${namespaces[0].replaceAll('___', '-').replaceAll("__", "/")}/content.json`
    // if (isProduction) {
    //   if (typeof window !== "undefined") {
    //     const url = new URL(window.location.href);
    //     p = `${url.protocol}://${url.hostname}:${url.port}${p}`;
    //   }
    // }
    // log.print(`backend loadpath arguments444455`, lngs, namespaces, p);
    log.log(`lngs=`, lngs);
    log.log(`namespaces=`, namespaces);
    log.log("p=", p);
    // console.log(`i18n backend loadpath`, lngs, namespaces);
    return p;
  },
  parse: function (
    data: string,
    languages?: string | string[],
    namespaces?: string | string[]
  ) {
    const log = i18nLogger.sub(false, `i18n backend parse`);
    log.pause = true;
    // log.log(`parrrse`, data, languages, namespaces);
    const l = JSON.parse(data);
    log.print(`before set i18ndata`, i18nData);
    i18nData = l as II18n;
    // log.log(`i18nData.rule.scripts.sys.rules`, i18nData.rule.scripts.sys.rules);
    log.log(`parrrse`, languages, namespaces, i18nData);
    return l;
  },
};
const backend = new Backend();
backend.init(null, backendOptions);
const i18n = i18next;
export const resources: Resource = {
  // 'zh-CN': {
  //   translation: _.merge({}, zhCN),
  // },
  // en: {
  //   translation: _.merge({}, en),
  // },
};

// export let i18nData: II18n;
export let i18nData: II18n; //= zhCN;
i18n.on("languageChanged", async function (lng) {
  const log = i18nLogger.sub(false, `onlanguageChanged`);
  // log.pause = true;
  log.log(`lllllng`, lng);
  lng = "en";
  const p = `/options/_locales/${lng.replace("-", "_")}/messages.json`;
});
i18n
  .use(LanguageDetector)
  .use(backend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    load: "currentOnly",
    // supportedLngs: ['zh-CN', 'zh-TW', 'en', 'en-GB', 'ja'],
    // resources,
    // fallbackLng: "en",
    // lng: "zh-CN",
    partialBundledLanguages:true,
    ns:[],
    
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      caches: ["localStorage"],
    },
  });

i18n.on("missingKey", function (lngs, namespace, key, res) {
  console.error(
    "i18n mssing key, lngs=%s, namespace=%s, key=%s, res=%s",
    lngs,
    namespace,
    key,
    res
  );
});

i18n.on("loaded", function (loaded) {
  const log = i18nLogger.sub(false, `onloaded`);
  // log.pause = true;
  log.log(`onloaded arguments`, loaded);
});

i18n.on("failedLoading", function (lng, ns, msg) {
  const log = i18nLogger.sub(false, `onfailedLoading`);
  log.log(`failedLoading arguments`, lng, ns, msg);
});

export default i18n;
