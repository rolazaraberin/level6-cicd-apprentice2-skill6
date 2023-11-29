"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const authenticate_1=__importDefault(require("./authenticate")),dbToken_1=__importDefault(require("./dbToken")),errorUtils_1=require("../utils/errorUtils"),login={withToken:withToken,withPassword:withPassword};async function withPassword(request,response){const{email:email,password:password}=request.body;try{const{token:token}=await authenticate_1.default.password(email,password),authInfo={email:email,token:token,isTemporary:!1};token||(authInfo.token=dbToken_1.default.getNew(email),await dbToken_1.default.save(email,authInfo.token)),response.status(200).send(authInfo)}catch(asyncError){const{error:error,code:code,message:message}=await(0,errorUtils_1.handleAsyncError)(asyncError);response.status(code).send(message)}}async function withToken(request,response,next){const{email:email,token:token}=request.body;if(!token)return next();try{const userID=undefined;if(!await authenticate_1.default.token(email,token))return response.status(401).send("ERROR: Incorrect email or password");const authInfo={email:email,token:token,isTemporary:!1};response.status(200).send(authInfo)}catch(asyncError){const{error:error,code:code,message:message}=await(0,errorUtils_1.handleAsyncError)(asyncError);response.status(code).send(message)}}exports.default=login;