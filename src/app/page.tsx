import { FaPlus } from 'react-icons/fa'
import Model from './model/Todo'
import dbConnect from './utils/dbConnect'
import { redirect } from 'next/navigation'

export default function Home() {
	async function addTaskHandler(task: any) {
		'use server'
		let title = task.get('title')?.valueOf()
		let todo = task.get('todo')?.valueOf()
		try {
			dbConnect()
			let newTodo = new Model({ title, todo })
			await newTodo.save()
		} catch (err) {
			console.log(err)
		}
		redirect('/show')
	}
	return (
		<div className="main">
			<h1>Task List</h1>
			<form action={addTaskHandler}>
				<div>
					<label htmlFor="title" className="label">
						Title
					</label>
					<input type="text" name="title" id="title" className="input" />
				</div>
				<div>
					<label htmlFor="title" className="label">
						Todo
					</label>
					<input type="text" name="todo" id="todo" className="input" />
				</div>
				<button type="submit" className="btn">
					ADD NEW TASK <FaPlus className="icon" />
				</button>
			</form>
		</div>
	)
}
