import React, { useState } from "react";

import { ReactComponent as Facebook } from "../images/socialIcons/icon-facebook.svg";
import { ReactComponent as Pinterest } from "../images/socialIcons/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/socialIcons/icon-instagram.svg";

import { ReactComponent as Hills } from "../images/pattern-hills.svg";

const Footer = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (e) => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <>
            <div className="flex flex-row justify-center gap-10 p-10">
                <Facebook
                    id={"facebook"}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    fill={`${
                        isHovering ? "hsl(var(--soft-red) / 100)" : "#8385A9"
                    }`}
                />
                <Pinterest
                    id={"pinterest"}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    fill={`${
                        isHovering ? "hsl(var(--soft-red) / 100)" : "#8385A9"
                    }`}
                />
                <Instagram
                    id={"instagram"}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    fill={`${
                        isHovering ? "hsl(var(--soft-red) / 100)" : "#8385A9"
                    }`}
                />
            </div>
            <div className="w-screen">
                <Hills className="" />
            </div>
        </>
    );
};

export default Footer;
