
import "i18next";
import type doc__components__doc___parts__all___links from '../../i18n-raw/origin/components/doc-parts/all-links/content.json'
import type doc__components__doc___parts__global from '../../i18n-raw/origin/components/doc-parts/global/content.json'
import type doc__components__doc___parts__overview from '../../i18n-raw/origin/components/doc-parts/overview/content.json'
import type doc__components__doc___parts__variables from '../../i18n-raw/origin/components/doc-parts/variables/content.json'
import type doc__components__index from '../../i18n-raw/origin/components/index/content.json'
import type doc__components__language___selector from '../../i18n-raw/origin/components/language-selector/content.json'
import type doc__components__theme___model from '../../i18n-raw/origin/components/theme-model/content.json'
import type doc__pages__about from '../../i18n-raw/origin/pages/about/content.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      ["doc/components/doc-parts/all-links/content"]: typeof doc__components__doc___parts__all___links,
      ["doc/components/doc-parts/global/content"]: typeof doc__components__doc___parts__global,
      ["doc/components/doc-parts/overview/content"]: typeof doc__components__doc___parts__overview,
      ["doc/components/doc-parts/variables/content"]: typeof doc__components__doc___parts__variables,
      ["doc/components/index/content"]: typeof doc__components__index,
      ["doc/components/language-selector/content"]: typeof doc__components__language___selector,
      ["doc/components/theme-model/content"]: typeof doc__components__theme___model,
      ["doc/pages/about/content"]: typeof doc__pages__about
    }
  }
}

    