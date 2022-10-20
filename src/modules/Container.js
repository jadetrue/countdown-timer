import React from "react";

import { ShowCounter } from "../modules/ShowCounter";
import { useCountdown } from "../hooks/useCountdown";

import { Expired } from "../modules/Expired";
import Footer from "../modules/Footer";

export const Container = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <Expired />;
    } else {
        return (
            <>
                <div className="bg-veryDarkBlue flex flex-col justify-center items-center h-screen md:h-screen bg-[url('../images/bg-stars.svg')] bg-stretch bg-top">
                    <div className="m-auto mt-24">
                        <h1 className="mb-24 text-2xl font-bold tracking-[.5em] text-center text-white">
                            WE'RE LAUNCHING SOON
                        </h1>
                        <ShowCounter
                            days={days}
                            hours={hours}
                            minutes={minutes}
                            seconds={seconds}
                        />
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
};
