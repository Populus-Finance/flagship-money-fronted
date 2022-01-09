import { Drawer } from "@material-ui/core";
import NavContent from "./drawer-content";

function Sidebar() {
    return (
        <Drawer variant="permanent" anchor="left">
            <NavContent />
        </Drawer>
    );
}

export default Sidebar;
