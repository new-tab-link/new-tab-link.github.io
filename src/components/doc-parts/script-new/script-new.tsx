import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"

const anchor = "script-new"

function Menu() {
    const { t } = useTranslation("doc/components/doc-parts/script-new/content")
    return <MenuAnchorComponent anchor={anchor}>
        {t("menu.main")}
    </MenuAnchorComponent>
}

function Doc() {
    const { t } = useTranslation("doc/components/doc-parts/script-new/content")
    return <AnchorAnimation anchor={anchor}>
        <Box>
            <DocTitle>{t("doc.title")}</DocTitle>
            <Box>
                <img className="autoImage" src={`/images/en/configuration-script-new.jpg`} />
            </Box>
            <ol style={{ "paddingInlineStart": "1rem" }}>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.name.title"></Trans>
                        <Trans t={t} i18nKey="doc.name.explain"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.script.title"></Trans>
                        <Trans t={t} i18nKey="doc.script.explain"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.delBtn.title"></Trans>
                        <Trans t={t} i18nKey="doc.delBtn.explain"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.saveBtn.title"></Trans>
                        <Trans t={t} i18nKey="doc.saveBtn.explain"></Trans>
                    </Box>
                </li>
            </ol>
        </Box>
    </AnchorAnimation>
}

export const DocScriptNew = {
    Menu,
    Doc
}
