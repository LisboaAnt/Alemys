"use client"

import ServiceFunnel from "./components/serviceFunnel";
import ServicesGrid from "./components/servicesgrid";

export default function Services() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen">
            <section id="service-funnel" className="md:min-h-[88vh] w-full">
                <ServiceFunnel />
            </section>
            <section className="w-full">
                <ServicesGrid/>
            </section>
        </div>
    );
}