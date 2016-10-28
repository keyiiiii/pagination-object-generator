pagination-object-generator
===========================

[![CircleCI](https://circleci.com/gh/keyiiiii/pagination-object-generator/tree/master.svg?style=shield)](https://circleci.com/gh/keyiiiii/pagination-object-generator/tree/master)

Generate pagination object.

It does not depend on the library.

##[DEMO](http://keyiiiii.github.io/pagination-object-generator/example/)

##Usage
`npm install pagination-object-generator`

```javascript
import pagination from "pagination-object-generator";

const offset = 0;
const limit = 20;
const totalCount = 1000;
const showCount = 4;

const results = pagination(offset, limit, totalCount, showCount);
```


```javascript
results = pages:[
  {
    "offset": 0,
    "current": true,
    "firstNum": 1,
    "secondNum": 20,
    "pageNum": 1
  },
  {
    "offset": 20,
    "current": false,
    "firstNum": 21,
    "secondNum": 40,
    "pageNum": 2
  },
  {
    "offset": 40,
    "current": false,
    "firstNum": 41,
    "secondNum": 60,
    "pageNum": 3
  },
  {
    "offset": 60,
    "current": false,
    "firstNum": 61,
    "secondNum": 80,
    "pageNum": 4
  }
],
last:{
  "index": 50,
  "offset": 1000
},
paging:{
  "prev": false,
  "next": 20
}
```