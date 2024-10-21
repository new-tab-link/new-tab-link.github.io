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
            <ListItem>
                <ListItemButton onClick={() => { console.log('clicked'); indexModel.anchor.setAnchor(anchor) }}>
                    <ListItemText >
                        {children}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </>
    )
}
