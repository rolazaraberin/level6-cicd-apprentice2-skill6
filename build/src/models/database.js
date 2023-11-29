"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.sql=exports.typeorm=exports.knex=void 0;const Database_1=__importDefault(require("../utils/Database")),knexfile_1=__importDefault(require("../../knexfile")),data_source_1=__importDefault(require("../../data-source")),database=new Database_1.default;console.log("KNEXFILE",knexfile_1.default),database.configureKnex(knexfile_1.default),database.configureTypeorm(data_source_1.default),database.configureSqlTypeorm();const{knex:knex,typeorm:typeorm,sql:sql}=database;exports.knex=knex,exports.typeorm=typeorm,exports.sql=sql;