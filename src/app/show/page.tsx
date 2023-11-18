import dbConnect from '../utils/dbConnect'
import Model from '../model/Todo'
import Link from 'next/link'
import { redirect } from 'next/navigation'
export default async function Show() {
	dbConnect()
	const data = await Model.find({})
	async function deleteFn(data: any) {
		'use server'
		let id = JSON.parse(data.get('id')?.valueOf())
		await Model.findByIdAndDelete({ _id: id })
		redirect('/show')
	}
	return (
		<div>
			<table>
				<thead>
					<tr className="tr">
						<th>title</th>
						<th>todo</th>
						<th>options</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item: any) => {
						return (
							<tr key={item._id}>
								<td>{item.title}</td>
								<td>{item.todo}</td>
								<td className="fn">
									<form className="fbtn" action={deleteFn}>
										<input type="hidden" name="id" id="id" value={JSON.stringify(item._id)} />
										<button className="submitbtn" type="submit">
											delete
										</button>
									</form>
									<button className="editbtn">
										<Link
											style={{
												textDecoration: 'none',
												padding: '10px 20px',
												color: 'white',
												textAlign: 'center',
											}}
											href={'/edit/' + item._id}
										>
											Edit
										</Link>
									</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
