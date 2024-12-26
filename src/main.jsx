import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Xyz from "./lec2412/component1";
import StateExample from "./lec2612/StateExample";
import StateExample1 from "./lec2612/Statemani";


//1. ClassBase implementation
//2. Function Based implementation


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Xyz/>
    <StateExample/>
    <StateExample1/>
  </StrictMode>,
);
