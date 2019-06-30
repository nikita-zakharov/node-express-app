const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://nikita:yQ5!WgrEL-C-7j8@cluster0-lodx1.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
    )
    .then(client => {
      console.log('connected!')
      _db = client.db()
      callback()
    })
    .catch(err => console.log(err))
}

const getDb = () => {
  if (_db) {
    return _db
  } else {
    throw 'No database found!'
  }
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb