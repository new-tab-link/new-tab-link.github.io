import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"
import { DocVariables } from "../doc-variables/DocVariables"

const anchorGlobalScript = 'global-script'

function Menu(){
    const {t} = useTranslation("doc/components/doc-parts/global-script/content")
    return (
        <MenuAnchorComponent anchor={anchorGlobalScript}>
            {t("menu.main")}
        </MenuAnchorComponent>
    )
}

function Doc(){
    const {t} = useTranslation("doc/components/doc-parts/global-script/content")
    return (
        <AnchorAnimation anchor={anchorGlobalScript} >
            <Box>
                <DocTitle>{t("doc.title")}</DocTitle>
            </Box>
            <div>
                <img className="autoImage" src={`/images/en/configuration-global-script.jpg`} />
            </div>
            <ol style={{ "paddingInlineStart": "1rem" }}>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.checkedUseSetting"></Trans>
                    </Box>
                </li>
                <li>
                    <DocVariables.Doc />
                </li>
            </ol>

        </AnchorAnimation>
    )
}

export const DocGlobalScript={
    Doc, Menu
}