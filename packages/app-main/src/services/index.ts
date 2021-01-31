import { request } from '../utils';

export const getUserInfo = (): Promise<Record<string, unknown>> => {
  return request.get('/api/getUserInfo').then((res) => res.data);
};
