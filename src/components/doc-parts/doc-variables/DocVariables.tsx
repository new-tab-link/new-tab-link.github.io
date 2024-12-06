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
                <Box>
                    <Box>
                        <Trans t={t} i18nKey="doc.returnVariables.window.title"></Trans>
                    </Box>
                    <ul>
                        <li>
                            <span className="doc-variable-text">currentWindow</span><Trans t={t} i18nKey="doc.returnVariables.window.currentWindow"></Trans>
                        </li>
                        <li>
                            <span className="doc-variable-text">newWindow</span><Trans t={t} i18nKey="doc.returnVariables.window.newWindow"></Trans>
                        </li>
                        <li>
                            <span className="doc-variable-text">incognitoWindow</span><Trans t={t} i18nKey="doc.returnVariables.window.incognitoWindow"></Trans>
                        </li>
                        <li>
                            <span className="doc-variable-text">popupWindow</span><Trans t={t} i18nKey="doc.returnVariables.window.popupWindow"></Trans>
                        </li>
                        <li>
                            <span className="doc-variable-text">externalBrowser</span><Trans t={t} 
                            values={{tt:"tor"}}
                            i18nKey="doc.returnVariables.window.externalBrowser"></Trans>
                        </li>
                    </ul>
                </Box>
                <Box>
                    <Box>
                        <Trans t={t} i18nKey="doc.returnVariables.tab.title"></Trans>
                    </Box>
                    <ul>
                        <li>
                            <span className="doc-variable-text">rightTab</span><Trans t={t} i18nKey="doc.returnVariables.tab.rightTab"></Trans>
                        </li>
                        <li>
                            <span className="doc-variable-text">leftTab</span><Trans t={t} i18nKey="doc.returnVariables.tab.leftTab"></Trans>
                        </li>
                        <li>
                            <span className="doc-variable-text">currentTab</span><Trans t={t} i18nKey="doc.returnVariables.tab.currentTab"></Trans>
                        </li>
                    </ul>
                </Box>
                <Box>
                    <Box>
                        <Trans t={t} i18nKey="doc.returnVariables.active.title"></Trans>
                    </Box>
                    <ul>
                        <li>
                            <span className="doc-variable-text">active</span><Trans t={t} i18nKey="doc.returnVariables.active.active"></Trans>
                        </li>
                        <li>
                            <span className="doc-variable-text">inactive</span><Trans t={t} i18nKey="doc.returnVariables.active.inactive"></Trans>
                        </li>
                    </ul>
                </Box>
            </ul>
        </Box>
    )
}

function Functions() {
    const { t } = useTranslation('doc/components/doc-parts/doc-variables/content')
    return (
        <Box>
            <Box>   
                <Trans t={t} i18nKey="doc.functions.title"></Trans>
            </Box>
            <ul>
                <li><span className="doc-variable-text">minimatch</span><Trans t={t} i18nKey="doc.functions.minimatch" 
                values={{"gg":"glob","mm":"minimatch"}}
                components={{ a: <a href="https://github.com/isaacs/minimatch" target="_blank" rel="noreferrer" />}}></Trans></li>
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
                <li><span className="doc-variable-text">page</span><Trans t={t} i18nKey="doc.page"
                    components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }}></Trans></li>

                <li><span className="doc-variable-text">click</span><Trans t={t} i18nKey="doc.click"
                    components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }}></Trans></li>

                <li><span className="doc-variable-text">pageHost</span><Trans t={t} i18nKey="doc.pageHost"></Trans></li>

                <li><span className="doc-variable-text">clickpath</span><Trans t={t} i18nKey="doc.clickpath"></Trans></li>


                <li><span className="doc-variable-text">isSameDomain</span><Trans t={t} i18nKey="doc.isSameDomain" 
                components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }} values={{ "tt": "true", "ff": "false" }}></Trans></li>

                <li><span className="doc-variable-text">isSameSubDomain</span><Trans t={t} i18nKey="doc.isSameSubDomain" 
                values={{"ss":"isSameSubDomain","yy":"www.youtube.com","ff":"families.youtube.com",
                    "mm":"youtube.com", "ww":"www", "ffss":"families"}}
                components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }} ></Trans></li>

                <li><span className="doc-variable-text">isSameParent</span><Trans t={t} i18nKey="doc.isSameParent" components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }} values={{ "tt": "true", "ff": "false" }}></Trans></li>

                <li><span className="doc-variable-text">isPageSublink</span><Trans t={t} i18nKey="doc.isPageSublink" values={{ "tt": "true", "ff": "false" }}></Trans></li>

                <li><span className="doc-variable-text">isPageMultilevelSublink</span><Trans t={t} i18nKey="doc.isPageMultilevelSublink" values={{ "tt": "true", "ff": "false" }}></Trans></li>
                
                <li><span className="doc-variable-text">isClickSublink</span><Trans t={t} i18nKey="doc.isClickSublink" values={{ "tt": "true", "ff": "false" }}></Trans></li>

                <li><span className="doc-variable-text">isClickMultilevelSublink</span><Trans t={t} i18nKey="doc.isClickMultilevelSublink" values={{ "tt": "true", "ff": "false" }}></Trans></li>
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
            <Functions />
        </AnchorAnimation>
    )
}

export const DocVariables = {
    Menu, Doc, Variables, ReturnVariables,  Functions
}