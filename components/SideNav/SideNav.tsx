import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiStackLine } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { BiTransfer } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import Link from "next/link";

const SideNav: React.FC = () => {
   return(
    <>
       
            <aside className="lg:block hidden m-4 bg-[#24303F]  fixed py-8 px-10 rounded-md flex flex-col items-center">
                <div>
                    <Link href={"#"}>
                        <h2 className="font-bold text-5xl text-white mb-12 cursor-pointer">Y</h2>
                    </Link>
                </div>

                <div>
                    <ul >
                        <li className="mb-10 relative cursor-pointer">
                        <div className="absolute pt-8 text-sm left-1/2 transform -translate-x-1/2 text-white p-2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-100">
                            DASHBOARD
                        </div>
                            <LuLayoutDashboard color="#FFF" size="30"/>
                        </li>

                        
                        <li className="mb-10 relative cursor-pointer">
                        <div className="text-nowrap absolute pt-8 text-sm left-1/2 transform -translate-x-1/2 text-white p-2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-100">
                            BUY ICO
                        </div>

                             <RiStackLine  color="#FFF" size="30"/>
                            
                        </li>

                        <li className="mb-10 relative cursor-pointer">
                        <div className="text-nowrap absolute pt-8 text-sm left-1/2 transform -translate-x-1/2 text-white p-2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-100">
                            WALLET
                        </div>

                             <SlWallet color="#FFF" size="30"/>
                            
                        </li>


                        <li className="mb-10 relative cursor-pointer">
                        <div className="text-nowrap absolute pt-8 text-sm left-1/2 transform -translate-x-1/2 text-white p-2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-100">
                            TRANSACTION
                        </div>

                             <BiTransfer color="#FFF" size="30"/>
                            
                        </li>


                        <li className="mb-10 relative cursor-pointer">
                        <div className="text-nowrap absolute pt-8 text-sm left-1/2 transform -translate-x-1/2 text-white p-2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-100">
                            FAQ
                        </div>
                             <FaQuestion color="#FFF" size="30"/>
                            
                        </li>


                        
                        <li className="mb-4 relative cursor-pointer">
                        <div className="text-nowrap absolute pt-8 text-sm left-1/2 transform -translate-x-1/2 text-white p-2 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-100">
                            ACCOUNT
                        </div>

                             <RiUserFollowLine color="#FFF" size="30"/>
                            
                        </li>

                    </ul>
                </div>
            </aside>
       
    </>
   ) 
   
}

export default SideNav;