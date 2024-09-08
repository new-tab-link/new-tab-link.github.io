
import i18n from "@src/i18nconf/i18nSetting";
import Link from "next/link";
import { Suspense } from "react";
import { I18nextProvider, Trans } from "react-i18next";
import { useTranslation } from "next-i18next";
import NoSsr from "@src/libs/fanfanlo/nextjs/loader/NoSsr";

export const IndexContent = () => {
  const d = __filename
  const { t } = useTranslation("ns2")
  return (
    <div>

      <div>
        <Link href={"/about"} >xffdd</Link>
        <span>空格</span>
        <Link href={"/post"} >ddddd1</Link>

        <Trans i18nKey={"d.e"} ns="ns2">

        </Trans>
        <div>h22hh2{t('whatAmazing.a', { ns: "ns2" })}</div>
      </div>
    </div>
  )
};
function Index() {

  return (
    <Suspense fallback={<div>lllloading</div>}>
      <I18nextProvider i18n={i18n} defaultNS={["ns1"]}>
        <NoSsr>
          <IndexContent />
        </NoSsr>
      </I18nextProvider>
    </Suspense>
  )
}
export default Index;
