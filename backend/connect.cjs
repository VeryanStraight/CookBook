const {mongoClient } = require("mongodb")
require("dotenv").config({path:"./config.env"})

async function main() {
    const Db = process.env.ATLAS_URI
    const client = new mongoClient(Db)

    await client.connect()
}