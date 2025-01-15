import React from 'react'

const DarkGradientCircles = ({ overflowHidden = true, isStraight }: { overflowHidden: boolean, isStraight?: boolean }) => {
    return (
        <>
            <div className={`absolute top-[-120px] left-[-150px] w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0]`}></div>
            <div className={`absolute bottom-[-120px] ${isStraight ? "left-[-150px] " : "right-[-150px]"} w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] z-[0] ${overflowHidden ? "" : "z-[200]"}`} ></div >
        </>

    )
}

export default DarkGradientCircles