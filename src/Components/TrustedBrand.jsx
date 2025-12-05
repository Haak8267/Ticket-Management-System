const TrustedBrand = () => {
    const eventLogos = [
        // "https://upload.wikimedia.org/wikipedia/commons/8/88/Eventbrite_logo.svg",
        // "https://upload.wikimedia.org/wikipedia/commons/2/2f/Ticketmaster_logo_2021.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Meetup_Logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/1/10/StubHub_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/f/fe/Ticketek_Logo_Blue_on_White_-_2014.png",
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/The_Fan%2C_DICE%27s_secondary_logo_and_mascot.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tickpick_Logo.jpg/800px-Tickpick_Logo.jpg"
    ];
    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }
                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
            <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                    <div className="flex">
                        {[...eventLogos, ...eventLogos].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`logo-${index}`}
                                className="w-32 h-16 object-contain mx-6"
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};
export default TrustedBrand;