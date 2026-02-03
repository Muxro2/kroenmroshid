"use client"

import { useState } from 'react';

export default function Collapsible({text} : {text: string}) {

	const [collapse, setCollapse] = useState(true)
	
  function toggleCollapse() {
		setCollapse(!collapse)
	}
	
	return(
		<div className="w-full border-b-1">
			
		<button className="w-full p-4 flex justify-between text-[18px] font-bold text-left " onClick={() => toggleCollapse()}>
			<h1>{text.toUpperCase()}</h1>
					<h1>v</h1>
		</button>
			
			<div className={`${collapse? "h-0" : "h-50"} relative w-full  duration-300`}>
				<p className="absolute inset-2 overflow-hidden">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum magna lectus, ac cursus massa malesuada a. Donec eu ligula ex. Quisque hendrerit enim ante, et consequat ex sagittis at. Curabitur commodo egestas purus, vitae mollis nulla porttitor et. Praesent feugiat, justo et venenatis sagittis, tortor tortor egestas felis, in mattis odio elit maximus sapien. Integer lacus arcu, faucibus in ultrices ac, lacinia eu ligula. Vivamus rhoncus metus felis, in congue urna sodales vitae. In sapien purus, maximus vel nisl id, cursus lobortis eros. Aenean rhoncus, lectus vitae varius convallis, risus sem aliquet dolor, ut egestas ex purus ac leo. Fusce at quam et magna ornare pretium. Suspendisse potenti. Nulla ac ornare nisl. Sed ut pulvinar eros. Maecenas non lorem ultricies, pretium tortor quis, ullamcorper libero. Etiam et massa commodo, dapibus nibh sit amet, cursus orci.
				</p>
			</div>
		</div>
	)
}