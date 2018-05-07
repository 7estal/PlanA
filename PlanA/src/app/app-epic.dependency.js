import { configureApiServices } from '../api';

export const configureEpicDependencies = () => ({
    ...configureApiServices(),
});