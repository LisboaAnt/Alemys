"use client"

import ServiceFunnel from "./components/serviceFunnel";
import ServicesGrid from "@/components/servicesGrid";
import Services1 from "@/components/services";

export default function Services() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <section className="md:min-h-[80vh] w-full">
                <ServiceFunnel />
            </section>
            <section className="w-full">
                <Services1/>
            </section>
        </div>
    );
}