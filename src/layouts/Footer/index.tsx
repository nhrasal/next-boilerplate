// import WxIcon from "@components/WxIcon/WxIcon";
import Image from "next/image";
import Link from "next/link";
import WebXLogo from "../../../public/assets/images/webxLogo.png";
import FB from "../../../public/assets/images/social/fb.svg";
import Instagram from "../../../public/assets/images/social/instagram.svg";
import Twitter from "../../../public/assets/images/social/twitter.svg";
import Linkedin from "../../../public/assets/images/social/linkedin.svg";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer">
                <div className="container">
                    <div className="wx__row">
                        <div className="wx__col-md-4">
                            <div className="wx__footer-logo">
                                <Image
                                    src={WebXLogo}
                                    alt="..."
                                    width={148}
                                    height={33}
                                />
                            </div>
                            <p className="wx__text_body wx__text_regular wx__text-white">
                                WebX is an effortless eCommerce platform for
                                creators looking to sell digital, physical,
                                subscription, and print-on-demand products from
                                a beautiful online store.
                            </p>
                            <div className="wx__d-flex wx__mt-4">
                                <a
                                    href="https://www.facebook.com/"
                                    className="wx__social-media"
                                >
                                    <Image
                                        src={FB}
                                        alt="..."
                                        width={24}
                                        height={24}
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    className="wx__social-media wx__ms-3"
                                >
                                    <Image
                                        src={Instagram}
                                        alt="..."
                                        width={24}
                                        height={24}
                                    />
                                </a>
                                <a
                                    href="https://twitter.com/"
                                    className="wx__social-media wx__ms-3"
                                >
                                    <Image
                                        src={Twitter}
                                        alt="..."
                                        width={24}
                                        height={24}
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    className="wx__social-media wx__ms-3"
                                >
                                    <Image
                                        src={Linkedin}
                                        alt="..."
                                        width={24}
                                        height={24}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="wx__col-md-8 ">
                            <div className="wx__row wx__pt-md-0 wx__pt-4">
                                <div className="wx__col-md-3 wx__col-6">
                                    <p className="wx__text_h5 wx__text_semibold wx__text-white wx__mb-md-2 wx__mb-1">
                                        Home
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Home
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Features
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Pricing
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Blog
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="wx__col-md-3 wx__col-6">
                                    <p className="wx__text_h5 wx__text_semibold wx__text-white wx__mb-md-2 wx__mb-1">
                                        Company
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    About Us
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Contact Us
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Careers
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Support
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="wx__col-md-3 wx__col-6">
                                    <p className="wx__text_h5 wx__text_semibold wx__text-white wx__mb-md-2 wx__mb-1">
                                        Information
                                    </p>
                                    <ul>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Terms & Condition
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    Privacy Policy
                                                </p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <p className="wx__text_body wx__text_regular wx__text-white">
                                                    FAQ
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="wx__col-md-3 wx__col-6">
                                    <p className="wx__text_h5 wx__text_semibold wx__text-white wx__mb-md-2 wx__mb-1">
                                        Address
                                    </p>
                                    <p className="wx__text_body wx_text_regular wx__text-white">
                                        WebX Global Ltd.House: 463, Lane - 8,
                                        Baridhara DOHS, Dhaka.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wx__py-3 wx__bg-dark wx__text-center">
                <p className="wx__text_body wx_text_regular wx__text-white">
                    Copyright © 2022 WebX Global | All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
