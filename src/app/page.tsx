'use client';

import { useState } from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleEncode = () => {
    setResult(encodeURIComponent(inputValue));
  };

  const handleDecode = () => {
    try {
      setResult(decodeURIComponent(inputValue));
    } catch (error) {
      setResult('デコードエラー: 不正な入力');
    }
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Raleway:300|Lusitana:400,700" rel="stylesheet" />
      </Head>
      <div className="get-in-touch">
        <h1 className="title">URL エンコーダー/デコーダー</h1>
        <div className="contact-form row">
          <div className="form-field col x-100">
            <input 
              id="input" 
              className="input-text js-input" 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              required 
            />
            <label className="label" htmlFor="input">テキストを入力</label>
          </div>
          <div className="form-field col x-100 align-center">
            <input 
              className="submit-btn" 
              type="button" 
              value="エンコード" 
              onClick={handleEncode} 
            />
            <input 
              className="submit-btn" 
              type="button" 
              value="デコード" 
              onClick={handleDecode} 
              style={{ marginLeft: '10px' }}
            />
          </div>
          <div className="form-field col x-100">
            <label className="label">処理結果:</label>
            <textarea 
              id="result" 
              className="input-text js-input" 
              value={result} 
              readOnly
              style={{ height: '100px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;