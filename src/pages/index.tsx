
import i18n from "@src/i18nconf/i18nSetting";
import Link from "next/link";
import { Suspense } from "react";
import { I18nextProvider, Trans } from "react-i18next";
import { useTranslation } from "next-i18next";
import NoSsr from "@src/libs/fanfanlo/nextjs/loader/NoSsr";
import IndexPageContent from "@src/components/index/content";

export const IndexContent = () => {
  const { t } = useTranslation("doc__components__index")
  return (
    <div>

      <div>
        <Link href={"/about"} >xffdd</Link>
        <span>空格</span>
        <Link href={"/post"} >ddddd1</Link>

        <Trans i18nKey={"tree.name"} ns="doc__components__index">

        </Trans>
        <div>h22hh2{t('tree.title', { ns: "doc__components__index" })}</div>
      </div>
    </div>
  )
};
function Index() {

  return (
    <Suspense fallback={<div>lllloading</div>}>
      <I18nextProvider i18n={i18n} defaultNS={["ns1"]}>
        <NoSsr>
          {/* <IndexContent /> */}
          <IndexPageContent />
        </NoSsr>
      </I18nextProvider>
    </Suspense>
  )
}
export default Index;
