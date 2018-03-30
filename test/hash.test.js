const hash = require('../index')
const expect = require('chai').expect

describe('hash.js', () => {
    it('md5', async () => {
        const md5 = 'be00a2b28f9359b45195866c32ff74a5'
        const data = {name: 'siwi', age: 25}
        const res = await hash.md5(data)
        console.log(res)
        expect(res).to.be.a('string')
        expect(res).to.equal(md5)
    })
    it('sha1', async () => {
        const sha1 = '1ee8401505d014c94fdd02f8ec85355d7bb63539'
        const data = {name: 'siwi', age: 25}
        const res = await hash.sha1(data)
        console.log(res)
        expect(res).to.be.a('string')
        expect(res).to.equal(sha1)
    })
    it('sha256', async () => {
        const sha256 = 'c7bd85c253c397276b739b8b14589010ef6f8efa77d45058a80761f99d008008'
        const data = {name: 'siwi', age: 25}
        const res = await hash.sha256(data)
        console.log(res)
        expect(res).to.be.a('string')
        expect(res).to.equal(sha256)
    })
    it('sha512', async () => {
        const sha512 = '490c6ae2c583a22a78f56fb3a499ad0a53f0a0a3ddac6cc283dfc2f0ecb46c4cce607bbf1bf075dff424445b30c5066ebe5abaf50a7f60777b5c3db6773d06e5'
        const data = {name: 'siwi', age: 25}
        const res = await hash.sha512(data)
        console.log(res)
        expect(res).to.be.a('string')
        expect(res).to.equal(sha512)
    })
})