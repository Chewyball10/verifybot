const Base = require("../../base/Command.js");

module.exports = class Nod extends Base {
        constructor(client) {
            super(client, {
                name: "nod",
                usage: "",
                category: "fun",
                permLevel: 0,
                cooldown: 60000
            });

            Object.defineProperty(this, "nod", {
                value: [
                    "http://nodtotherhythm.com/?38uEPppI",
                    "http://nodtotherhythm.com/?wRRblMnH",
                    "http://nodtotherhythm.com/?W6Y8WKQs",
                    "http://nodtotherhythm.com/?eVlypiUw",
                    "http://nodtotherhythm.com/?irohAjK2",
                    "http://nodtotherhythm.com/?P7wtJwjf",
                    "http://nodtotherhythm.com/?bD7speG7",
                    "http://nodtotherhythm.com/?SLYrr7cw",
                    "http://nodtotherhythm.com/?TrjzYPvE",
                    "http://nodtotherhythm.com/?nzODb0jl",
                    "http://nodtotherhythm.com/?SLYrr7cw",
                    "http://nodtotherhythm.com/?5Lp8x2Ms",
                    "http://nodtotherhythm.com/?4i50Y0zG",
                    "http://nodtotherhythm.com/?xEGLhTco",
                    "http://nodtotherhythm.com/?oldUp0Iq",
                    "http://nodtotherhythm.com/?Qa6zBA07",
                    "http://nodtotherhythm.com/?aONCRB75",
                    "http://nodtotherhythm.com/?OiQ7Iixo",
                    "http://nodtotherhythm.com/?HTMOdegW",
                    "http://nodtotherhythm.com/?XshdMUoP",
                    "http://nodtotherhythm.com/?KnUy7xBn",
                    "http://nodtotherhythm.com/?Fe2SDEXy",
                    "http://nodtotherhythm.com/?3MbKlnyQ",
                    "http://nodtotherhythm.com/?mowgDISF",
                    "http://nodtotherhythm.com/?hgK6Ub7h",
                    "http://nodtotherhythm.com/?B89gzrSe",
                    "http://nodtotherhythm.com/?qlDjWcGV",
                    "http://nodtotherhythm.com/?SnHyBIyD",
                    "http://nodtotherhythm.com/?eRrwKZn8",
                    "http://nodtotherhythm.com/?2uudJ18f",
                    "http://nodtotherhythm.com/?M6IaArKP",
                    "http://nodtotherhythm.com/?vAhdDz1e",
                    "http://nodtotherhythm.com/?PiBTfUWV",
                    "http://nodtotherhythm.com/?xELfJaLd",
                    "http://nodtotherhythm.com/?LqxASmo9",
                    "http://nodtotherhythm.com/?Pdv8Z8Eq",
                    "http://nodtotherhythm.com/?cLfKJqHS",
                    "http://nodtotherhythm.com/?FouaZ65Q",
                    "http://nodtotherhythm.com/?TYVTpoph",
                    "http://nodtotherhythm.com/?WeTCJVZ6",
                    "http://nodtotherhythm.com/?ajfz3JDR",
                    "http://nodtotherhythm.com/?npQ4Jben",
                    "http://nodtotherhythm.com/?eVXsGvp4",
                    "http://nodtotherhythm.com/?ycSYiaik",
                    "http://nodtotherhythm.com/?9YLhIsW0",
                    "http://nodtotherhythm.com/?XvYW39TD",
                    "http://nodtotherhythm.com/?6MoYKT1x",
                    "http://nodtotherhythm.com/?whiUmqol",
                    "http://nodtotherhythm.com/?4o1KNTSY",
                    "http://nodtotherhythm.com/?KWp5s700",
                    "http://nodtotherhythm.com/?s4g7HT4A",
                    "http://nodtotherhythm.com/?Dlt92rbY",
                    "http://nodtotherhythm.com/?3ZnvQeTh",
                    "http://nodtotherhythm.com/?8WmsLMcB",
                    "http://nodtotherhythm.com/?eByn6Yfl",
                    "http://nodtotherhythm.com/?2aqXoXRc",
                    "http://nodtotherhythm.com/?W1J4vsBh",
                    "http://nodtotherhythm.com/?GHZ38Y3l",
                    "http://nodtotherhythm.com/?zMBCaID1",
                    "http://nodtotherhythm.com/?58aVF4MZ",
                    "http://nodtotherhythm.com/?90ONo2Ng",
                    "http://nodtotherhythm.com/?NnF22RNq",
                    "http://nodtotherhythm.com/?iQ7ByLit",
                    "http://nodtotherhythm.com/?QJmfErkE",
                    "http://nodtotherhythm.com/?X88KQgQG",
                    "http://nodtotherhythm.com/?QdghJgWo",
                    "http://nodtotherhythm.com/?4dz7UQDe",
                    "http://nodtotherhythm.com/?8DLCnPag",
                    "http://nodtotherhythm.com/?S0b0vce3",
                    "http://nodtotherhythm.com/?C2Y7IqXW",
                    "http://nodtotherhythm.com/?xYOTysYh",
                    "http://nodtotherhythm.com/?IW9HDcAb",
                    "http://nodtotherhythm.com/?c3xxR5zo",
                    "http://nodtotherhythm.com/?pfyjIN3d",
                    "http://nodtotherhythm.com/?0mxgHhPY",
                    "http://nodtotherhythm.com/?aZDGkRJN",
                    "http://nodtotherhythm.com/?BVbSbHSW",
                    "http://nodtotherhythm.com/?5TQ2fo9k",
                    "http://nodtotherhythm.com/?RhzWfXgN",
                    "http://nodtotherhythm.com/?ZCcdRGfx",
                    "http://nodtotherhythm.com/?3p6XWqSR",
                    "http://nodtotherhythm.com/?rXPGMYaO",
                    "http://nodtotherhythm.com/?eyi7gQpA",
                    "http://nodtotherhythm.com/?gZ5Txfv5",
                    "http://nodtotherhythm.com/?1MzmKxMw",
                ]
            });
            
            Object.defineProperty(this, "chosen", {
                value: this.nod[Math.floor(Math.random() * this.nod.length)],
                writable: true
            });
        }
        
        run(message) {
            if (message.channel.name === "dfchat") return super.error("You can't use that here!");
            message.channel.send(`**Head Nod** ${this.chosen}`); this.chosen = this.nod[Math.floor(Math.random() * this.nod.length)];
            }
        };
