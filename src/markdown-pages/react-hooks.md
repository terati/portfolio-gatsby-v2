---
slug: "/blog/react-hooks"
date: "2020-11-20"
title: "React Hooks"
featuredImage: ../images/hooks.jpg
tags: ["article", "react"]
---

React hooks were introduced in February 2019 as a part of React 16.8. It brought state and lifecycle methods which was previously only available in class components into functional components which lended to simpler code. Hooks are reccommended but completely opt-in.

## The useState Hook

The useState Hook is the most common hook. It takes the place of **this.state** in a class component. In the simple example below, a user can increment the counter on the screen with a button press. Count is the state variable and setCount is the method used to change the count value. The initial value of count is set to 0. 

```javascript
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  
  return 
    <div>
      Counter Value: {count}.
      <button onClick={handleClick}> Increment </button>
    </div>
}
```

## The useEffect Hook

Another widely used hook, the useEffect hook encapsulates the class lifestyle methods: **componentDidMount**, **componentDidUpdate**, and **componentWillUnmount**. The hooks takes in two parameters. The first being the function that performs the action such as data fetching, changing values, etc. The second parameter is a dependency array that dictates when the hook is called. There are 4 general situations for the useEffect hook.

When the dependency array is an empty array the useEffect hook is only called once upon the component mounting. A case would be initially fetching data when a page initially loads. 

```javascript 
import React, { useState, useEffect } from 'react';
function SomeComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const response = async fetch('someDataAPI')
            //fetching data when the component initially mounts.
            .then((data) => setData(data))
            .catch((err) => {})
  }, [])   // An empty array ==> []

  return 
    <div>
      {/* 
        Some display of the data
      */}
    </div>
}
```

The second situation would be that the useEffect hook runs based on state or prop changes that are passed in the dependency array. For example, if there was a button on the page to manually refresh and fetch data again or if the fetching url depended on an ID prop passed to it. 

```javascript 
import React, { useState, useEffect } from 'react';
function SomeComponent({id}) {
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const response = await async fetch('someDataAPI:'+id)
            .then((data) => setData(data))
            .catch((err) => console.log(err))
  }, [id, flag])   // The useEffect is run when id or flag changes value.

  return 
    <div>
      <button onClick={() => setFlag(!flag)}>Refresh</button>
      {/* 
        Some display of the data
      */}
    </div>
}
```
A third situation would be when the dependency array is omitted. The hook would trigger upon any re-render. This is generally not a desired behavior and can cause unnecessary rerenders that reduces performance. 

A fourth situation is when you want the component to do only when the component unmounts. This is done by in the return function on the useEffect hook. 



## The useRef Hook 

This hook is to hold data similar to the useState hook but differs in that it does that without re-rendering. An update to a useState hook fires off a re-render. 

## The useContext Hook


## The useMemo Hook


## The useCallback Hook

