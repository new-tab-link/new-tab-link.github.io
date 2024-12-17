import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { useTranslation, Trans } from "react-i18next"


const anchor = 'import-rules'

function Menu() {
    const { t } = useTranslation('doc/components/doc-parts/import/content')
    return <MenuAnchorComponent anchor={anchor}>
        {t('menu.main')}
    </MenuAnchorComponent>

}

function Doc() {
    const { t } = useTranslation('doc/components/doc-parts/import/content')
    return (
        <AnchorAnimation anchor={anchor}>
            <DocTitle>{t('doc.title')}</DocTitle>
            <Box>
                <img className="autoImage" src={`/images/en/import-1.jpg`} />
            </Box>
            <ol style={{ "paddingInlineStart": "1rem" }}>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.fromHistory"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.pasteFromClipboard"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.loadExamples"></Trans>
                    </Box>
                </li>
            </ol>
            <Box>
                <img className="autoImage" src={`/images/en/import-2.jpg`} />
            </Box>
            <ol style={{ "paddingInlineStart": "1rem" }}>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.unselectAll"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.selectAll"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.use"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.selectedRule"></Trans>
                    </Box>
                </li>
            </ol>        
        </AnchorAnimation>
    )
}

export const DocImport = {
    Menu,
    Doc
}