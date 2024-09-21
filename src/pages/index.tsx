
import { CircularProgress, Grid2 } from "@mui/material";
import IndexPageContent from "@src/components/index/content";
import i18n from "@src/i18nconf/i18nSetting";
import NoSsr from "@src/libs/fanfanlo/nextjs/loader/NoSsr";
import { Suspense } from "react";
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

  return (
    <Suspense fallback={<Loading />}>
      <I18nextProvider i18n={i18n} defaultNS={["ns1"]}>
        {/* <NoSsr> */}
          <IndexPageContent />
        {/* </NoSsr> */}
      </I18nextProvider>
    </Suspense>
  )
}
export default Index;
