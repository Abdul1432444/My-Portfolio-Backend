import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Check if admin already exists
    const adminExists = await User.findOne({ username: 'admin' });
    if (adminExists) {
      console.log('Admin already exists!');
      process.exit();
    }

    // Create default admin
    await User.create({
      username: 'admin',
      password: 'password123', // Hardcoded simple password for development, change in production
    });

    console.log('Admin User Created Successfully! (username: admin, password: password123)');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();
