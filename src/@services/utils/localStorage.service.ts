export const isBrowser = typeof window !== "undefined";
export const isServer = typeof window === "undefined";

export const LocalStorageService = {
    set: (key: string, value: any): void => {
        if (isBrowser) return localStorage.setItem(key, JSON.stringify(value));
    },
    get: (key: string): string | null => {
        if (isBrowser) return JSON.parse(localStorage.getItem(key) || "null");
        return null;
    },
    delete: (key: string): void => {
        if (isBrowser) return localStorage.removeItem(key);
    },
    clear: (): void => {
        if (isBrowser) return localStorage.clear();
    }
};
