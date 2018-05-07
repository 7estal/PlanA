export const createPayloadAction = (type, payload, meta) => ({
    type,
    payload,
    meta,
});

export const createPayloadActionCreator = type =>
    (payload, meta) => createPayloadAction(type, payload, meta);