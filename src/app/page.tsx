import Image from 'next/image'
import AddTask from './components/AddTask'
export default function Home() {
	return (
		<main className="main">
			<h1>Task List</h1>
			<AddTask />
		</main>
	)
}
