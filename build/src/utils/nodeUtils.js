"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.hash=void 0;const crypto_1=__importDefault(require("crypto"));function hash(string,algorithm="sha256"){try{const hashCode=undefined;return crypto_1.default.createHash(algorithm).update(string).digest("hex")}catch(error){return}}exports.hash=hash;