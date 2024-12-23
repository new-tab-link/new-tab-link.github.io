import { Box } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"

const anchor = 'link-server'

function Menu(){
    const { t } = useTranslation('doc/components/doc-parts/link-server/content')
    return <MenuAnchorComponent anchor={anchor}>
        {t('menu.main')}
    </MenuAnchorComponent>
}

function Doc(){
    const { t } = useTranslation('doc/components/doc-parts/link-server/content')
    return <AnchorAnimation anchor={anchor}>
        <Box>
            <DocTitle>{t('doc.title')}</DocTitle>
        </Box>
        <Box>
            {t('doc.description')}
        </Box>
        <Box>
            <Box>
            {t('doc.service.title')}
            <a href="https://github.com/new-tab-link/go-external/releases" target="_blank">
                {t('doc.service.linkName')}
            </a>
            </Box>
            <Box>
                
            <Trans t={t} 
            i18nKey="doc.service.linkExplain" values={{"0":"golang"}}></Trans>
            <a href="https://github.com/new-tab-link/go-external" target="_blank">
                {t('doc.service.sourceLink')}
            </a>
            </Box>
        </Box>
        <Box>
            <Box>
                <Trans t={t} i18nKey="doc.sendParams.title" values={{"0":"POST"}}></Trans>
            </Box>
            <Box>
                <pre>
                    {"{"}<br/>
                        <span style={{marginLeft:"2rem"}}>
                        "page":"https://www.youtube.com/",//{t('doc.sendParams.page')}
                        </span>
                        <br/>
                        <span style={{marginLeft:"2rem"}}>
                        "link":"https://www.youtube.com/feed/you"//{t('doc.sendParams.link')}
                        </span>
                        <br/>
                    {"}"}
                </pre>
            </Box>
        </Box>
    </AnchorAnimation>  
}

export const DocLinkServer = {
    Menu,
    Doc
}