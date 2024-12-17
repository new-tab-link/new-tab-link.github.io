import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"


const anchor = 'export-rules'

function Menu() {
    const { t } = useTranslation('doc/components/doc-parts/export/content')
    return <MenuAnchorComponent anchor={anchor}>
        {t('menu.main')}
    </MenuAnchorComponent>

}

function Doc() {
    const { t } = useTranslation('doc/components/doc-parts/export/content')
    return (
        <AnchorAnimation anchor={anchor}>
            <DocTitle>{t('doc.title')}</DocTitle>
            <Box>
                <img className="autoImage" src={`/images/en/export.jpg`} />
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
                        <Trans t={t} i18nKey="doc.exportFile"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.copyDataToClipboard"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.selectedRule"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.selectedCode"></Trans>
                    </Box>
                </li>
            </ol>
        </AnchorAnimation>
    )
}

export const DocExport = {
    Menu,
    Doc
}