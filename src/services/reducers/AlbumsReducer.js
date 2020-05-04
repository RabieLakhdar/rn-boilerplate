const initialState = {
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALBUMS':
      return {
        ...state,
        loading: false,
        getAlbums: action.payload,
      };
  }
};
