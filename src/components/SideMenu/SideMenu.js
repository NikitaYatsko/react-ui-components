import {useEffect} from "react";
import "./SideMenu.css";
import ToggleButton from "./ToggleButton/ToggleButton";

const SideMenu = ({sideMenuActive, setSideMenuActive}) => {
    useEffect(() => {
        if (sideMenuActive) {
            document.body.classList.add("dark-bg");

        } else {
            document.body.classList.remove("dark-bg");
        }

        return () => document.body.classList.remove("dark-bg");
    }, [sideMenuActive]);

    return (
        <div className={`${sideMenuActive ? "side-menu side-menu_open" : "side-menu"}`}>
            <h3 className="side-menu_header">This is Side menu</h3>
            <p className="side-menu_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
            <ToggleButton sideMenuActive={sideMenuActive} openMenu={() => setSideMenuActive(true)}/>

        </div>
    );
};

export default SideMenu;
