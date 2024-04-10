'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [encodeInput, setEncodeInput] = useState('');
  const [decodeInput, setDecodeInput] = useState('');
  const [encodedResult, setEncodedResult] = useState('');
  const [decodedResult, setDecodedResult] = useState('');

  const handleEncodeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEncodeInput(value);
    setEncodedResult(encodeURIComponent(value));
  };

  const handleDecodeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDecodeInput(value);
    try {
      setDecodedResult(decodeURIComponent(value));
    } catch (error) {
      setDecodedResult('デコードエラー: 不正な入力');
    }
  };

  return (
    <>
      <Header />
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Raleway:300|Lusitana:400,700" rel="stylesheet" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className="get-in-touch">
        <h1 className="title">URL エンコーダー/デコーダー</h1>
        <div className="contact-form row">
          <div className="form-field col x-100">
            <input 
              id="encodeInput" 
              className="input-text js-input" 
              type="text" 
              value={encodeInput} 
              onChange={handleEncodeInputChange} 
              required 
            />
            <label className="label" htmlFor="encodeInput">エンコード</label>
            <div id="encodedResult" className="result" style={{ background: '#E0F7FA', padding: '10px', borderRadius: '5px', wordBreak: 'break-all', overflowWrap: 'break-word' }}>{encodedResult}</div>
          </div>
          <div className="form-field col x-100">
            <input 
              id="decodeInput" 
              className="input-text js-input" 
              type="text" 
              value={decodeInput} 
              onChange={handleDecodeInputChange} 
              required 
            />
            <label className="label" htmlFor="decodeInput">デコード</label>
            <div id="decodedResult" className="result" style={{ background: '#E1F5FE', padding: '10px', borderRadius: '5px', wordBreak: 'break-all', overflowWrap: 'break-word' }}>{decodedResult}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;