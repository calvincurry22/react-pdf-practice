import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './components/MyDocument';


export default () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);


export default App;
