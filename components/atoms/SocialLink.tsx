import Image from "next/image";
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";

export interface SocialLinkProps {
    href: string;
    alt?: string;
    icon: string;
    text?: string;
}

export default function SocialLink(props: SocialLinkProps) {
    return(
        <div className="flex items-center mb-4 mx-4">
            <a
                className="w-12 h-12 flex items-center justify-center rounded bg-blue-100 dark:bg-blue-900 hover:scale-110 easy-in duration-200 text-blue-500 display-flex"
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="flex items-center">
                    <Image
                        className="easy-in easy-out duration-200"
                        width={24}
                        height={24}
                        quality={100}
                        src={props.icon}
                        alt=""
                    />
                </div>
            </a>
            <div>
                <span className="ml-2">{props.text}</span>
            </div>
        </div>

    )
}
