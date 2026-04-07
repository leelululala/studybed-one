import ApiUtils from '@/utils/ApiUtils';

export const signUp = (data, config) => {
  return ApiUtils.sendPost('/signup', data, config);
};
