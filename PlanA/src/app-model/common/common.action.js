import { createPayloadActionCreator } from "../../shared/payload-action";

const APP_INIT = 'common/APP_INIT';
const EMPTY = 'common/EMPTY';

export const appInit = createPayloadActionCreator(APP_INIT);
export const empty = createPayloadActionCreator(EMPTY);

export const commonActions = {
    appInit,
    empty,
};

export const COMMON_ACTION = {
    APP_INIT,
    EMPTY,
};