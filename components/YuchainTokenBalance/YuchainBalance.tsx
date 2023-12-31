
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineSelector } from "react-icons/hi";
import CustomButton, { BorderCustomButton } from "../CustomButton";


const YuchainBalance: React.FC = () => {
    return (
        <>
      <div className="lg:flex lg:gap-10 items-center">
            <div className="bg-white shadow-sm p-7 rounded-md mb-5">
                        <div className="lg:flex lg:gap-10 items-center">

                            <div className="flex flex-col gap-4">
                                <span className="font-medium text-sm">Your balance:</span>
                                <span className="text-2xl">3,458.88 Yuc</span>
                                <span className="text-sm lg:text-nowrap">Welcome bonus +30% expires in 21 days.</span>
                            </div>
                            <div>
                                <CustomButton label="Withdraw" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-sm p-7 rounded-md mb-5">
                        <div className="lg:flex lg:gap-10 items-center">

                            <div className="flex flex-col gap-4">
                                <span className="font-medium text-sm">Your balance:</span>
                                <span className="text-2xl">3,458.88 Yuc</span>
                                <span className="text-sm">Welcome bonus +30% expires in 21 days.</span>
                            </div>
                            <div>
                                <BorderCustomButton label="Swap"/>
                                
                            </div>
                        </div>
                    </div>
      </div>
        </>
    )
}
export default YuchainBalance;