import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import { fetchData } from './libraries/actions/settingsAction';
import { orangeStore } from './libraries/orangeStore';
import Navigation from './navigation';
import LoadingScreen from './screens/Global/LoadingScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();

  // const { settingsData } = useSelector((state) => state.settingsData);
  
  // useEffect(() => {
  //   const dispatch = useDispatch()
  //   dispatch(fetchData())
  // }, [])

  // console.log(settingsData);


  if (!isLoadingComplete) {
    return (
      <LoadingScreen />
    )
  } else {
    return (
      <Provider store={orangeStore}>
        <Navigation />
        <StatusBar style="auto" />
      </Provider>
    );
  }
}