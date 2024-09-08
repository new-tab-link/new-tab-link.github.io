
import { useTranslation } from "react-i18next"
import i18next from "i18next"

export default function About(){

    const {t} = useTranslation('ns1')
    t('a')
    t('a')
    i18next
    return (
        <div>
            <div>{t('a')}</div>
        </div>
    )
}