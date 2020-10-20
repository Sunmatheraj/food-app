// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import SearchScreen from './src/screens/SearchScreen';
// import ResultsShowScreen from './src/screens/ResultsShowScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import IndexScreen from './src/screens/IndexScreen';
// import { Provider } from './src/context/BlogContext';
// import ShowScreen from './src/screens/ShowScreen';
// import CreateScreen from './src/screens/CreateScreen';
// import EditScreen from './src/screens/EditScreen';
 

// const navigator = createStackNavigator(
//   {
//     Search: SearchScreen,
//     ResultsShow: ResultsShowScreen,
//     Login: LoginScreen,
//     Index: IndexScreen,
//     Show: ShowScreen,
//     Create: CreateScreen,
//     Edit: EditScreen

//   },
//   {
//     initialRouteName: 'Login',
//     defaultNavigationOptions: {
//       title: 'Restaurant App',
//     },
//   }
// );


//     const App = createAppContainer(navigator);
//     export default () => {
//       return (<Provider><App/></Provider>  );};
// import React from 'react';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// //import { createBottomTabNavigator } from 'react-navigation-tabs';
 
// //import AccountScreen from './src/screens/AccountScreen';
// import SigninScreen from './src/screens/SigninScreen';
// import SignupScreen from './src/screens/SignupScreen';
// //import TrackCreateScreen from './src/screens/TrackCreateScreen';
// //import TrackDetailScreen from './src/screens/TrackDetailScreen';
// //import TrackListScreen from './src/screens/TrackListScreen';
 
// const switchNavigator = createSwitchNavigator({
//  loginFlow: createStackNavigator({
//  Signup: SignupScreen,
//  Signin: SigninScreen,
//  }),
// //  mainFlow: createBottomTabNavigator({
// //  trackListFlow: createStackNavigator({
// //  TrackList: TrackListScreen,
// //  TrackDetail: TrackDetailScreen,
// //  }),
// //  TrackCreate: TrackCreateScreen,
// //  Account: AccountScreen,
// //  }),
// });
 
// export default createAppContainer(switchNavigator);



import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
 
//import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import OtpScreen from './src/screens/OtpScreen';
//import TrackCreateScreen from './src/screens/TrackCreateScreen';
//import TrackDetailScreen from './src/screens/TrackDetailScreen';
//import TrackListScreen from './src/screens/TrackListScreen';



const navigator = createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
    Otp: OtpScreen
}, 
{
  initialRouteName: 'Signin',
  defaultNavigationOptions: {
    title: 'BuisnessSearch'
  }
});

export default createAppContainer(navigator);