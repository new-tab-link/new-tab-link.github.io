import { useTranslation } from "react-i18next"

export function Friends(){
    const {t} = useTranslation(['doc/components/doc-parts/global/x/content'])
    t('friends.fav', {ns:'doc/components/doc-parts/global/x/content'})
    return(
        <>
        <div>here{t('friends.fav')}you</div>
        </>
    )
}