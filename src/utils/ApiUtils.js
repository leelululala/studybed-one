import apiClient from '@/api/apiClient';

const ApiUtils = {
  //POST 통신을 위한 함수
  sendPost: async (url, data, config = {}) => {
    try {
      const response = await apiClient.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error(`[API 에러]: ${url}`, error);
      throw error;
    }
  },
};

export default ApiUtils;
