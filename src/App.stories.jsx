import React from 'react';
import App from './App';

export default{
    title:'NoemiAntoniaCoroVasquez/App',
    component: App,
}
const Template = (args) => <App {...args} />;

export const app= Template.bind({});

app.args ={
    backgroundColor:''
 };