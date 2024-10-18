
import { useTranslation } from "react-i18next"
import i18next from "i18next"

export default function About(){

    const {t} = useTranslation()
    t('doc/pages/about/content:about.title')
    t('doc/pages/about/content.about.title')
    t('content:content.name')
    i18next
    return (
        <div>
            <div>{t('content:name')}</div>
            <div>{t('content:name', {ns:'doc/pages/about/content'})}</div>
        </div>
    )
} 