import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export const IndexContent = () => {
    const d = __filename
    console.log('dddddddddddd', d)
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