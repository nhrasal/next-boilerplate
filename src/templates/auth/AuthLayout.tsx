// import { ReactComponent as BottomImage } from "../../../assets/svg/bottom-left-zebra.svg";
import Image from "next/image";

import BottomImage from "../../../public/assets/images/svg/bottom-left-zebra.svg";
import Footer from "./Footer";
import Header from "./Header";

const AuthLayout = ({ children }: any) => {
    return (
        <div className="authentication__main">
            <div className="auth_content">
                <div className="container">
                    <Header />
                    <div className="content">{children}</div>
                </div>
                <div className="bottom-image">
                    <Image src={BottomImage} alt="" />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default AuthLayout;
