
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu";
import { DocTitle } from "@src/components/doc-components/title/DocTitle";
import { Trans, useTranslation } from "react-i18next";

const titleAnchor = `doc-title`
function Menu(){
    const {t} = useTranslation('doc/components/doc-parts/overview/content')
    return(
        <MenuAnchorComponent anchor={titleAnchor}>
            {t('menu.main')}
        </MenuAnchorComponent>
    )
}

function Doc(){
    const {t} = useTranslation('doc/components/doc-parts/overview/content')
    return (
        <>
            <DocTitle anchor={titleAnchor}>{t('doc.title')}</DocTitle>
            <div>
                <Trans t={t} i18nKey="doc.description">

                </Trans>
            </div>
        </>
    )
}

export const DocOverview = {
    Menu,
    Doc
}