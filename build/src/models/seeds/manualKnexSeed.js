"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const database_1=require("../database");async function seed(){console.log("Seeding Knex database..."),await(0,database_1.knex)("item").delete(),await(0,database_1.knex)("item").insert([{id:1,name:"Laptop",price:1e3,image:"https://www.affordableproductreview.com/wp-content/uploads/2013/07/lenovoG580.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed felis eget velit aliquet."},{id:2,name:"Case",price:30,image:"http://targus.com/content/images/thumbs/0017693_orbus-hardsided-laptop-case-133-thin-and-light.jpeg",description:"Eget felis eget nunc lobortis mattis aliquam faucibus purus. Facilisi etiam dignissim diam quis enim lobortis scelerisque."},{id:3,name:"Charger",price:15,image:"https://i5.walmartimages.com/asr/60e28aac-8fe8-4f24-b539-1cbf68ef79e2.33cd40cfd54c54bbe20bfb9450049538.jpeg",description:"Ornare suspendisse sed nisi lacus sed. Bibendum neque egestas congue quisque."},{id:4,name:"Stylus",price:35,image:"https://images.esellerpro.com/2660/I/298/000/61rNYZmY9XL._SL1500_....jpg",description:"Dui sapien eget mi proin sed libero. Tristique et egestas quis ipsum suspendisse ultrices."},{id:5,name:"Mouse",price:10,image:"https://image.made-in-china.com/2f0j00CstfOyJnwDoh/Rechargeable-2-4G-Optical-Cordless-Mice-Wireless-Bluetooth-Mouse-with-USB-Nano-Receiver-for-PC-Laptop-Computer-Parts.jpg",description:"Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus."},{id:6,name:"Keyboard",price:15,image:"https://www.bhphotovideo.com/images/images2500x2500/hp_h6r56aa_aba_k3500_wireless_keyboard_1085780.jpg",description:"Consectetur lorem donec massa sapien faucibus. Ut ornare lectus sit amet est placerat in."}]),await(0,database_1.knex)("inventory").delete(),await(0,database_1.knex)("inventory").insert([{id:1,itemsTable:"inventoryItems",totalQuantity:30,totalPrice:5525}]),await(0,database_1.knex)("inventoryItems").delete(),await(0,database_1.knex)("inventoryItems").insert([{id:1,itemID:1,quantity:5,subtotal:5e3},{id:2,itemID:2,quantity:5,subtotal:150},{id:3,itemID:3,quantity:5,subtotal:75},{id:4,itemID:4,quantity:5,subtotal:175},{id:5,itemID:5,quantity:5,subtotal:50},{id:6,itemID:6,quantity:5,subtotal:75}]),await(0,database_1.knex)("cart").delete(),await(0,database_1.knex)("cart").insert([{id:1,itemsTable:"cartItems1",totalQuantity:0,totalPrice:0},{id:2,itemsTable:"cartItems2",totalQuantity:0,totalPrice:0}]),await(0,database_1.knex)("cartItems1").delete(),console.log("Successfully seeded Knex tables."),console.log("Closing connection to database..."),database_1.knex.destroy()}seed();