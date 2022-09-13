interface IENV {
    env: string;
    ApiEndpoint: string;
    AdminURL?: string;
    LandingPageURL?: string;
    IMAGE_BASE_URL?: string;
}

export const ENV: IENV = {
    env: process.env.NEXT_PUBLIC_ENV || "",
    ApiEndpoint: process.env.NEXT_PUBLIC_BASE_URL || "",
    AdminURL: process.env.NEXT_PUBLIC_ADMIN_URL || "",
    LandingPageURL: process.env.NEXT_PUBLIC_LANDING_PAGE || "",
    IMAGE_BASE_URL: process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ""
};
