import ContactCard from "./contactCard";

export default function ContactUs() {
    return (
        <section id="contact" className="w-full flex flex-col justify-center items-center py-5">
            <div className="w-7xl flex flex-col px-10 gap-5">
                <h1 className="text-2xl font-bold text-left text-(--foreground)">
                    Contact Us
                </h1>
                <div className="flex md:flex-row sm:flex-col">
                    <div className="w-1/2 flex flex-col justify-center items-center border-r border-r-blue-950 gap-5">
                        <p>Esquerda</p>
                    </div>
                    <div className="w-1/2 flex justify-center items-center border-l border-l-blue-950">
                        <ContactCard/>
                    </div>
                </div>
            </div>
        </section>
    )
}