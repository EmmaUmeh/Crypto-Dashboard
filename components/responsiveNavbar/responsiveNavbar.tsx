import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiStackLine } from "react-icons/ri";
import { SlWallet } from "react-icons/sl";
import { BiTransfer } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import Link from "next/link";


const ResponsiveNavbar: React.FC = () => {
    return(
        <>
            <div className="z-50">
            <aside className="lg:hidden h-full mt-4 block bg-[#24303F] fixed left-0 py-8 px-10 pl-3 w-64 flex flex-col transition-all ease-in-out duration-100 transform">
         
                <div className="">
                    <ul >
                       <Link href={"/"}>
                            <li className="mb-10 flex items-center gap-3 cursor-pointer">
                                <LuLayoutDashboard color="#FFF" size="27"/>
                                <div className="text-sm text-white">
                                    DASHBOARD
                                </div>
                                    
                                </li>
                       </Link>

                        
                       <Link href={""}>
                            <li className="mb-10 flex items-center gap-3 cursor-pointer">
                            <RiStackLine  color="#FFF" size="30"/>

                            <div className="text-sm text-white">
                                    BUY ICO
                                </div>
    
                                </li>
                       </Link>

                       <Link href={""}>

                            <li className="mb-10  flex items-center gap-3 cursor-pointer">
                                    <SlWallet color="#FFF" size="30"/>
                                    <div className="text-sm text-white">
                                        WALLET
                                    </div>

                                </li>
                       </Link>

                        <Link href={""}>
                                <li className="mb-10  flex items-center gap-3 cursor-pointer">
                                
                                    <BiTransfer color="#FFF" size="30"/>
                                    <div className="text-sm text-white">
                                        WALLET
                                    </div>
                                </li>
                        </Link>


                        <li className="mb-10 flex items-center gap-3 cursor-pointer">
                        
                             <FaQuestion color="#FFF" size="30"/>
                             <div className="text-sm text-white">
                                        FAQ
                                    </div>
                        </li>


                        
                        <li className="mb-4 flex items-center gap-3 cursor-pointer">
                       

                             <RiUserFollowLine color="#FFF" size="30"/>
                             <div className="text-sm text-white">
                                     ACCOUNT
                                    </div>
                        </li>

                    </ul>
                </div>
            </aside>
            </div>
        </>
    )
}

export default ResponsiveNavbar;