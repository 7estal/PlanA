import { API_CONFIG } from './api-url.config';

export const configureApiServices = () => ({
    defaultRetryConfig: {
        max: 100000,
        interval: 1000,
    },
});
