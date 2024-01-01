import CustomButton, { BorderCustomButton } from "@/components/CustomButton"
import { ImStack } from "react-icons/im";



const BuyYuc: React.FC = () => {
    return(
        <>
           <div className="lg:pl-[180px] relative top-28">

                <div className="mb-10 flex justify-between">
                    <h3 className="">Buy Yuc</h3>

                    <CustomButton label="Withdraw" />
                </div>
           
            <div className=" lg:flex lg:gap-10 items-center ">
            <div className="bg-white shadow-sm p-7 rounded-md mb-5">
                        <div className="lg:flex lg:gap-10 items-center">
                        <ImStack size="50" color="#868686"/>

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
                        <div className="lg:flex flex-col lg:gap-10 items-center">

                            <div className="flex gap-4">
                                <span className="font-medium text-sm">Token Sales Balance</span>
                                
                            </div>
                            <div>
                                <BorderCustomButton label="Swap"/>
                                
                            </div>
                        </div>
                    </div>
            </div>
      </div>
        </>
    )
}

export default BuyYuc;