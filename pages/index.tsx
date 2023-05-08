import Head from 'next/head'
import SocialLinksGroup from "../components/molecules/SocialLinksGroup";
import Avatar from "../components/atoms/Avatar";
import Footer from "../components/organisms/Footer";
import {useTheme} from "next-themes";
import Star from "../components/atoms/Star";
import Light from "../components/atoms/Light";

export default function Home() {
    const {resolvedTheme} = useTheme();

    return (
        <div className="p-0 px-8">
            <main
                className="min-h-[100vh] flex flex-col align-center justify-center font-Poppins z-1000 overflow-hidden">
                <Light/>

                <div
                    className="md:container px-5 py-24  mx-auto my-auto w-full flex flex-col justify-center align-center">
                    <div
                        className="flex flex-col text-center justify-center w-full mx-auto mb-20 lg:w-2/3 space-y-4">
                        <Avatar/>

                        <h1 className="text-3xl subpixel-antialiased sm:text-2xl md:text-4xl lg:text-6xl lg:leading-[70px] font-extrabold text-gray-900 dark:text-white">Hello,
                            I’m <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">Regzoom</span>
                        </h1>

                        <SocialLinksGroup/>
                    </div>
                </div>
                <Footer/>

                <div className="z-[-1]">
                    {resolvedTheme === 'dark' && Array(80).fill(0).map((_, i) => <Star key={i}/>)}
                </div>


            </main>


        </div>
    )
}
