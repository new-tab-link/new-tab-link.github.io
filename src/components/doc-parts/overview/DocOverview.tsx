import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { TypeSetAnchor } from "@src/libs/fanfanlo/html/anchor/IAnchor";
import { Trans, useTranslation } from "react-i18next";

const titleAnchor = `doc-title`
function Menu({setAnchor}:{setAnchor:TypeSetAnchor}){
    const {t} = useTranslation('doc/components/doc-parts/overview/content')

    return(
        <ListItem>
            <ListItemButton onClick={()=>setAnchor(titleAnchor)}>
                <ListItemText>
                {t('menu.main')}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

function Doc(){
    const {t} = useTranslation('doc/components/doc-parts/overview/content')
    return (
        <>
            <div id={`${titleAnchor}`}><h2>{t('doc.title')}</h2></div>
            <div>
                <Trans t={t} i18nKey="doc.description">

                </Trans>
            </div>
        </>
    )
}

export const DocOverview = {
    Menu,
    Doc
}