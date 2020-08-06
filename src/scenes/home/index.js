import React, {useEffect} from 'react';
import AreaView from 'components/atoms/AreaView';
import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';
import {albums} from './actions';
import {
  useAlbums,
  useDispatchAlbums,
} from '../../services/providers/AlbumsProvider';

const HomeScreen = ({navigation}) => {
  const {albumsState} = useAlbums();
  const {dispatch} = useDispatchAlbums();

  useEffect(() => {
    albums(dispatch);
  }, [dispatch]);

  return (
    <AreaView>
      <Title>Screen: Home</Title>

      <Button onPress={() => navigation.navigate('About')}>
        <Title>Go to About</Title>
      </Button>
    </AreaView>
  );
};
export default HomeScreen;
