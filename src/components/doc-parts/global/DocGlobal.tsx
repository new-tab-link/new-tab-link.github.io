import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export function DocGlobalMenu(){
    const {t} = useTranslation("doc__components__doc___parts__global")
    return(
        <Box>
            <div>{t('menu.main')}</div>
        </Box>
    )
}

export function DocGlobalDoc(){
    const {t} = useTranslation("doc__components__doc___parts__global")
    return (
        <>
            <b>{t('doc.title')}</b>
        </>
    )
}