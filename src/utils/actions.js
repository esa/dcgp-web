export const addPayload = (action, payload) => ({
  ...action,
  payload: { ...action.payload, ...payload },
});
