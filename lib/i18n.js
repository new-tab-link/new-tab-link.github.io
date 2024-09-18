import { createContext, useState, useRef, useEffect } from "react";
import rosetta from "rosetta";
import zh from '../locales/zh.json'
import en from '../locales/en.json'
import de from '../locales/de.json'
import i18next from "i18next";
// import rosetta from 'rosetta/debug';

// const i18n = rosetta();
const resources = {
  zh:{
    translation:zh
  },
  en:{
    translation:en
  },
  de:{
    translation:de
  },
}
i18next.init({resources})
const i18n = i18next


export const defaultLanguage = "en";
export const languages = ["de", "en", "zh"];
export const contentLanguageMap = { de: "de-DE", en: "en-US", zh:"zh-CN" };

export const I18nContext = createContext();

// default language
// i18n.locale(defaultLanguage);
i18n.changeLanguage(defaultLanguage)

export default function I18n({ children, locale, lngDict }) {
  const activeLocaleRef = useRef(locale || defaultLanguage);
  const [, setTick] = useState(0);
  const firstRender = useRef(true);

  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    t: (...args) => i18n.t(...args),
    locale: (l, dict) => {
      console.log('locale set', l, dict)
      // i18n.locale(l);
      i18n.changeLanguage(l)
      activeLocaleRef.current = l;
      if (dict) {
        // i18n.set(l, dict);
        // i18n.set
      }
      // force rerender to update view
      setTick((tick) => tick + 1);
    },
  };

  // for initial SSR render
  if (locale && firstRender.current === true) {
    firstRender.current = false;
    i18nWrapper.locale(locale, lngDict);
  }

  // when locale is updated
  useEffect(() => {
    if (locale) {
      i18nWrapper.locale(locale, lngDict);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lngDict, locale]);

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  );
}
