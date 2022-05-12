import React from 'react';
import './index.css';
import {state} from "./redux/state.js";
import {rerenderEntireTree} from "./rerender";

rerenderEntireTree(state);