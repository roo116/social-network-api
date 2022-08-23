const seedUsers = require('./user-seeds');
const seedThoughts = require('./thought-seeds');
const seedReact = require('./react-seeds')

ongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/delta-house",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const seedDb = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedJokeCat();
    console.log('---------------');
    
    await seedJokes();
    console.log('--------------');

    await seedUsers();
    console.log('--------------');
  
    process.exit(0);
  };
  
  seedDb();