"use client";

import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts";
import { barchart_data } from "@/utils/barchart_utils";

const ICOTokenBarchart: React.FC = () => {
    const formatYAxisTick = (value: number) => {
        return `${value}k`;
    };

    // const tooltipFormatter = (value: any) => value;

    return (
        <React.Fragment>
            <div className="text-sm text-[#B0B1B4]">
                <BarChart width={570} height={350} data={barchart_data} className="lg:max-w-[900px] max-w-80">
                    <CartesianGrid strokeDasharray="3 3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={formatYAxisTick}
                    />
                    {/* <Tooltip formatter={tooltipFormatter} /> */}
                    <Bar dataKey="cost" fill="#1F8BFE" barSize={30} />
                </BarChart>
            </div>
        </React.Fragment>
    );
};

export default ICOTokenBarchart;

