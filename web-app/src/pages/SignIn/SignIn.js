
// }
// import React, { useState } from 'react';
// import axios from 'axios';
// import loginImg from '~/image/xay-dung-website-ban-hang.jpg';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       const response = await axios.post('', {
//         username,
//         password,
//       });

//       // Xử lý kết quả từ API tại đây (response.data)
//       console.log('Đăng nhập thành công:', response.data);
//     } catch (error) {
//       // Xử lý lỗi tại đây (error.message)
//       console.error('Đăng nhập thất bại:', error.message);
//     }
//   };

//   return (
//     <div className='flex h-screen bg-gray-100'>
//       <div className='w-1/2 hidden sm:block'>
//         <img
//           className='w-full h-full object-contain object-center'
//           src={loginImg}
//           alt='Minion Login'
//         />
//       </div>
//       <div className='w-full sm:w-1/2 bg-gray-100 flex flex-col justify-center'>
//         <form className='max-w-md mx-auto bg-white p-8 shadow-md rounded'>
//           <h2 className='text-4xl font-bold text-center mb-6'>BRAND.</h2>
//           <div className='mb-4'>
//             <label htmlFor='username' className='text-lg font-medium'>
//               Username
//             </label>
//             <input
//               id='username'
//               className='w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
//               type='text'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className='mb-4'>
//             <label htmlFor='password' className='text-lg font-medium'>
//               Password
//             </label>
//             <input
//               id='password'
//               className='w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
//               type='password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             className='w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded'
//             onClick={handleSignIn}
//           >
//             Sign In
//           </button>
//           <div className='flex justify-between mt-4'>
//             <label className='flex items-center'>
//               <input className='mr-2' type='checkbox' /> Remember Me
//             </label>
//             <p>Create an account</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import axios from 'axios';
import loginImg from '~/image/xay-dung-website-ban-hang.jpg';
import 'animista';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSignIn = async () => {
    setIsSubmitting(true);

    try {
      const response = await axios.post('', {
        username,
        password,
      });

      // Xử lý kết quả từ API tại đây (response.data)
      console.log('Đăng nhập thành công:', response.data);
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      // Xử lý lỗi tại đây (error.message)
      console.error('Đăng nhập thất bại:', error.message);
      setIsSubmitting(false);
      setIsError(true);
    }
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <div className='w-1/2 hidden sm:block'>
        <img
          className='w-full h-full object-contain object-center'
          src={loginImg}
          alt='Login Imgage'
        />
      </div>
      <div className='w-full sm:w-1/2 bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-md mx-auto bg-white p-8 shadow-md rounded'>
          <h2 className='text-4xl font-bold text-center mb-6'>BRAND.</h2>
          <div className='mb-4'>
            <label htmlFor='username' className='text-lg font-medium'>
              Username
            </label>
            <input
              id='username'
              className='w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='text-lg font-medium'>
              Password
            </label>
            <input
              id='password'
              className='w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={`w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded ${
              isSubmitting ? 'disabled:opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleSignIn}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className='flex items-center justify-center'>
                <div
                  className='animista-loader'
                  style={{ borderTopColor: 'transparent' }}
                ></div>
              </div>
            ) : (
              'Sign In'
            )}
          </button>
          {isSuccess && (
            <p className='text-green-500 mt-4 text-sm'>
              Đăng nhập thành công!
            </p>
          )}
          {isError && (
            <p className='text-red-500 mt-4 text-sm'>
              Đăng nhập thất bại. Vui lòng thử lại!
            </p>
          )}
          <div className='flex justify-between mt-4'>
            <label className='flex items-center'>
              <input className='mr-2' type='checkbox' /> Remember Me
            </label>
            <p>Create an account</p>
          </div>
        </form>
      </div>
    </div>
  );
}