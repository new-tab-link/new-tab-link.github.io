
import "i18next";
import type doc__components__doc___parts__global from '../../i18n-raw/origin/components/doc-parts/global/content.json'
import type doc__components__index from '../../i18n-raw/origin/components/index/content.json'
import type doc__components__language___selector from '../../i18n-raw/origin/components/language-selector/content.json'
import type doc__pages__about from '../../i18n-raw/origin/pages/about/content.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      doc__components__doc___parts__global:typeof doc__components__doc___parts__global,
      doc__components__index:typeof doc__components__index,
      doc__components__language___selector:typeof doc__components__language___selector,
      doc__pages__about:typeof doc__pages__about
    }
  }
}

    