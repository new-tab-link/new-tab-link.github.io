import { Box, Button, Stack, Typography } from "@mui/material";
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation";
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu";
import { DocTitle } from "@src/components/doc-components/title/DocTitle";
// import { useInViewport } from "ahooks";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";


const anchorGlobalJsScript = `global-js-script`
const anchorGlobalConfig = `global-config`

export function Menu() {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    return (
        <>
            <MenuAnchorComponent anchor={anchorGlobalConfig}>
                {t('menu.main')}
            </MenuAnchorComponent>
            <Box sx={{ textIndent: "1rem" }}>
                <MenuAnchorComponent anchor={anchorGlobalJsScript}>
                    <span> </span><span> </span>{t('doc.scriptControll.example1.introVariables')}
                </MenuAnchorComponent>
            </Box>
        </>
    )
}


function ScriptControll() {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    return (

        <AnchorAnimation anchor={anchorGlobalJsScript}>
            <Stack direction={"column"} spacing={1}>
                <Box className="js-script-background">
                    <Typography>
                        <span className="js-comment">
                            <span className="text-gray-500 text-sm" >{t('doc.scriptControll.example1.commentTitle', { youtube: "youtube", watch: "watch", shorts: "shorts" })}</span><br />
                        </span>
                        <br />
                        <span className="js-script-code" >if(page.hostname == "www.youtube.com" && isSameSubDomain && (click.pathname.indexOf("/watch") == 0 || minimatch(click.pathname, "/shorts/*")))return rightTab;</span><br />
                        <br />
                        <span className="js-comment">
                            <span>{t('doc.scriptControll.example1.introVariables')}</span>
                            <br />
                            <span><span>page
                                <Trans t={t} i18nKey="doc.scriptControll.example1.page"
                                    components={{ a: <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noreferrer" /> }}></Trans>

                            </span></span>
                            <br />
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
                            <span>minimatch</span><Trans t={t} i18nKey="doc.scriptControll.example1.minimatch" values={{ glob: "glob", minimatch: "minimatch" }}
                                components={{ a: <a href="https://github.com/isaacs/minimatch" target="_blank" rel="noreferrer" /> }}></Trans>
                            <br />
                            <span>rightTab{t(`doc.scriptControll.example1.rightTab`)}</span>
                            <br />
                            <span>{t(`doc.scriptControll.example1.wholeCode`, { www: "www", watch: "/watch", shorts: "/shorts" })}</span>
                        </span>
                    </Typography>
                </Box>
            </Stack>
        </AnchorAnimation>
    )
}

function ExcludeDomains() {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    return (
        <Box sx={{ border: '1px solid #ccc', padding: 2, marginTop: 2 }}>
            <Stack direction={"column"} spacing={1}>
                <Box className="js-script-background">
                    <span>
                        <Trans t={t} i18nKey="doc.exclude.example.domain"
                            values={{ url: "https://example.com" }}
                            components={{ code: <span className="js-script-code" /> }}
                        ></Trans>
                    </span>
                    <br />
                    <span>
                        <Trans t={t} i18nKey="doc.exclude.example.url"
                            values={{ url: "https://example.com/path" }}
                            components={{ code: <span className="js-script-code" /> }}
                        ></Trans>
                    </span>
                    <br />
                    <span>
                        <Trans t={t} i18nKey="doc.exclude.example.glob"
                            values={{ glob: "glob", minimatch: "**/example.com/**" }}
                            components={{ code: <span className="js-script-code" /> }}
                        ></Trans>
                    </span>
                </Box>
            </Stack>
        </Box>
    )
}
function DocContent() {
    const { t } = useTranslation("doc/components/doc-parts/global/content")
    const [showExcludeBox, setShowExcludeBox] = useState(true)
    return (
        <Box >
            <DocTitle >{t('doc.title')}</DocTitle>
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
                                <Button onClick={() => setShowExcludeBox(!showExcludeBox)}>{t('doc.seeExcludeExamplesLink')}</Button>
                            </Box>
                            {showExcludeBox && <ExcludeDomains />}
                        </Stack>
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.script"></Trans>
                        <ScriptControll />
                    </Box>
                </li>
                <li>
                    <Box>
                        <Trans t={t} i18nKey="doc.checkedUseScript"></Trans>
                    </Box>
                </li>
            </ol>
        </Box>
    )
}

function Doc() {
    // return <DocContent />
    return <AnchorAnimation anchor={anchorGlobalConfig}><DocContent /></AnchorAnimation>
}
export const DocGlobal = {
    Menu,
    Doc
}