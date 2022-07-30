
import React from "react";

import{useEffect, useState} from "react"
import { warnOnce } from "reactstrap/lib/utils";


 
export default function Test() {
  const [offset, setOffset] = useState(0);
  const setScroll = () => {
    setOffset(window.scrollY);
  };

    useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1><h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <div style={{color:"red"}}>{offset}</div>
       <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      
      
      
      
    </div>
  );
}
