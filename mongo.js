const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://tung:Tung4321@cluster0.of4vayo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log('Connected successfully to server');

  const collection = client.db('test').collection('users');

  const result = await collection.find({ name: "Tung" }).toArray();

  console.log(result);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());