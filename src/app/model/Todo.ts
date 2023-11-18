import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	todo: {
		type: String,
	},
	data: {
		type: Date,
		default: Date.now,
	},
})
const model = mongoose.models['todo'] || mongoose.model('todo', todoSchema)

export default model
