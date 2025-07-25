import { Button } from "./ui/button";
import ContactCard from "./contactCard";

export default function ContactUs() {
    return (
        <section className="flex flex-col justify-center items-center p-10">
            <div className="w-7xl flex flex-row">
                <div className="w-1/2 flex flex-col justify-center items-center border-r border-r-blue-950 gap-5">
                    <p>Esquerda</p>
                </div>
                <div className="w-1/2 flex justify-center items-center border-l border-l-blue-950">
                    <ContactCard/>
                </div>
            </div>
        </section>
    )
}