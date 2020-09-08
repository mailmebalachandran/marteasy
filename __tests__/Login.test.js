import 'react-native';
import React from 'react';
import LoginScreen from '../src/screens/Login/LoginScreen';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup, screen} from '@testing-library/react-native';


it('function and state test care', () =>{
    let LoginData = renderer.create(<LoginScreen />).getInstance();
    LoginData.onChangeHandlerUsername('Bala');
    expect(LoginData.state.UserName).toEqual('Bala');

});
// import LoginAPI from '../../api/Login/LoginAPI';
// import { interpolate } from 'react-native-reanimated';

// test('renders correctly', () => {
//   const tree = renderer.create(<LoginScreen />).toJSON();
//   expect(tree).toMatchSnapshot();
// // });
// afterEach(cleanup);
// test('Username should not be empty', () =>{
//     const { getByPlaceholderText, getByText, getAllByText } = render(
//         <LoginScreen />
//       );
//     fireEvent.changeText(getByPlaceholderText('Username'), '');
//     fireEvent.changeText(getByPlaceholderText('Password'), '');
//     fireEvent.press(getByText('Login'));
//     const InvalidData = getAllByText('User name should not be empty');
//     expect(InvalidData).toHaveLength(1);
// });

// test('Password should not be empty', () =>{
//     const { getByPlaceholderText, getByText, getAllByText } = render(
//         <LoginScreen />
//       );
//     fireEvent.changeText(getByPlaceholderText('Username'), 'Admin');
//     fireEvent.changeText(getByPlaceholderText('Password'), '');
//     fireEvent.press(getByText('Login'));
//     const InvalidData = getAllByText('Password should not be empty');
//     expect(InvalidData).toHaveLength(1);
// });

//   test('Invalid Credentails', async () => {
//     const {getByPlaceholderText, getByText, getAllByText} = render(
//       <LoginScreen />,
//     );
//     fireEvent.changeText(getByPlaceholderText('Username'), 'Admin');
//     fireEvent.changeText(getByPlaceholderText('Password'), 'Admin');
//     fireEvent.press(getByText('Login'));
//     //Invalid Credentials
//     const userDetails = {
//       username: 'Admin',
//       password: 'Admin',
//     };
//     let data = await LoginAPI.LoginValidation(userDetails);
//     const dataValue = data.message;
//     expect(data.message).toEqual('Invalid Credentials');
//   });

// describe ('Validation', () => {
// test('Logged in Successful', async () =>{
//     const { getByPlaceholderText, getByText, getAllByText, getAllByName } = render(
//         <LoginScreen />
//       );
//     fireEvent.changeText(getByPlaceholderText('Username'), 'Admin');
//     fireEvent.changeText(getByPlaceholderText('Password'), 'Admin');
//     fireEvent.press(getByText('Login'));
//     let username= getByText('Username');
//     console.log(username);
//     const userDetails = {
//         username: 'pallu1',
//         password: 'nullvoid',
//     };
//     let data = await LoginAPI.LoginValidation(userDetails);
//     const dataValue = data.message;
//     expect(data.message).toEqual('Logged in successfully');
// });
// });

// let findElement = function(tree, element){
//     console.warn(tree)
//     return true;
// }
// describe('Test 1 ', () =>{
// it('find Element', () =>{
//     let tree = renderer.create(<LoginScreen />).toJSON();
//     expect(findElement(tree,'username')).toBeDefined;
// });
// });