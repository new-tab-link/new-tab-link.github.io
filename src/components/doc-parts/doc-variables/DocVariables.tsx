import { Box } from "@mui/material";
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation";
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu";
import { DocTitle } from "@src/components/doc-components/title/DocTitle";
import { Trans, useTranslation } from "react-i18next";

const anchorDocVariables = 'doc-variables'
function Menu() {
    const { t } = useTranslation('doc/components/doc-parts/doc-variables/content')
    return (
        <MenuAnchorComponent anchor={anchorDocVariables}>
            {t('menu.main')}
        </MenuAnchorComponent>
    )
}

function ReturnVariables() {
    const { t } = useTranslation('doc/components/doc-parts/doc-variables/content')
    return (
        <Box>
            <Trans t={t} i18nKey="doc.returnVariables.title"></Trans>
            <ul>
                <li><span className="doc-variable-text">rightTab</span><Trans t={t} i18nKey="doc.returnVariables.rightTab"></Trans></li>
                <li><span className="doc-variable-text">leftTab</span><Trans t={t} i18nKey="doc.returnVariables.leftTab"></Trans></li>
                <li><span className="doc-variable-text">currentWindow</span><Trans t={t} i18nKey="doc.returnVariables.currentWindow"></Trans></li>
                <li><span className="doc-variable-text">newWindow</span><Trans t={t} i18nKey="doc.returnVariables.newWindow"></Trans></li>
                <li><span className="doc-variable-text">incognitoWindow</span><Trans t={t} i18nKey="doc.returnVariables.incognitoWindow"></Trans></li>
                <li><span className="doc-variable-text">popupWindow</span><Trans t={t} i18nKey="doc.returnVariables.popupWindow"></Trans></li>
            </ul>
        </Box>
    )
}

function Variables() {
    const { t } = useTranslation('doc/components/doc-parts/doc-variables/content')
    return (
        <Box>
            <div><Trans t={t} i18nKey="doc.title"></Trans></div>
            <ul>
                <li><span className="doc-variable-text">click</span><Trans t={t} i18nKey="doc.click"
                    components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }}></Trans></li>
                <li><span className="doc-variable-text">page</span><Trans t={t} i18nKey="doc.page"
                    components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }}></Trans></li>
                <li><span className="doc-variable-text">isSameDomain</span><Trans t={t} i18nKey="doc.isSameDomain" components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }} values={{ "_true_": "true", "_false_": "false" }}></Trans></li>
                <li><span className="doc-variable-text">isSameParent</span><Trans t={t} i18nKey="doc.isSameParent" components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }} values={{ "_true_": "true", "_false_": "false" }}></Trans></li>
                <li><span className="doc-variable-text">isPageSub</span><Trans t={t} i18nKey="doc.isPageSublink" values={{ "_true_": "true", "_false_": "false" }}></Trans></li>
                <li><span className="doc-variable-text">isPageInfinity</span><Trans t={t} i18nKey="doc.isPageMultilevelSublink" values={{ "_true_": "true", "_false_": "false" }}></Trans></li>
                <li><span className="doc-variable-text">isClickSub</span><Trans t={t} i18nKey="doc.isClickSublink" values={{ "_true_": "true", "_false_": "false" }}></Trans></li>
                <li><span className="doc-variable-text">isClickInfinity</span><Trans t={t} i18nKey="doc.isClickMultilevelSublink" values={{ "_true_": "true", "_false_": "false" }}></Trans></li>
            </ul>
        </Box>
    )
}

function Doc() {
    const { t } = useTranslation('doc/components/doc-parts/doc-variables/content')
    return (

        <AnchorAnimation anchor={anchorDocVariables}>
            <DocTitle>{t('doc.title')}</DocTitle>
            <Variables />
            <ReturnVariables />
        </AnchorAnimation>
    )
}

export const DocVariables = {
    Menu, Doc, Variables, ReturnVariables
}