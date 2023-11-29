"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.handleAsyncError=void 0;const httpCodes_1=__importDefault(require("./httpCodes"));async function handleAsyncError(asyncError){const error=await asyncError,message=error.message;let code=error.code;return(!code||code>=600)&&(code=httpCodes_1.default.error.serverError),{error:error,code:code,message:message}}exports.handleAsyncError=handleAsyncError;