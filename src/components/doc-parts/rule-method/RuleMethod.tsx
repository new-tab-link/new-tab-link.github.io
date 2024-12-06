import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"


const anchor = `rule-method`


function Menu() {
    const { t } = useTranslation('doc/components/doc-parts/rule-method/content')
    return (
        <MenuAnchorComponent anchor={anchor}>
            {t('menu.main')}
        </MenuAnchorComponent>
    )
}


function Doc() {
    const { t } = useTranslation('doc/components/doc-parts/rule-method/content')
    return (
        <AnchorAnimation anchor={anchor}>
            <DocTitle>{t('doc.title')}</DocTitle>
            <Box>
                <img className="autoImage" src={`/images/en/configuration-rule-method.jpg`} />
            </Box>
            <ol style={{ "paddingInlineStart": "1rem" }}>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.rule.edit"></Trans>
                    </Box>
                    <Box>
                        <Trans t={t} i18nKey="doc.rule.description"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.rule.formats.title"></Trans>
                    </Box>
                    <ul>
                        <li>
                            <Box>
                                <Trans t={t} i18nKey="doc.rule.formats.url.title"></Trans>
                            </Box>
                            <Box>
                                <span>
                                    <Trans t={t} i18nKey="doc.rule.formats.url.example.as"></Trans>
                                    <span>https://www.youtube.com/watch?v=videoId</span>
                                </span>
                            </Box>
                            <Box>
                                <Trans t={t} i18nKey="doc.rule.formats.url.explain"></Trans>
                            </Box>
                        </li>
                        <li>
                            <Box>
                                <span>
                                    <Trans t={t} i18nKey="doc.rule.formats.glob.title"
                                        components={{ "a": <a href="https://github.com/isaacs/minimatch" target="_blank" rel="noreferrer" /> }}
                                        values={{ "1": "minimatch", "2": "glob" }}></Trans>
                                </span>
                            </Box>
                            <Box>
                                <Trans t={t} i18nKey="doc.rule.formats.glob.example.as"></Trans>
                                <Trans t={t} i18nKey="doc.rule.formats.glob.example.a"
                                values={{"1":"https://www.youtube.com/**"}}></Trans>
                            </Box>
                        </li>
                        <li>
                            <Box>
                                <Trans t={t} i18nKey="doc.rule.formats.regexp.title"
                                    components={{ "a": <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank" rel="noreferrer" /> }}></Trans>
                            </Box>
                        </li>
                    </ul>
                </li>
            </ol>
        </AnchorAnimation>
    )
}
export const DocRuleMethod = {
    Menu,
    Doc
}
