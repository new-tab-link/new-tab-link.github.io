'use client'

import { I18nextProvider, useTranslation } from 'react-i18next';
import i18nInstance from '../i18nconf/i18nInstance';
export default function About(){
    interface xx {
        a:string
        b:string
    }
    type xt = keyof xx
    const o = {f:"d"}

    const {t} = useTranslation()
    return (
        <I18nextProvider i18n={i18nInstance} defaultNS={["post"]}>
            <div>h22hh{t('f')}</div>
        </I18nextProvider>
    )
}