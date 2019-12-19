const initialState = {
    borrowList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false
  };
  
  const borrow = (state = initialState, action) => {
    switch (action.type) {
      case "GET_HISTORY_PENDING":
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false
        };
  
      case "GET_HISTORY_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
  
      case "GET_HISTORY_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          borrowList: action.payload.data
        };
  
      case "POST_BORROW_PENDING":
        return {
          ...state,
          isLoading: true,
          isFulfilled: false,
          isRejected: false
        };
  
        
      case "POST_BORROW_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true
        };
  
      case "POST_BORROW_FULFILLED":
        state.borrowList.push(action.payload.data);
        return {
          isLoading: false,
          isFulfilled: true,
          borrowList: state.borrowList
        };
      
        // newhere
        case "GET_WISHLIST_PENDING":
          return {
            ...state,
            isLoading: true,
            isFulfilled: false,
            isRejected: false
          };
    
        case "GET_WISHLIST_REJECTED":
          return {
            ...state,
            isLoading: false,
            isRejected: true
          };
    
        case "GET_WISHLIST_FULFILLED":
          return {
            ...state,
            isLoading: false,
            isFulfilled: true,
            borrowList: action.payload.data
          };
        // endhere
      default:
        return state;
    }
  };
  
  export default borrow;