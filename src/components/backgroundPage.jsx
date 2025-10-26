import React from "react";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";

export function BackgroundPage(){
    return (
        <div className="min-h-screen bg-gray-100">
            <div className= " relative h-3/10 m-0 top-0 left-0">
                <img
                    src={bgSidebarMobile}
                    alt="top background"
                    className="w-full h-auto"
                />
            </div>
            <div className="mx-10 bg- bg-gray-100 object-top absolute z-auto;">
            </div>
        </div>

    )
}