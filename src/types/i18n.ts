
import "i18next";
import type doc__components__doc___parts__global__x from '../../i18n-raw/origin/components/doc-parts/global/x/content.json'
import type doc__components__doc___parts__global from '../../i18n-raw/origin/components/doc-parts/global/content.json'
import type doc__components__doc___parts__overview from '../../i18n-raw/origin/components/doc-parts/overview/content.json'
import type doc__components__index from '../../i18n-raw/origin/components/index/content.json'
import type doc__components__language___selector from '../../i18n-raw/origin/components/language-selector/content.json'
import type doc__components__theme___model from '../../i18n-raw/origin/components/theme-model/content.json'
import type doc__pages__about from '../../i18n-raw/origin/pages/about/content.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      ["doc/components/doc-parts/global/x/content"]: typeof doc__components__doc___parts__global__x,
      ["doc/components/doc-parts/global/content"]: typeof doc__components__doc___parts__global,
      ["doc/components/doc-parts/overview/content"]: typeof doc__components__doc___parts__overview,
      ["doc/components/index/content"]: typeof doc__components__index,
      ["doc/components/language-selector/content"]: typeof doc__components__language___selector,
      ["doc/components/theme-model/content"]: typeof doc__components__theme___model,
      ["doc/pages/about/content"]: typeof doc__pages__about
    }
  }
}

    