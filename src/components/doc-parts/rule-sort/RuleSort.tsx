import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"

const anchor = "rule-sort"

function Menu() {
    const { t } = useTranslation("doc/components/doc-parts/rule-sort/content")
    return <MenuAnchorComponent anchor={anchor}>
        {t("menu.main")}
    </MenuAnchorComponent>
}

function Doc() {
    const { t } = useTranslation("doc/components/doc-parts/rule-sort/content")
    return <AnchorAnimation anchor={anchor}>
            <DocTitle>{t("doc.title")}</DocTitle>
            <Box>
                <img className="autoImage" src={`/images/en/rule-sort.jpg`} />
        </Box>
        <ol style={{ "paddingInlineStart": "1rem" }}>
            <li>
                <Box>
                    <Trans t={t} i18nKey="doc.drag"></Trans>
                </Box>
            </li>
        </ol>
        
    </AnchorAnimation>
}

export const DocRuleSort = {
    Menu,
    Doc
}