import { Box, Button, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { TypeSetAnchor } from "@src/libs/fanfanlo/html/anchor/IAnchor";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";


const anchorGlobalJsScript = `global-js-script`
const anchorGlobalConfig = `global-config`

export function Menu({ setAnchor }: { setAnchor: TypeSetAnchor }) {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    return (
        <ListItem>
            <ListItemButton onClick={() => { console.log('clicked'); setAnchor(anchorGlobalConfig) }}>
                <ListItemText >
                    {t('menu.main')}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    )
}
function ScriptExamples({ setAnchor }: { setAnchor: TypeSetAnchor }) {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    return (
        <Box>
            <Box><h3>{t("script.title")}</h3></Box>
        </Box>
    )
}

function ScriptControll() {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    return (

        <Box sx={{ border: '1px solid #ccc', padding: 2, marginTop: 2 }}>
            <Stack direction={"column"} spacing={1}>
                <Box className="js-script-background">
                    <Typography>
                        <span className="js-comment">
                            <span className="text-gray-500 text-sm" >{t('doc.scriptControll.example1.commentTitle', {youtube:"youtube",watch:"watch",shorts:"shorts"})}</span><br />
                        </span>
                        <br />
                        <span >if(page.hostname == "www.youtube.com" && isSameSubDomain && (click.pathname.indexOf("/watch") == 0 || minimatch(click.pathname, "/shorts/*")))return rightTab;</span><br />
                        <br />
                        <span className="js-comment">
                            <span>{t('doc.scriptControll.example1.introVariables')}</span>
                            <br/>
                            <span><span>page 
                                <Trans t={t} i18nKey="doc.scriptControll.example1.page"
                                    components={{a:<a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" />}}></Trans>
                                
                                </span></span>
                            <br/>
                            <span><span>page.hostname {t(`doc.scriptControll.example1.pageHost`)}</span></span>
                            <br />
                            <span>{t('doc.scriptControll.example1.isSameSubDomain', { isSameSubDomain: 'isSameSubDomain', youtube: 'https://www.youtube.com', families: 'https://families.youtube.com', mainDomain: "youtube.com", youtubeSubDomain: "www", familiesSubDomain: "families" })}</span>
                            <br />
                            <span>
                                <span>click{t(`doc.scriptControll.example1.click`)}</span>
                            </span>
                            <br />
                            <span>
                                <span>click.pathname {t(`doc.scriptControll.example1.clickpath`)}</span>
                            </span>
                            <br />
                            <span>minimatch</span><Trans t={t} i18nKey="doc.scriptControll.example1.minimatch" values={{ glob: "glob", minimatch:"minimatch" }}
                                components={{a:<a href="https://github.com/isaacs/minimatch" target="_blank" rel="noreferrer" />}}></Trans>
                            <br />
                            <span>rightTab{t(`doc.scriptControll.example1.rightTab`)}</span>
                            <br />
                            <span>{t(`doc.scriptControll.example1.wholeCode`, { www: "www", watch: "/watch", shorts: "/shorts" })}</span>
                        </span>
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}
export function Doc({ setAnchor }: { setAnchor: TypeSetAnchor }) {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    const [showTextBox, setShowTextBox] = useState(true)
    return (
        <>

            <h2 id={anchorGlobalConfig}>{t('doc.title')}</h2>
            <p>
                <img style={{ maxWidth: "100%" }} src={`/images/en/configuration-global.jpg`} />
            </p>
            <ol style={{ "paddingInlineStart": "1rem" }}>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.checkedUseSetting"></Trans>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Stack direction={"column"} spacing={1}>
                            <Box>

                                <Trans t={t} i18nKey="doc.excludeDomains"></Trans>
                            </Box>
                            <Box sx={{ marginTop: "0px", textIndent: "0.5rem" }}>
                                <span className="js-comment">
                                    https://example.com
                                </span>
                            </Box>
                        </Stack>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.script"></Trans>
                        <Button id={anchorGlobalJsScript} onClick={() => setShowTextBox(!showTextBox)}>{t('doc.seeScriptExamplesLink')}</Button>
                        {showTextBox && <ScriptControll />}
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.checkedUseScript"></Trans>
                    </Box>
                </li>
            </ol>
            <ScriptExamples setAnchor={setAnchor} />
        </>
    )
}

export const DocGlobal = {
    Menu,
    Doc
}