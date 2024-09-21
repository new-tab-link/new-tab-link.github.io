// import { lngsMapLocale } from '@extension/common';
import { lngsMapLocale } from '@0xff336699/js-i18n-lngs';
import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system';
// import { i18nKeys } from '@src/i18n/locales/i18n.keys';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSelect() {
  // const lm = lngsChromeLocale;
  const lm = lngsMapLocale;
  const { t, i18n } = useTranslation('doc__components__language___selector');
  let lng = i18n.language;
  if (!(lng in lm)) {
    lng = lng.split('-')[0];
  }
  if (!(lng in lm)) {
    lng = 'en';
  }
  const [language, setLanguage] = React.useState(lng);
  const handleChange = (event: SelectChangeEvent) => {
    const cl = event.target.value;
    setLanguage(event.target.value as string);
    i18n.changeLanguage(cl);
    // setHtmlLang(cl)
  };
  useEffect(() => {
    const setHtmlLang = function setHtmlLang(l: string) {
      document.documentElement.lang = l; //navigator.language
      const dir = i18n.dir(l);
      document.documentElement.dir = dir; // l.split('-')[0].toLowerCase() == 'ar' ? 'rtl' : 'ltr'
    }
    setHtmlLang(language);
  }, [language, i18n]);
  return (
    <Box sx={{pt:"1rem", pb:"1rem", float:"right"}}>

<FormControl sx={{ minWidth: '150px' }}>
      <InputLabel id="demo-simple-select-label">{t('content.title')}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={language}
        label="language2"
        onChange={handleChange}>
        {Object.keys(lm).map(key => {
          return (
            <MenuItem key={key} value={key}>
              {lm[key as keyof typeof lm]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
    </Box>
  );
}
