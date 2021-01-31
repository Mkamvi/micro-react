import Mock from 'mockjs';

Mock.setup({
  timeout: '2000-6000'
})
Mock.mock('/api/getUserInfo', 'get', {
  status: 200,
  message: 'ok',
  data: {
    name: 'iWuzhi',
    age: 18,
    sex: 'Male'
  }
});