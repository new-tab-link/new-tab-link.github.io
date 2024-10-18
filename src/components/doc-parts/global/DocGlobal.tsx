import { Box, Stack } from "@mui/material";
import { TypeSetAnchor } from "@src/libs/fanfanlo/html/anchor/IAnchor";
import i18next from "i18next";
import { Trans, useTranslation } from "react-i18next";
import { Friends } from "./x/Friends";

const seeScriptExamplesLinkAnchor = `scritExamples`

function ScriptExamples({setAnchor}:{setAnchor:TypeSetAnchor}){
    const {t} = useTranslation("doc/components/doc-parts/global/content")
    return(
        <Box>
            <Box><h3>{t("script.title")}</h3></Box>
        </Box>
    )
}
export function Menu({setAnchor}:{setAnchor:TypeSetAnchor}){
    const {t} = useTranslation("doc/components/doc-parts/global/content")
    return(
        <Box>
            <div>{t('menu.main')}</div>
        </Box>
    )
}

function AT(){
    // const {t} = useTranslation(['doc/components/doc-parts/global/content'])
    const {t} = useTranslation()
    t('doc.script', {ns:'doc/components/doc-parts/global/content'})
    // t('doc.script')
    return (
        <>
            {t('doc.title',{ns:'doc/components/doc-parts/global/content'})}
            
        </>
    )
}
export function Doc({setAnchor}:{setAnchor:TypeSetAnchor}){
    const {t} = useTranslation("doc/components/doc-parts/global/content")
    return (
        <>
            <h2>{t('doc.title')}</h2>
            <Friends />
            <p>
                <img style={{maxWidth:"100%"}} src={`/images/en/configuration-global.jpg`} />
            </p>
            <Stack direction={"column"}>
                <Box>
                    <Trans t={t} i18nKey={"doc.checkedUseSetting"}></Trans>
                </Box>
                <Box>
                    <Trans t={t} i18nKey={"doc.excludeDomains"}></Trans>
                </Box>
                <Box>
                    <Trans t={t} i18nKey={"doc.script"}></Trans>
                    <a href="#" onClick={()=>setAnchor(seeScriptExamplesLinkAnchor)}>{t('doc.seeScriptExamplesLink')}</a>
                </Box>
                <Box>
                    <Trans t={t} i18nKey={"doc.checkedUseScript"}></Trans>
                </Box>
            </Stack>
            <ScriptExamples setAnchor={setAnchor} />
        </>
    )
}

export const DocGlobal = {
    Menu,
    Doc
}