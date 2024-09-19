
import { useTranslation } from "react-i18next"
import i18next from "i18next"

export default function About(){

    const {t} = useTranslation()
    t('title')
    t('name')
    i18next
    return (
        <div>
            <div>{t('name')}</div>
        </div>
    )
}