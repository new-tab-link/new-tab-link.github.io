
import "i18next";
import type doc__components__index from '../../i18n-raw/origin/components/index/content.json'
import type doc__pages__about from '../../i18n-raw/origin/pages/about/content.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      doc__components__index:typeof doc__components__index,
      doc__pages__about:typeof doc__pages__about
    }
  }
}

    