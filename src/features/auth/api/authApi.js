import ApiUtils from '@/utils/ApiUtils';

export const signUp = (data, config) => {
  return ApiUtils.sendPost('/users/signup', data, config);
};
