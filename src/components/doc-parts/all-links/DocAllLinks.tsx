import { Box, Stack } from "@mui/material"
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation"
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu"
import { DocTitle } from "@src/components/doc-components/title/DocTitle"
import { Trans, useTranslation } from "react-i18next"

const anchorAllLinks = "all-links"

function Menu() {
    const { t } = useTranslation("doc/components/doc-parts/all-links/content")
    return (
        <>
            <MenuAnchorComponent anchor={anchorAllLinks}>
                {t("menu.main")}
            </MenuAnchorComponent>
        </>
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
function Doc() {
    const { t } = useTranslation("doc/components/doc-parts/all-links/content")
    return (
        <AnchorAnimation anchor={anchorAllLinks}>
            <Box>
                <DocTitle>{t("doc.title")}</DocTitle>
                <div>
                    <img className="autoImage" src={`/images/en/configuration-all-links.jpg`} />
                </div>
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
                                <ExcludeDomains />
                            </Stack>
                        </Box>
                    </li>
                </ol>
            </Box>
        </AnchorAnimation>
    )
}

export const DocAllLinks = {
    Menu, Doc
}