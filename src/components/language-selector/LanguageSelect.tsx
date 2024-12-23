
import { googleGeminiIntersectionLocale } from '@0xff336699/js-i18n-lngs';
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import i18n from '@src/i18nconf/i18nSetting';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const ii = i18n
console.log('ii', ii.language)
export function LanguageSelect() {
  const lm = googleGeminiIntersectionLocale;
  
  const { t, i18n } = useTranslation('doc/components/language-selector/content');
  let lng = i18n.language;
  console.log('ii2', ii.language)
  console.log('lng1', lng)
  if (!(lng in lm)) {
    lng = lng.split('-')[0];
  }
  console.log('lng2', lng)
  if (!(lng in lm)) {
    lng = 'en';
  }
  console.log('lng3', lng)
  const [language, setLanguage] = React.useState(lng);
  const handleChange = (event: SelectChangeEvent) => {
    const cl = event.target.value;
    setLanguage(event.target.value as string);
    i18n.changeLanguage(cl);
    ii.changeLanguage(cl)
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
    <Box>

<Box sx={{
      pt:"1rem", pb:"1rem", 
      float:"right"}}>

<FormControl sx={{ minWidth: '150px'}} size='small'>
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
    </Box>
  );
}
