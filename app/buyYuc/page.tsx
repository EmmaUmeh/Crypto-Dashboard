import CustomButton, { BorderCustomButton } from "@/components/CustomButton"
import Gradient from "@/components/Gradient";
import { FaArrowRight } from "react-icons/fa";
import { ImStack } from "react-icons/im";



const BuyYuc: React.FC = () => {
    return (
        <>
            <div className="lg:pl-[180px] relative top-28">

                <div className="mb-10 flex justify-between">
                    <h3 className="text-2xl">Buy Yuc</h3>

                    <CustomButton label="Withdraw" />
                </div>

                <div className="lg:flex lg:gap-10 items-center ">
                    <div className="bg-white shadow-sm p-7 rounded-md mb-5 lg:mt-[-120px]">
                        <div className="lg:flex lg:gap-10 items-center">
                            <ImStack size="50" color="#868686" />

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
                        <div className="lg:flex flex-col lg:gap-10">

                            <div className="flex items-center justify-center gap-4">
                                <span className="font-medium ;g:text-xl text-[#868686]">TOKEN SALES BALANCE</span>
                            </div>

                            <div className="flex justify-between gap-4">
                                <span className="font-medium text-sm">$0</span>
                                <span className="font-medium text-sm">$50</span>
                            </div>

                            <div>
                                <Gradient />
                            </div>
                            <div className="lg:flex flex-col lg:items-center justify-center gap-10 ">

                                <div className="pb-3">
                                    <div className="flex flex-col pb-1">
                                        <label htmlFor="yuchainToken" className="mb-2 pl-3 text-[#868686] mt-1 absolute text-xs">
                                            ETH
                                        </label>
                                        <input
                                            type="number"

                                            className="border p-2 pt-5 pl-3 lg:w-44 rounded-md"

                                        />
                                    </div>
                                </div>

                                <div>
                                    <CustomButton label={"Check Rate"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyYuc;