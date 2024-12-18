import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { useTranslation } from "react-i18next"

const anchor = "rule-sort"

function Menu() {
    const { t } = useTranslation("doc/components/doc-parts/rule-sort/content")
    return <MenuAnchorComponent anchor={anchor}>
        {t("menu.main")}
    </MenuAnchorComponent>
}

function Doc() {
    const { t } = useTranslation("doc/components/doc-parts/rule-sort/content")
    return <div>
        <h1>{t("doc.title")}</h1>
        <p>{t("doc.drag")}</p>
    </div>
}

export const DocRuleSort = {
    Menu,
    Doc
}