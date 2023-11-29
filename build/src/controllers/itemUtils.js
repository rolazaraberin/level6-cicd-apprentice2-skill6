"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getItemById=void 0;const utilityFunctions_1=require("../utils/utilityFunctions"),database_1=require("../models/database");async function getItemById(id){if((0,utilityFunctions_1.isEmpty)(id))throw new Error("ERROR: item id is required");if("number"!=typeof id)throw new Error("ERROR: invalid item id");await database_1.sql.initialized();const table=undefined,primaryKey="id",value=undefined,command=`SELECT * FROM ${"item"} WHERE id = ${Number(id)}`,result=undefined,item=undefined;return(await(0,database_1.sql)(command))[0]}exports.getItemById=getItemById;