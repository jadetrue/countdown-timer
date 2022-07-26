import React from "react";

export const DateTimeDisplay = ({ value, type }) => {
    return (
        <div className="h-full w-32">
            <div className="relative shadow-lg shadow-mostlyBlack bg-mostlyBlack rounded-lg">
                <div className="absolute h-full w-full">
                    <p className="text-softRed/95 font-bold text-6xl text-center align-middle h-full flex items-center justify-center">
                        {value}
                    </p>
                </div>
                <div className="flex justify-between absolute items-center h-full -ml-2 w-[145px] z-50">
                    <div className="w-3.5 h-3.5 bg-veryDarkBlue rounded-full" />
                    <div className="w-3.5 h-3.5 bg-veryDarkBlue rounded-full" />
                </div>
                <div className="w-[130px] h-16 bg-veryDarkBlue rounded-t-lg">
                    <div className="w-[130px] h-16 bg-darkBlue opacity-50 rounded-t-lg" />
                </div>
                <div className="w-[130px] h-16  bg-darkBlue rounded-b-lg" />
            </div>
            <div className="flex justify-center items-center pt-10">
                <p className="text-grayBlue font-medium tracking-widest">
                    {type.toUpperCase()}
                </p>
            </div>
        </div>
    );
};
