import Model from '../../model/Todo'
import { redirect } from 'next/navigation'
export default async function Edit({ params }: any) {
	const todo = await Model.findOne({ _id: params.id })
	async function updateTodo(task: any) {
		'use server'
		let title = task.get('title')?.valueOf()
		let todo = task.get('todo')?.valueOf()
		await Model.findByIdAndUpdate({ _id: params.id }, { title, todo })
		redirect('/show')
	}

	return (
		<div className="main">
			<form action={updateTodo}>
				<div>
					<label htmlFor="title" className="label">
						Title
					</label>
					<input type="text" defaultValue={todo.title} name="title" id="title" className="input" />
				</div>
				<div>
					<label htmlFor="title" className="label">
						Todo
					</label>
					<input type="text" name="todo" defaultValue={todo.todo} id="todo" className="input" />
				</div>
				<button type="submit" className="btn">
					Update todo
				</button>
			</form>
		</div>
	)
}
