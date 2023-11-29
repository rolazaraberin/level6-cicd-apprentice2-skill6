"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const knexfile_1=__importDefault(require("../../knexfile")),knex_1=__importDefault(require("knex")),lodash_1=require("lodash"),cartUtils_1=require("../controllers/cartUtils"),inventoryData=readData("inventory");exports.default={manualData:manualData,cartData:cartData,inventoryData:inventoryData,allData:allData};const knex=(0,knex_1.default)(knexfile_1.default),replacer=void 0,spacer=" ";function readData(route){let mainTable;return"cart"===route&&(mainTable="cart"),"inventory"===route&&(mainTable="inventory"),async function(request,response){try{const data=await knex.table(mainTable).select();let result=Object.assign({},data[0]);const itemsTable=result.itemsTable,items=await knex.select().from(itemsTable).leftJoin("item",`${itemsTable}.itemID`,"item.id");result=Object.assign(Object.assign({},result),{items:items}),response.status(200).send(result)}catch(error){response.status(400).send(error)}}}async function cartData(request,response){try{const{email:email,token:token}=request.body.user,cart=await(0,cartUtils_1.getCartByToken)(email,token);response.status(200).send(cart)}catch(error){response.status(400).send(error)}}async function manualData(request,response){try{const{table:table}=request.body,data=await knex.table(table).select();response.status(200).send(data)}catch(error){response.status(400).send(error.message)}}async function allData(request,response){if((0,lodash_1.isEmpty)(request.body))try{const item=await knex.select().from("item"),inventory=await knex.select().from("inventory"),inventoryItems=await knex.select().from("inventoryItems"),cart=await knex.select().from("cart"),cartItems=await knex.select().from("cartItems"),data=JSON.stringify({item:item,inventory:inventory,inventoryItems:inventoryItems,cart:cart,cartItems:cartItems},replacer,spacer);response.type("text"),response.status(200).send(data)}catch(error){response.status(400).send(error)}else manualData(request,response)}