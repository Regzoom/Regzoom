import SocialLink, {SocialLinkProps} from "../atoms/SocialLink";

const LINKS: SocialLinkProps[] = [
    {href: "https://github.com/Regzoom", icon: "/icons/github.svg", text: "@regzoom"},
    {href: "https://t.me/psyhoregzoom", icon: "/icons/telegram.svg", text: "@psyhoregzoom"},
    {href: "https://discord.com/users/678203623708033024", icon: "/icons/discord.svg", text: "@psyhoregzoom"},
    {href: "https://www.instagram.com/psyhoregzoom", icon: "/icons/instagram.svg", text: "@psyhoregzoom"},
]

export default function SocialLinksGroup() {
    return (
        <div className="flex flex-row flex-wrap justify-center">
            {LINKS.map((link, index) => (
                <SocialLink key={index} href={link.href} icon={link.icon} text={link.text}></SocialLink>
            ))}
        </div>
    )
}
