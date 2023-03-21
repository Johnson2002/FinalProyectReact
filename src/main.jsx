import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ChakraProvider } from '@chakra-ui/react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfXu8EM4O4xI0yjyWTmpq9ReB0QmvW2g",
  authDomain: "fir-i-10867.firebaseapp.com",
  projectId: "fir-i-10867",
  storageBucket: "fir-i-10867.appspot.com",
  messagingSenderId: "309986961962",
  appId: "1:309986961962:web:b10575c99cd88b0921b153"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>

)
