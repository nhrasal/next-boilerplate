// import Nav from "@components/Nav";
import AuthFooter from "layouts/AuthFooter/AuthFooter";
import AuthNav from "layouts/AuthNav/AuthNav";
import { ReactNode, Suspense } from "react";

type IMainProps = {
    meta: ReactNode;
    children: ReactNode;
    className?: string;
};

const AuthLayout = (props: IMainProps) => (
    <div className="auth-layout">
        {props.meta}
        <AuthNav />
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
        <AuthFooter />
    </div>
);

export { AuthLayout };
