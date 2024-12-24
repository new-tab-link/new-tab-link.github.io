import { Box } from "@mui/material";
import { AnchorAnimation } from "@src/components/doc-components/anchor-animation/AnchorAnimation";
import { MenuAnchorComponent } from "@src/components/doc-components/menu/DocMenu";
import { DocTitle } from "@src/components/doc-components/title/DocTitle";
import React, { ReactChildren } from "react";
import { useTranslation, Trans } from "react-i18next";

const anchor = "programing";

function Menu() {
  const { t } = useTranslation("doc/components/doc-parts/programing/content");
  return (
    <MenuAnchorComponent anchor={anchor}>{t("menu.main")}</MenuAnchorComponent>
  );
}

function Code({
  indent,
  children,
}: { indent: number } & React.PropsWithChildren) {
  return (
    <>
      <span style={{ marginLeft: `${indent}rem` }}>{children}</span>
      <br />
    </>
  );
}

function YoutubeMainPage() {
  const { t } = useTranslation("doc/components/doc-parts/programing/content");
  return (
    <Box sx={{border:"1px solid #ccc", m:"0.5rem", p:"0.5rem"}}>
      <Box>
        <b>
          <Trans
            t={t}
            i18nKey="doc.example1.title"
            values={{ "0": "Youtube" }}
          ></Trans>
        </b>
      </Box>
      <Box>
        <pre>
          {"{"}
          <br />
          <Annotation indent={2}>
            <Trans
              t={t}
              i18nKey="doc.example1.annotation1"
              values={{ "0": "false" }}
            ></Trans>
          </Annotation>
          <Code indent={2}>if(!isSameDomain)return true</Code>
          <Annotation indent={2}>
            <Trans
              t={t}
              i18nKey="doc.example1.annotation2"
              values={{ "0": "Youtuber", "1": "true" }}
            ></Trans>
          </Annotation>

          <Code indent={2}>
            if(click.pathname.indexOf('/@') == 0)return true;
          </Code>
          <Annotation indent={2}>
            <Trans
              t={t}
              i18nKey="doc.example1.annotation3"
              values={{ "0": "true" }}
            ></Trans>
          </Annotation>
          <Code indent={2}>
            if(click.pathname.indexOf('/watch') == 0)return true;{" "}
          </Code>
          <Annotation indent={2}>
            <Trans
              t={t}
              i18nKey="doc.example1.annotation4"
              values={{ "0": "true" }}
            ></Trans>
          </Annotation>
          <Code indent={2}>
            if(click.pathname.indexOf('/shorts/') == 0)return true;
          </Code>
          <Annotation indent={2}>
            <Trans
              t={t}
              i18nKey="doc.example1.annotation5"
              values={{ "0": "true" }}
            ></Trans>
          </Annotation>
          <Code indent={2}>
            if(click.pathname.indexOf('/post/') == 0)return true;
          </Code>
          <Annotation indent={2}>
            <Trans
              t={t}
              i18nKey="doc.example1.annotation5"
              values={{ "0": "false" }}
            ></Trans>
          </Annotation>
          <Code indent={2}>return false;</Code>
          {"}"}
        </pre>
      </Box>
    </Box>
  );
}
function Annotation({
  indent,
  children,
}: { indent: number } & React.PropsWithChildren) {
  return <Code indent={indent}>//{children}</Code>;
}
function Doc() {
  const { t } = useTranslation("doc/components/doc-parts/programing/content");
  return (
    <AnchorAnimation anchor={anchor}>
      <Box>
        <DocTitle>{t("doc.title")}</DocTitle>
      </Box>
      <Box>{t("doc.description")}</Box>
      <YoutubeMainPage />
    </AnchorAnimation>
  );
}

export const DocPrograming = {
  Menu,
  Doc,
};
