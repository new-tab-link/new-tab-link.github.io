import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { localeTransitions } from "./loadLangsToResouerce.ts";

const i18nInstance = i18n.createInstance();

i18nInstance
  // 这里就不能初始化 reactI18next 了
  // .use(initReactI18next)
  .init({
    // ns: Object.keys(localeTransitions),
    // resources: localeTransitions,
    //  默认语言
    lng: "zh-CN",
  });

export default i18nInstance;