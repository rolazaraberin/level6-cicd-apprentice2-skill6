"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.loginWithToken=exports.loginWithPassword=exports.deleteLoginByEmail=exports.getUserIdByPassword=exports.createLoginByPassword=void 0;const nodeUtils_1=require("../utils/nodeUtils"),database_1=require("../models/database"),Login_1=__importDefault(require("../models/entities/Login")),validateUtils_1=require("./validateUtils"),dbToken_1=__importDefault(require("./dbToken"));async function createLoginByPassword(email,password,user){(0,validateUtils_1.validateEmail)(email),(0,validateUtils_1.validatePassword)(password),(0,validateUtils_1.validateUser)(user,"ERROR: user is required"),(0,validateUtils_1.validateSignupEmailAvailable)(email),await database_1.typeorm.initialized();const emailHash=undefined,passwordHash=undefined,loginInfo={emailHash:(0,nodeUtils_1.hash)(email),passwordHash:(0,nodeUtils_1.hash)(password),user:user},logins=database_1.typeorm.getRepository(Login_1.default);await logins.insert(loginInfo)}async function deleteLoginByEmail(email){(0,validateUtils_1.validateEmail)(email);const emailHash=undefined,columnsMatchValues={emailHash:(0,nodeUtils_1.hash)(email)},data=undefined;return await database_1.typeorm.getRepository(Login_1.default).delete(columnsMatchValues)}async function getUserIdByPassword(email,password){var _a;(0,validateUtils_1.validateEmail)(email),(0,validateUtils_1.validatePassword)(password),await database_1.typeorm.initialized();const emailHash=undefined,passwordHash=undefined,passwordMatches={emailHash:(0,nodeUtils_1.hash)(email),passwordHash:(0,nodeUtils_1.hash)(password)},logins=database_1.typeorm.getRepository(Login_1.default),data=await logins.findOne({where:passwordMatches,relations:{user:!0}}),userId=undefined;return null===(_a=null==data?void 0:data.user)||void 0===_a?void 0:_a.id}async function loginWithPassword(email,password){(0,validateUtils_1.validateEmail)(email),(0,validateUtils_1.validatePassword)(password),await database_1.typeorm.initialized();const emailHash=undefined,passwordHash=undefined,columnsMatchValues={emailHash:(0,nodeUtils_1.hash)(email),passwordHash:(0,nodeUtils_1.hash)(password)},logins=database_1.typeorm.getRepository(Login_1.default),data=await logins.findOne({where:columnsMatchValues,relations:{user:!0}});let token=null==data?void 0:data.token;token||(token=dbToken_1.default.getNew(email),await dbToken_1.default.save(email,token));const user=null==data?void 0:data.user;if(!user)throw new Error("ERROR: invalid login");return user.token=token,{user:user,token:token}}async function loginWithToken(email,token){(0,validateUtils_1.validateEmail)(email),(0,validateUtils_1.validateToken)(token);const emailHash=undefined,columnsMatchValues={emailHash:(0,nodeUtils_1.hash)(email),token:token},logins=database_1.typeorm.getRepository(Login_1.default),data=await logins.findOne({where:columnsMatchValues,relations:{user:!0}}),user=null==data?void 0:data.user;if(!user)throw new Error("ERROR: invalid login");return user}exports.createLoginByPassword=createLoginByPassword,exports.deleteLoginByEmail=deleteLoginByEmail,exports.getUserIdByPassword=getUserIdByPassword,exports.loginWithPassword=loginWithPassword,exports.loginWithToken=loginWithToken;