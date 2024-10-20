
import { CircularProgress, Grid2 } from "@mui/material";
import { IndexContent } from "@src/components/index/IndexContent";
import { indexModel } from "@src/components/index/Model";
import i18n from "@src/i18nconf/i18nSetting";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";

function Loading(){
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    ><CircularProgress color="secondary" /></Grid2>
  )
}
function Index() {
  indexModel.anchor.initAnchor()
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     indexModel.anchor.initAnchor()
  //   }, 300)
  // }, [])
  return (
    <Suspense fallback={<Loading />}>
      <I18nextProvider i18n={i18n} defaultNS={["ns1"]}>
        <IndexContent />
      </I18nextProvider>
    </Suspense>
  )
}
export default Index;
