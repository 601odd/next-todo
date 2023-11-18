import mongoose, { ConnectOptions } from 'mongoose'
export default async function dbConnect() {
	await mongoose.connect(process.env.MONGODB_URI as string)
}
