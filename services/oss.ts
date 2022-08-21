import OSS from 'ali-oss'

const store = new OSS({
  region: 'oss-cn-shanghai',
  accessKeyId: process.env.ALIYUN_ACCESS_KEY_ID,
  accessKeySecret: process.env.ALIYUN_ACCESS_KEY_SECRET,
  bucket: 'w3champions'
});

export { store }