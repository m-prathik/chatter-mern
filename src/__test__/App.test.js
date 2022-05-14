import React from 'react';
import  ReactDOM  from  'react-dom/client';
import App from './../App';
//import {render} from '@testing-library/react' 

it("renders without issue",() =>{
    const div = document.createElement("div");
    const root = ReactDOM.createRoot(div);
    root.render(<App />)
}) 
