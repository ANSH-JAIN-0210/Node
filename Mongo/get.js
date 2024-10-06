const { dbConnection } = require("./database");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("student");
    const result = await collection.find().toArray();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

main();
