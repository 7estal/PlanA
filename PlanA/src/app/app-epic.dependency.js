import { configureApiServices } from '../common/api';

export const configureEpicDependencies = () => ({
    ...configureApiServices(),
});