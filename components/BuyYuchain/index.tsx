
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineSelector } from "react-icons/hi";
import CustomButton from "../CustomButton";


const BuyYuchain: React.FC = () => {
    return (
        <>
            <div className="bg-white shadow-sm p-7 rounded-md mb-5">
                <div className="lg:flex lg:gap-10 items-center">


                    <div className="flex flex-col pb-3">
                        <label htmlFor="yuchainToken" className="mb-2 pl-3 text-[#868686] text-xs mt-1 absolute">
                            Yuchain Token
                        </label>
                        <input
                            type="text"
                          
                            className="border p-2 pt-5 pl-3 lg:w-44 rounded-md"
                           
                        />
                    </div>

                    <div className="pb-3">
                        <FaArrowRight />
                    </div>
                    {/*  */}


                    <div className="flex flex-col pb-3">
                        <label htmlFor="yuchainToken" className="mb-2 pl-3 text-[#868686] mt-1 absolute text-xs">
                            ETH
                        </label>
                        <input
                            type="number"
                            id="yuchainToken"
                            className="border p-2 pt-5 pl-3 lg:w-44 rounded-md"
                           
                        />
                    </div>



                    <div className="relative pb-3">
                    <label htmlFor="yuchainToken" className="mt-4 flex items-center justify-between mb-2 pl-3 text-[#868686] text-xs mt-1 absolute">
  <span> ETH</span>
  <HiOutlineSelector size={"26"} />
</label>

  <input
    type="number"
    disabled  // Add the "disabled" attribute to disable the input
    className="border bg-white p-2 pt-5 pl-3 lg:w-20 w-full rounded-md text-center"  // Center the text content
  />
</div>





                    {/* wallet address */}

                    <div className="flex flex-col pb-3">
                        <label className="mb-2 pl-3 text-[#868686] text-xs mt-1 absolute">
                            Wallet address
                        </label>
                        <input
                            type="number"
                            
                            className="border p-2 pt-5 pl-3 lg:w-44 w-full rounded-md"
                            value={"0xe834a970619218d0a7db4ee5a3c87022e71e177f"}
                        />
                    </div>

                    <div>
                        <CustomButton label="Buy Now" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BuyYuchain;