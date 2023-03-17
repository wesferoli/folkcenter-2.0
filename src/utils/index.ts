export const getAuthUrl = () => {
    const environment = process.env.ENVIRONMENT;

    if (environment === 'development') return process.env.NEXTAUTH_URL_DEV;
    return process.env.NEXTAUTH_URL;
};
