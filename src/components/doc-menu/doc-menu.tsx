import { Box } from "@mui/material";
import { Menu } from "../doc-parts/global/DocGlobal";
import { indexModel } from "../index/Model";


export function DocMenu(){
    return(
        <Box>
            <Menu  setAnchor={indexModel.anchor.setAnchor}  />
        </Box>
    )
}