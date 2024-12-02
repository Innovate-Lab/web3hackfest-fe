'use client'
import React from 'react';
import Heading from "@/layout/components/Heading";
import {Poppins} from "next/font/google";
import {  useDataContext } from "@/provider/DataContext";
const popins = Poppins({
  display: "swap",
  subsets: ["latin-ext"],
  weight: ['400', '500', '600', '700'],
});




function DefaultLayout({children} : {children: React.ReactNode}) {
    return ( 

            <div className={popins.className}>
                <Heading />
                <div className="px-[100px] bg-black min-h-[100vh]">{children}</div>
            </div>

     );
}

export default DefaultLayout;