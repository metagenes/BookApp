import Axios from "axios";

// export const borrowBooks = (book_id, user_id,book_at) => {
//   return {
//     type: "POST_BORROW",
//     payload: Axios.post(`http://localhost:8000/book/order`, {
//       book_id,
//       user_id,
//       book_at
//     })
//   };
// };

export const borrowBooks = (book_id,user_id,book_at) => {
    return {
      type: 'POST_BORROW',
      payload: Axios.post('http://localhost:8000/book/order',
      {book_id,
      user_id,
      book_at,
      }),
    };
  };

// export const getHistory = user_id => {
//   return {
//     type: "GET_HISTORY",
//     payload: Axios.get(
//       `http://localhost:8000/user/history?id=${user_id}`,
//     {
//       user_id
//     }),
//   };
// };

export const getHistory = user_id => {
  return {
    type: 'GET_HISTORY',
    payload: Axios.get(`http://localhost:8000/user/history?id=${user_id}`),
  };
};

// export const getWishlist = user_id => {
//   return {
//     type: "GET_HISTORY",
//     payload: Axios.get(
//       `http://localhost:8000/user/wishlist${user_id}`,
//     {
//       user_id
//     }),
//   };
// };

export const getWishlist = user_id => {
  return {
    type: 'GET_WISHLIST',
    payload: Axios.get(`http://localhost:8000/user/wishlist?user_id=${user_id}`),
  };
};