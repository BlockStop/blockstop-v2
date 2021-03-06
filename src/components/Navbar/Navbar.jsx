import React, { useState } from "react";
// import Burger from "../Burger/Burger";
// import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';

import TwitterImg from '../../assets/twitter.webp';
import InstaImg from '../../assets/insta.webp';

import styles from "./Navbar.module.scss"
import { useMediaQuery } from "react-responsive";

const Navbar = (props) => {
    const isMobile = useMediaQuery({ query: "(max-width: 850px)" });

    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <div className={`${styles.nav} ${props.isLight && styles.light}`}>
            {!isMobile && 
                <div className={styles.logo}>
                <Link to="/" onClick={() => props.setOpen(!open)}>
                    <Logo />
                </Link>
                </div>
            }

                <div className={`${styles.row} ${props.isLight && styles.light}`}>
                    <a href = "https://twitter.com/BlockStopXYZ"> <img src={TwitterImg}/> </a>
                    <a href = "https://www.blockstop.xyz/"> <img src={InstaImg}/> </a>
                    {/* <img src={TwitterImg}/>
                    <img src={InstaImg}/> */}
                    <a href = "https://gf144bwmy12.typeform.com/to/hcPphVaO"> <button> Let's Connect </button> </a>
                </div>
            
            {/* {isMobile && 
                <div className={styles.burger}>
                    <Burger open={open} setOpen={setOpen} isReverse={props.isReverse} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            } */}
        </div>
      );
}

export default Navbar;