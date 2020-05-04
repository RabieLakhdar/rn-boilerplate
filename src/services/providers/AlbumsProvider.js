import React, {createContext, useReducer, useContext} from 'react';
import AlbumsReducer from 'services/reducers/AlbumsReducer';

const AlbumsContext = createContext();
const AlbumsDispatchContext = createContext();

export default ({children}) => {
  const [albumsState, dispatch] = useReducer(AlbumsReducer, {});

  return (
    <AlbumsContext.Provider
      value={{
        albumsState,
      }}>
      <AlbumsDispatchContext.Provider
        value={{
          dispatch,
        }}>
        {children}
      </AlbumsDispatchContext.Provider>
    </AlbumsContext.Provider>
  );
};

export const useAlbums = () => useContext(AlbumsContext);
export const useDispatchAlbums = () => useContext(AlbumsDispatchContext);
