import {useEffect} from "react";
import "./SideMenu.css";
import ToggleButton from "./ToggleButton/ToggleButton";

const SideMenu = ({sideMenuActive, setSideMenuActive}) => {
    useEffect(() => {
        if (sideMenuActive) {
            document.body.classList.add("darken-background");

        } else {
            document.body.classList.remove("darken-background");
        }

        return () => document.body.classList.remove("darken-background");
    }, [sideMenuActive]);

    return (
        <div className={`${sideMenuActive ? "side-menu side-menu_open" : "side-menu"}`}>
            <h3 className="side-menu_header">This is Side menu</h3>
            <p className="side-menu_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
            <button>закрыть</button>
            <ToggleButton openMenu={() => setSideMenuActive(true)}/>

        </div>
    );
};

export default SideMenu;
