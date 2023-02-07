// const User = require('../models/index');

// export async function createData(data) {
//   const { email, password, firstName, lastName, phoneNumber, birthDay } =
//     data.req.body;

//   const user = new User({
//     email,
//     password,
//     firstName,
//     lastName,
//     phoneNumber,
//     birthDay,
//   });

//   // 데이터베이스에서 실제로 데이터 작성
//   try {
//     await user.save();
//   } catch (error) {
//     return data.throw(500, error);
//   }

//   data.body = user;
// }
