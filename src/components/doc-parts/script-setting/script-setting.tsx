import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"

const anchor = "script-setting"

function Menu() {
    const { t } = useTranslation("doc/components/doc-parts/script-setting/content")
    return <MenuAnchorComponent anchor={anchor}>
        {t("menu.main")}
    </MenuAnchorComponent>
}

function Doc() {
    const { t } = useTranslation("doc/components/doc-parts/script-setting/content")
    return <AnchorAnimation anchor={anchor}>
        <Box>
            <DocTitle>{t("doc.title")}</DocTitle>
            <Box>
                <img className="autoImage" src={`/images/en/configuration-rule-script-setting.jpg`} />
            </Box>
            <ol style={{ "paddingInlineStart": "1rem" }}>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.enabled.title"></Trans>
                        <Trans t={t} i18nKey="doc.enabled.explain"></Trans>
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
                        <Trans t={t} i18nKey="doc.tab.title"></Trans>
                        <Trans t={t} i18nKey="doc.tab.explain"></Trans>
                        <a href="https://github.com/0xFF336699/new-tab-link/blob/main/docs/en/configuration-rule-script-setting.md#tab" target="_blank">
                        </a>
                    </Box>
                </li>
            </ol>
        </Box>
    </AnchorAnimation>
}

export const DocScriptSetting = {
    Menu,
    Doc
}