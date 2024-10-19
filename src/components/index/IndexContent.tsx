import { Box, CssBaseline, Divider, Stack, styled, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import { Appbar } from "../appbar/Appbar";
import { DocGlobal } from "../doc-parts/global/DocGlobal";
import { DocOverview } from "../doc-parts/overview/DocOverview";
import { indexModel } from "./Model";
import { DocVariables } from "../doc-parts/variables/DocVariables";



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
export function IndexContent() {
    return (
        <Box>
        <Stack direction={"column"}>
        <CssBaseline /> 
            <Appbar />
            <Stack direction={"row"}>
                <MenuContainer>
                    <DocOverview.Menu setAnchor={indexModel.anchor.setAnchor} />
                    <DocGlobal.Menu setAnchor={indexModel.anchor.setAnchor} />
                    <DocVariables.Menu setAnchor={indexModel.anchor.setAnchor} />
                </MenuContainer>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ m: "0.5rem", p: "0.5rem" }}>
                    <DocOverview.Doc  />
                    <DocGlobal.Doc setAnchor={indexModel.anchor.setAnchor}/>
                    <DocVariables.Doc />
                    <MediaQuery />
                </Box>
            </Stack>
        </Stack>
        </Box>
    )
}