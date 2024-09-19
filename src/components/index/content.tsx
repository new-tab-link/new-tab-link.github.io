import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

export const IndexContent = () => {
    const d = __filename
    console.log('dddddddddddd', d)
    const { t } = useTranslation("doc__components__index")
    return (
     <div>
  
  <div>
        <Link href={"/about"} >xffdd</Link>
        <span>空格</span>
        <Link href={"/post"} >ddddd1</Link>
  
        <Trans i18nKey={"name"} ns="doc__components__index">
  
        </Trans>
        <div>h22hh2{t('title', { ns: "doc__components__index" })}</div>
      </div>
     </div>
    )
  };