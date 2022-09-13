/* eslint-disable no-nested-ternary */
import WxIcon from "@components/WxIcon/WxIcon";
import { LocalStorageService } from "@services/utils/localStorage.service";
import Image from "next/image";
import Link from "next/link";
// import WxDropdown from "components/WxDropdown/WxDropdown";
// import WxIcon from "components/WxIcon/WxIcon";
import React, { useState } from "react";

// import { imageURLGenerate } from "util/imageURLGenerator";
import HeaderLogo from "../../../public/assets/images/svg/webx-auth-logo.svg";

const Header = () => {
    const [userData] = React.useState<any>(
        LocalStorageService.get("user_data")
    );

    const [menu, setMenu] = useState(false);

    const [accessToken] = React.useState<any>(
        LocalStorageService.get("accessToken")
    );

    // const { profile_img }: any = LocalStorageService.get("user_data") || {};

    // const navigate = useRouter();
    // TODO:: API issues, temporary handle for logout
    // const signOut = () => {
    //     LocalStorageService.clear();
    //     navigate.push("/login");
    //     window.location.reload();
    // };

    return (
        <div className="head wx__w-100 wx__d-flex wx__justify-content-between">
            <Link href="/">
                <div>
                    <Image src={HeaderLogo} alt="logo" />
                </div>
            </Link>
            {accessToken && (
                <div>
                    <div
                        onClick={() => {
                            setMenu(!menu);
                        }}
                        id="triggerPlace"
                        className="dropdown__btn wx__d-flex wx__align-items-center  wx__justify-content-between"
                    >
                        <div className="wx__d-flex wx__align-items-center wx__text-truncate">
                            <div className="image__wrapper">
                                {/* {profile_img ? (
                                    <img
                                        src={imageURLGenerate(profile_img)}
                                        alt="user"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null; // prevents looping
                                            currentTarget.src = AvatarIMG;
                                        }}
                                    />
                                ) : (
                                    <img src={AvatarIMG} alt="Dummy" />
                                )} */}
                            </div>

                            {userData?.first_name ? (
                                <span className="wx__text_body wx__text_medium">
                                    {userData?.first_name} {userData?.last_name}
                                </span>
                            ) : userData?.email ? (
                                <span className="wx__text_body wx__text_medium">
                                    {userData?.email}
                                </span>
                            ) : (
                                <span className="wx__text_body wx__text_medium">
                                    {userData?.store_name || "My Account"}
                                </span>
                            )}
                        </div>
                        {/* <span className="material-symbols-rounded">expand_more</span> */}
                        <WxIcon icon="expand_more" />
                    </div>

                    {/* <WxDropdown
                        id="triggerPlace"
                        isOpen={menu}
                        setIsOpen={setMenu}
                        windowClose
                        dropClose={false}
                    >
                        <ul>
                            <li className="wx__text_subtitle">
                                <Link
                                    onClick={() => {
                                        signOut();
                                    }}
                                    to=""
                                    role="button"
                                    className="wx__text_body"
                                >
                                    <WxIcon icon="logout" />
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    </WxDropdown> */}
                </div>
            )}
        </div>
    );
};

export default Header;
