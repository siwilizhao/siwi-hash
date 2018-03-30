/**
 * @author [siwi]
 * @email [siwilizhao@gmail.com]
 * @create date 2018-03-31 12:49:19
 * @modify date 2018-03-31 12:49:19
 * @desc [md5 sha1 sha256 sha512 封装]
 */

const crypto = require('crypto')
let instance = null
class Hash {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance
    }

    /**
     * md5
     * @param {String | Buffer | Object} data 
     */
    async md5(data) {
        if (typeof data == 'object') {
            return crypto.createHash('md5').update(JSON.stringify(data)).digest('hex')
        }
        return crypto.createHash('md5').update(data).digest('hex')
    }

    /**
     *  sha1
     *  @param {String | Buffer | Object} data 
     */
    async sha1(data) {
        if (typeof data == 'object') {
            return crypto.createHash('sha1').update(JSON.stringify(data)).digest('hex')
        }
        return crypto.createHash('sha1').update(data).digest('hex')
    }

    /**
     * sha256
     * @param {String | Buffer | Object} data  
     */
    async sha256(data) {
        if (typeof data == 'object') {
            return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex')
        }
        return crypto.createHash('sha256').update(data).digest('hex')
    }

    /**
     * sha512
     * @param {String | Buffer | Object} data  
     */
    async sha512(data) {
        if (typeof data == 'object') {
            return crypto.createHash('sha512').update(JSON.stringify(data)).digest('hex')
        }
        return crypto.createHash('sha512').update(data).digest('hex')
    }

}
module.exports = new Hash()