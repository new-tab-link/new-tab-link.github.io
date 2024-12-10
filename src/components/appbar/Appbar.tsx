
import { Grid2 } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as React from 'react';
import { LanguageSelect } from '../language-selector/LanguageSelect';
import { ThemeModelSetter } from '../theme-model/ThemeModelSetter';
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children?: React.ReactElement<any>;
}
function ScrollTop(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}
export function Appbar2() {
    return (
        <Box sx={{position:"static", top:0, left:0, right:0, zIndex:1000}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>

                </Box>
                <Grid2 spacing={2} sx={{ alignItems: "center", display: "flex", alignSelf: "center" }}>
                    <LanguageSelect />
                    <Box sx={{ ml: "1rem" }}></Box>
                    <ThemeModelSetter />
                </Grid2>
            </Toolbar>
        </Box>
    )
}
export function Appbar() {
    return (
        <AppBar color={"default"} sx={{ position: "sticky" }}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>

                </Box>
                
                <Grid2  sx={{ alignItems: "center", display: "flex", alignSelf: "center" }}>
                    <LanguageSelect />
                    {/* <Box sx={{ ml: "1rem" }}></Box>
                    <ThemeModelSetter /> */}
                </Grid2>
            </Toolbar>
        </AppBar>
    )
}