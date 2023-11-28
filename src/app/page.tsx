"use client";

import Image from 'next/image';
import React, { useState } from "react";

// eslint-disable-next-line react/display-name
const Child_1 = React.memo(() => {
  return (
    <>
      <p>Child_1コンポーネントです。</p>
    </>
  );
});

// eslint-disable-next-line react/display-name
const Child_2 = React.memo(() => {
  return (
    <>
      <p>Child_2コンポーネントです。</p>
    </>
  );
});

export default function Parent() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>親コンポーネントです。</p>
      <input 
        type="text" 
        onChange={handleChange} 
        value={text} 
        className="border-2 border-slate-200 rounded-md" 
      />
      <Child_1 />
      <Child_2 />
    </div>
  )
}
