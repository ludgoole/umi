import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { request } from '@umijs/max';

request<API.Result_PageInfo_UserInfo__>(
  'https://njr7h2zt.lc-cn-n1-shared.com/1.1/classes/stock/63822c4c1d35662164c70649',
  {
    // POSt 增
    // DELETE 删
    // PUT 改
    // GET 查
    method: 'GET',
    // data: {
    //   name: '德福祥',
    //   size: 44
    //   // "webs":{"__op":"AddUnique","objects":["Frontend","JavaScript"]}
    // },
    // ...{
    headers: {
      'X-LC-Id': 'nJr7H2ZTnFjg7JefhOAyT1FJ-gzGzoHsz',
      'X-LC-Key': 'MEzvonmeUF6n7n4jLTyqc2CU',
    },
    // },
  },
).then((res) => {
  console.log('🚀 ~ file: index.tsx ~ line 20 ~ res', res);
});

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
