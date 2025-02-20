const mockESIMData = {
  1: {
    dataUsage: null,
    dataTotal: null,
    country: 'USA',
    day: 1,
    dateUsage: 1,
    dateTotal: 3
  },
  2: {
    dataUsage: '3GB',
    dataTotal: '3GB',
    country: 'USA',
    day: 1,
    dateUsage: 1,
    dateTotal: 3
  },
  3: {
    dataUsage: '2.6GB',
    dataTotal: '3GB',
    country: 'USA',
    day: 1,
    dateUsage: 3,
    dateTotal: 3
  },
  4: {
    dataUsage: '24.1GB',
    dataTotal: 'Unlimited data',
    country: 'USA',
    day: 1,
    dateUsage: 2,
    dateTotal: 30
  }
};

// 模拟通过ID查询eSIM数据的函数
export const getESIMDataById = (id) => {
  return mockESIMData[id] || null;
};

export default mockESIMData;
