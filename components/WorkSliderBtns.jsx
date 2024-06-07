"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsSytles }) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsSytles} />
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconsSytles} onClick={() => swiper.slideNext()}/>
            </button>
        </div>
    )
}

export default WorkSliderBtns
