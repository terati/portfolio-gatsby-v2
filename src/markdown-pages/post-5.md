---
slug: "/blog/my-fifth-post"
date: "2022-05-04"
title: "Javascript ES6 Stuff I Learned"
featuredImage: ../images/gatsby-astronaut.png
description: "Some description"
---



# Important Javascript concepts. 

For import statements. When I should or should not use brackets { }.
The brackets refer to a **named import** in comparison to a **default export**. 
When you use a 'named import', the name of whatever you are trying to import has to match. 

```javascript
// add.js
export function Add(a, b){
  return a + b;
}

export function Subtract(a, b){
  return a + b;
}
```

```javascript
//index.js
import { Add } from './add';
let c = Add(2,3)
//c is 5
```

In a **default import**, the function, variable, or whatever it is your are trying to import 
is preceeded by a **default import**. You can name a default import any arbitrary name. A module can only have 1 default import. 
```javascript
  // add.js
  export default function Add(a, b){
    return a + b;
}

export function Subtract(a, b){
  return a + b;
}
```

```js
  //index.js  
  import CoolAdditionFunction from './add';
  let c = Add(2,3);
  //c is 5
```

## Hoisting






