
[![node](https://img.shields.io/node/v/siwi-hash.svg)](https://www.npmjs.com/package/siwi-hash)
[![Build Status](https://travis-ci.org/siwilizhao/siwi-hash.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-hash)
[![npm](https://img.shields.io/npm/v/siwi-hash.svg)](https://www.npmjs.com/package/siwi-hash)
[![npm](https://img.shields.io/npm/dt/siwi-hash.svg)](https://www.npmjs.com/package/siwi-hash)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-hash/lib/md5.js.svg)](https://github.com/siwilizhao/siwi-hash/lib/hash.js)
# siwi-hash
md5 sha1 sha256 sha512

# install

## use npm 

` npm install siwi-cache`

## use yarn

` yarn add siwi-cache`

# Example

## md5

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>是否必选</th>
        <th>含义</th>
    </tr>
    <tr>
        <th>data</th>
        <th>String | Buffer | Object</th>
        <th>是</th>
        <th>加密值 字符串或者对象 对象会自动进行 JSON.stringify() </th>
    </tr>
</table>

```js
const Hash = require('siwi-hash')

const hash = new Hash()

class Example {
    constructor() {
        this.init()
    }
    async init () {
        const data = {name: 'siwi', age: 25}
        const res = await hash.md5(data)
        console.log(res)
    }
}

module.exports = new Example()
```

> 输出 ：be00a2b28f9359b45195866c32ff74a5

## sha1 sha256 sha512 参考md5


