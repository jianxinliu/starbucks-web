import { Configuration, ConfigurationParameters, StarbucksApiApi } from "./apis";

const isDev = import.meta.env.MODE === 'dev'
const configParams: ConfigurationParameters = {
    basePath: import.meta.env.VITE_API_BASE_PATH + isDev ? '/api' : '',
    accessToken: async (name, scopes): Promise<string> => {
        return localStorage.getItem('auth') || ''
    }
};

const config = new Configuration(configParams);

export const StarBucksApis = new StarbucksApiApi(config)