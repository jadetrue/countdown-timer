import React from "react";

export const DateTimeDisplay = ({ value, type }) => {
    return (
        <div className="w-32 h-full">
            <div className="relative rounded-lg shadow-lg shadow-mostlyBlack bg-mostlyBlack">
                <div className="absolute w-full h-full">
                    <p className="flex items-center justify-center h-full text-6xl font-bold text-center align-middle text-softRed/95">
                        {value}
                    </p>
                </div>
                <div className="flex justify-between absolute items-center h-full -ml-2 w-[145px] z-50">
                    <div className="w-3.5 h-3.5 bg-veryDarkBlue rounded-full" />
                    <div className="w-3.5 h-3.5 bg-veryDarkBlue rounded-full" />
                </div>
                <div className="w-[130px] h-16 bg-veryDarkBlue rounded-t-lg">
                    <div className="absolute w-[130px] h-16 bg-darkBlue opacity-50 rounded-t-lg" />
                </div>
                <div className="w-[130px] h-16 bg-darkBlue rounded-b-lg" />
            </div>
            <div className="flex items-center justify-center pt-10">
                <p className="font-medium tracking-widest text-grayBlue">
                    {type.toUpperCase()}
                </p>
            </div>
        </div>
    );
};
