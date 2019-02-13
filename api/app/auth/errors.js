export default {
  INVALID_CREDENTIALS: {
    error: true,
    message: 'Invalid credentials',
    errorCode: 'AUTH1',
  },

  INVALID_TOKEN: {
    error: true,
    message: 'Invalid Token',
    errorCode: 'AUTH2',
  },

  INVALID_USER_DETAILS: error => ({
    error: true,
    message: error || 'User details are not valid',
    errorCode: 'AUTH3',
  }),
};
