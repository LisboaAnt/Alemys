"use client"

import ServiceFunnel from "./components/serviceFunnel";
import ServicesGrid from "@/components/servicesGrid";

export default function Services() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <ServiceFunnel />

            <ServicesGrid />
        </div>
    );
}