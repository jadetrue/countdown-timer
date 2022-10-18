import React from "react";

import { DateTimeDisplay } from "../modules/DateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="flex flex-row h-full gap-8">
            <DateTimeDisplay value={days} type={"Days"} />
            <DateTimeDisplay value={hours} type={"Hours"} />
            <DateTimeDisplay value={minutes} type={"Minutes"} />
            <DateTimeDisplay value={seconds} type={"Seconds"} />
        </div>
    );
};
