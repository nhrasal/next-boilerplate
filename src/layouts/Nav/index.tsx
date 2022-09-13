import Link from "next/link";
import { useState } from "react";

const Nav = () => {
    const [navShow, setNavShow] = useState(true);
    const onClickToggleNav = () => {
        const navSec = document.getElementById("navbarSupportedContent");
        if (navShow) navSec?.classList.add("show");
        else navSec?.classList.remove("show");
        setNavShow(!navShow);
    };

    return (
        <section className="bg-white p-0">
            <nav className="main-menu navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src="../../../assets/images/logo.e88bba92815ef449ac3f.png"
                            alt=""
                            width="169"
                        />
                    </a>
                    <button
                        onClick={() => onClickToggleNav()}
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link active">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about-us">
                                    <a className="nav-link">About Us</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link">Contact</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/our-clients">
                                    <a className="nav-link">Our Clients</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/roadmap">
                                    <a className="nav-link">Roadmap</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/why-us">
                                    <a className="nav-link">Why us</a>
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item d-flex align-items-center">
                                    <Link href="/login">
                                        <a className="nav-link">Login</a>
                                    </Link>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <Link href="#">
                                        <button
                                            className="wx__d-flex wx__justify-content-center wx__align-items-center wx__btn wx__btn_primary_outline"
                                            type="button"
                                        >
                                            14 Days Trial
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Nav;
