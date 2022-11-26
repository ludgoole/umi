// 运行时配置
import type { RequestConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const request: RequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  requestInterceptors: [
    (url, options) => {
      console.log('🚀 ~ file: app.ts ~ line 25 ~ options', options);
      // if (options.headers) {
      //   options.headers['X-Token'] = token
      // }
      return {
        url,
        options,
      };
    },
  ],
};
