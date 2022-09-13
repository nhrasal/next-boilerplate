// import Nav from "@components/Nav";
import Footer from "layouts/Footer";
import { Meta } from "layouts/Meta";
import Nav from "layouts/Nav";
import { ReactNode, Suspense } from "react";

type IMainProps = {
    meta?: ReactNode;
    children: ReactNode;
    className?: string;
};

const Main = (props: IMainProps) => (
    <div>
        {props?.meta || <Meta title="Webx ltd." description="" />}
        <Nav />
        <div className="mx-auto max-w-screen-md">
            <div className={"page-content " + props.className}>
                <Suspense
                    fallback={
                        <h1 className="text-danger">
                            Loading..................
                        </h1>
                    }
                >
                    {props.children}
                </Suspense>
            </div>
        </div>
        <Footer />
    </div>
);

export { Main };
