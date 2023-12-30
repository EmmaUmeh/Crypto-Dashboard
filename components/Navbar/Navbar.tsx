import React from "react";
import { SlGlobe, SlMenu } from "react-icons/sl";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar from "@/public/assets/avatar_One.png"
import Flag from "@/public/assets/flag_One.png"
import Image from "next/image";
import { PiWalletLight } from "react-icons/pi";


const Navbar: React.FC = () => {
    return (
        <>
           <div className="flex justify-center p-5">
           <nav className="lg:mt-3 mt-3 w-full grid grid-cols-2 items-center shadow-sm py-4 relative lg:left-10 rounded-md px-7 bg-[#FFF] lg:w-10/12">
                <div className="flex items-center gap-5">
                {/* <Link href={"#"}> */}
                <h2 className="lg:hidden block font-bold text-5xl text-black cursor-pointer">Y</h2>
                 {/* </Link> */}
                <span className="lg:block hidden gap-20"><SlMenu size="20px" color="#697A8D"/></span>
                    <label className="relative lg:block hidden">
                        <span className="sr-only ">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <IoIosSearch size="25px" color="#697A8D"/>
                        </span>
                        <input className="placeholder:text-slate-400 block rounded-md py-2 lg:pl-9 pr-3 focus:outline-none sm:text-sm" placeholder="" type="text" />
                    </label>
                </div>


                    <ul className="flex items-center gap-6 z-50 grid-cols-4 justify-self-end lg:">
                         <span className="lg:hidden block gap-20"><SlMenu size="20px" color="#697A8D"/></span>


                            <li className="lg:block hidden">
                            <Image
                                    src={Flag}
                                    height={"20"}
                                    width={"20"}
                                    alt="Avatar Image"
                                    className=""
                                />
                            </li>
                            <li className="lg:block hidden">
                            <IoMdNotificationsOutline size="28px" color="#697A8D"/>
                            </li>


                            <li className="lg:block hidden">
                                <PiWalletLight size="28px" color="#697A8D"/>
                            </li>

                        

                            <li className="lg:block hidden">
                            <Image
                                    src={Avatar}
                                    height={"40"}
                                    width={"40"}
                                    alt="Avatar Image"
                                    className="rounded-full"
                                />
                            </li>
                        </ul>
              
            </nav>
           </div>
        </>
    )

}

export default Navbar;