import React from 'react';
import Navigator from 'navigations';
import AlbumsProvider from 'services/providers/AlbumsProvider';

const App = () => (
  <AlbumsProvider>
    <Navigator />
  </AlbumsProvider>
);

export default App;
