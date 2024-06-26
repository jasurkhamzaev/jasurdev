import Link from "next/link";
import { FaLinkedinIn, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jasur-khamzayev" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100091393442463" },
    { icon: <FaXTwitter />, path: "https://www.twitter.com/JasurKhamzayev" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/@JasurKhamzayev" },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return (
                    <Link
                        href={item.path}
                        key={index}
                        className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}

        </div>
    )
}

export default Socials
