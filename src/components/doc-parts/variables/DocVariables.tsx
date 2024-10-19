import { ListItem, ListItemButton, ListItemText, Stack } from "@mui/material"
import { TypeSetAnchor } from "@src/libs/fanfanlo/html/anchor/IAnchor"
import { useTranslation } from "react-i18next"

const anchorVariables = `variables`
function Menu({ setAnchor }: { setAnchor: TypeSetAnchor }){
    const { t } = useTranslation("doc/components/doc-parts/variables/content")
    
    return (
        <ListItem>
            <ListItemButton onClick={() => { console.log('clicked'); setAnchor(anchorVariables) }}>
                <ListItemText >
                    {t('menu.main')}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

function Doc(){
    const { t } = useTranslation("doc/components/doc-parts/variables/content")
    return (
        <>
        <Stack direction={"column"} spacing={1}>
            <h2 id={anchorVariables}>{t('doc.title')}</h2>
        </Stack>
        </>
    )
}

export const DocVariables = {
    Menu,
    Doc
}
