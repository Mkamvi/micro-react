import request from '@/utils';
import pluginService from '@/plugins/service';

export const getTodos = (): Promise<Record<string, unknown>> => {
  return request.get('/todos');
};

/* --------------------------------- Plugin --------------------------------- */
// pluginService
