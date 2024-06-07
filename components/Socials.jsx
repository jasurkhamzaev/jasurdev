import Link from "next/link";
import { FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const social = [
    { icon: <FaLinkedinIn />, path: "linkedin.com/in/jasur-khamzayev" },
    { icon: <FaFacebook />, path: "facebook.com/profile.php?id=100091393442463" },
    { icon: <FaTwitter />, path: "twitter.com/JasurKhamzayev" },
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
