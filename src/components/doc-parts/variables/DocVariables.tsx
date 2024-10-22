import { Box, Stack } from "@mui/material";
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu";
import { DocTitle } from "@src/components/doc-components/title/DocTitle";
import { useTranslation } from "react-i18next";

const anchorVariables = `variables`
function Menu() {
    const { t } = useTranslation("doc/components/doc-parts/variables/content")
    return (
        <MenuAnchorComponent anchor={anchorVariables}>
            {t('menu.main')}
        </MenuAnchorComponent>
    )
}

function Doc() {
    const { t } = useTranslation("doc/components/doc-parts/variables/content")
    return (
        <Box id={anchorVariables}>
            <DocTitle>{t('doc.title')}</DocTitle>
            <Stack direction={"column"} spacing={1}>
            </Stack>
        </Box>
    )
}

export const DocVariables = {
    Menu,
    Doc
}
