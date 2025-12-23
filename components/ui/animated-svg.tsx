"use client"
export function AnimatedMouseSVG() {
    return (
        <div className="inline-block animate-[float_3s_ease-in-out_infinite]">
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes scrollWheel {
                    0%, 100% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(6px); opacity: 0.7; }
                }
                @keyframes flowDots {
                    0% { opacity: 0; transform: translateY(-10px); }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { opacity: 0; transform: translateY(10px); }
                }
                @keyframes arrowBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.6; }
                }
                .scroll-wheel {
                    animation: scrollWheel 2s ease-in-out infinite;
                }
                .flow-dots {
                    animation: flowDots 2.5s linear infinite;
                }
                .arrow-bounce {
                    animation: arrowBounce 2s ease-in-out infinite;
                }
                .mouse-body {
                    animation: pulse 3s ease-in-out infinite;
                }
                .dot-1 { animation-delay: 0s; }
                .dot-2 { animation-delay: 0.3s; }
                .dot-3 { animation-delay: 0.6s; }
                .dot-4 { animation-delay: 0.9s; }
                .dot-5 { animation-delay: 1.2s; }
                .dot-6 { animation-delay: 1.5s; }
                .dot-7 { animation-delay: 1.8s; }
                .dot-8 { animation-delay: 2.1s; }
            `}</style>

            <svg
                width="32"
                height="100"
                viewBox="0 0 32 143"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
            >
                {/* Mouse Body with subtle pulse */}
                <g clipPath="url(#clip0_13_644)" className="mouse-body">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16V28C32 36.8366 24.8366 44 16 44H14V43.8762C6.10738 42.892 0 36.1592 0 28V16ZM16 40C22.6274 40 28 34.6274 28 28V16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16V28C4 34.6274 9.37258 40 16 40Z"
                        className="fill-primary-foreground"
                    />

                    {/* Animated Scroll Wheel */}
                    <path
                        d="M17.3334 9.16663V16.5H14.6667V9.16663H17.3334Z"
                        className="fill-primary scroll-wheel"
                    />
                </g>

                {/* Flowing Dots Animation - simplified dots */}
                <g>
                    <circle cx="16" cy="60" r="1.5" className="fill-primary flow-dots dot-1" />
                    <circle cx="16" cy="70" r="1.5" className="fill-primary flow-dots dot-2" />
                    <circle cx="16" cy="80" r="1.5" className="fill-primary flow-dots dot-3" />
                    <circle cx="16" cy="90" r="1.5" className="fill-primary flow-dots dot-4" />
                    <circle cx="16" cy="100" r="1.5" className="fill-primary flow-dots dot-5" />
                    <circle cx="16" cy="110" r="1.5" className="fill-primary-foreground flow-dots dot-6" />
                    <circle cx="16" cy="120" r="1.5" className="fill-primary-foreground flow-dots dot-7" />
                    <circle cx="16" cy="130" r="1.5" className="fill-primary-foreground flow-dots dot-8" />
                </g>

                {/* Animated Arrow */}
                <g className="arrow-bounce">
                    <path
                        d="M16 142.887L18.8868 140L16 137.113L13.1132 140L16 142.887Z"
                        className="fill-primary-foreground"
                    />
                </g>

                <defs>
                    <clipPath id="clip0_13_644">
                        <rect width="32" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}