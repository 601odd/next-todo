import React from 'react'
import Link from 'next/link'
export default function NavBar() {
	return (
		<div className="wrapper">
			<Link href="/">go to home</Link>
			<Link href="/show"> go to show</Link>
		</div>
	)
}
