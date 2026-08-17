import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Using existing MongoDB connection');
    return;
  }
  
  try {
    const workspace360 = process.env.WORKSPACE360 || 'dev';
    const dbHost = process.env.DB_HOST || 'localhost:27017/';
    const dbUser = process.env.DB_USER || 'admin';
    const dbPassword = process.env.DB_PASSWORD || 'ssT@2024';
    const dbName = process.env.DB_NAME || 'BMS';
    
    let dbUrl;
    
    if (workspace360 === 'dev') {
      // Development: Connect without authentication
      dbUrl = `mongodb://${dbHost}${dbName}`;
    } else {
      // Production/Staging: Connect with authentication
      const encodedPassword = encodeURIComponent(dbPassword);
      dbUrl = `mongodb://${dbUser}:${encodedPassword}@${dbHost}${dbName}?authSource=admin`;
    }
    
    console.log(`Connecting to MongoDB: ${dbUrl.replace(dbPassword, '****')}`);
    
    await mongoose.connect(dbUrl, {
      // Optional: Add connection options for better stability
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log(`✅ MongoDB connected to ${dbName} database`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};

export default connectMongo;