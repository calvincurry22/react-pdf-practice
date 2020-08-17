import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './components/MyDocument';

export default () => {
  /*Using PDFDownloadLink allos for 'On the fly' document creation,
  meaning that it doesn't have to render on screen before being downloaded. */
  return (
    <PDFDownloadLink document={<MyDocument />}>
      Click to download
    </PDFDownloadLink>
  )
};



