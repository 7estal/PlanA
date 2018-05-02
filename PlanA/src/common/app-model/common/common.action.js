import { createPayloadActionCreator } from "../../shared/payload-action";

const APP_INIT = 'common/APP_INIT';

export const appInit = createPayloadActionCreator(APP_INIT);

export const commonActions = {
    appInit,
};

export const COMMON_ACTION = {
    APP_INIT,
};