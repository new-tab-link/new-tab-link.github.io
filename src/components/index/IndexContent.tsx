import { Box, CssBaseline, Divider, Stack, styled, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { Appbar } from "../appbar/Appbar";
import { DocGlobal } from "../doc-parts/global/DocGlobal";
import { DocOverview } from "../doc-parts/overview/DocOverview";
import { DocVariables } from "../doc-parts/variables/DocVariables";
import { Example } from "./motion";
import { TransitionTest } from "../doc-components/anchor-animation/transition-group";


const Root = styled('div')(({ theme }) => {
    // console.log('1', theme.breakpoints.down('md'))
    // console.log('2', theme.breakpoints.up('md'))
    // console.log('3', theme.breakpoints.up('lg'))
    return {
        padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            backgroundColor: red[500],
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: blue[500],
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: green[500],
        },
    }
});

function MediaQuery() {
    return (
        <Root>
            <Typography>down(md): red</Typography>
            <Typography>up(md): blue</Typography>
            <Typography>up(lg): green</Typography>
        </Root>
    );
}

const menuWidth = 200
const MenuContainer = styled('div')(({ theme }) => {
    return {
        [theme.breakpoints.down('md')]: {
            width: 130,
            borderColor: "red"
        },
        [theme.breakpoints.up('md')]: {
            width: 180,
            borderColor: "blue"
        },
        [theme.breakpoints.up('lg')]: {
            width: 220,
            borderColor: "green"
        },
        border: "1px solid",
        // borderColor: theme.palette.success.main,
        margin: 1//theme.spacing(1)
    }
})

function LeftMenu() {
    return <MenuContainer sx={{ overflowY: "scroll" }}>
        <DocOverview.Menu />
        <DocGlobal.Menu />
        <DocVariables.Menu />
    </MenuContainer>
}
export function IndexContent() {
    return (
        <Box sx={{ width: "100%", height: "100vh" }}>
            <Box sx={{
                height:"100%", 
                }}>
                {/* <CssBaseline /> */}
                {/* <Box sx={{ width:"100%"}}> 
                    <Appbar />
                </Box> */}
                <Appbar />
                <Stack direction={"row"} sx={{ width: "100%",
                    height:"100%",
                    }} >
                    <Box sx={{ maxWidth: "300px" }}>
                        <Box sx={{ position: "fixed" }}>
                            <LeftMenu />
                        </Box>
                        <Box sx={{ visibility: "hidden" }}>
                            <LeftMenu />
                        </Box>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div style={{ margin: "0.5rem", padding: "0.5rem",
                          width: "100%" 
                          }}>
                        <DocOverview.Doc />
                        <DocGlobal.Doc />
                        <DocVariables.Doc />
                        <MediaQuery />
                    </div>
                </Stack>
            </Box>
        </Box>
    )
}
export function IndexContent2() {
    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <Box>
                <CssBaseline />
                <Appbar />
                <Stack direction={"row"} sx={{ position: "relative" }}>
                    <Box>
                        <Box sx={{ position: "fixed" }}>
                            <LeftMenu />
                        </Box>
                        <Box sx={{ visibility: "hidden" }}>
                            <LeftMenu />
                        </Box>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Box sx={{ m: "0.5rem", p: "0.5rem"}}>
                        <DocOverview.Doc />
                        <DocGlobal.Doc />
                        <DocVariables.Doc />
                        <MediaQuery />
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

