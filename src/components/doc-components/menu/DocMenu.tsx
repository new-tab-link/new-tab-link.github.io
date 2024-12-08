import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { TypeSetAnchor } from "@src/libs/fanfanlo/html/anchor/IAnchor";
import { PropsWithChildren } from "react";
import { indexModel } from "../../index/Model";

interface MenuComponentProps extends PropsWithChildren {
    anchor: string
}
export function MenuAnchorComponent({anchor, children }: MenuComponentProps) {
    return (
        <>
            <ListItem sx={{p:0}}>
                <ListItemButton sx={{m:0, p:0}} onClick={() => {indexModel.anchor.setAnchor(anchor) }}>
                    <ListItemText sx={{p:0}} >
                        {children}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </>
    )
}
