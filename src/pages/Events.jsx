import React , { useState } from 'react'

export default function Events() {
  const [likes, setLikes] = useState(false);
    const handleLikes = () => {
        setLikes(!likes);
    }
    return (
        <>
        <div className="bg-pink-300 py-24">

        
        <div className="flex flex-none my-0 ">
          <div className="flex flex-wrap justify-center">
          <h3 className="text-4xl font-bold text-center text-white my-10 m-6">
          Rejoignez-nous pour des moments d'apprentissage et de partage.  🚀 </h3>
          {/* <h4 className="text-2xl font-bold text-center text-white">
          Chaque événement est une occasion de s'inspirer et d'échanger avec des expertes du domaine. </h4>
        <p className="text-center text-pink-900">
          Découvrez les moments forts et engagez-vous avec notre communauté !
        </p> */}
          </div>
        </div>
        

  <div className="p-5 mx-auto sm:p-10 md:p-0 ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded ">
		<img src="/Girl_II_UAM.jpg" alt="" className="w-full h-60 sm:h-96 " />
		<div className="p-6 pb-12 m-4 bg-black text-pink-600 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
			<div className="space-y-2 ">
        <div className="flex justify-between">
        <a rel="noopener noreferrer" href="#" className="  text-2xl font-semibold sm:text-3xl no-underline text-pink-600 hover:text-pink-500">
          Journée des femmes dans les NTICs
          </a>
          <div className="card-actions justify-end">
              <button onClick={handleLikes} className="btn btn-secondary">
              {likes ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
				
          
				<p className="text-xs ">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline no-underline text-pink-600 "> UAM's Students Women </a>
				</p>
			</div>
			<div >
				<p>
        La Journée de la Femme Digitale célèbre l'innovation, l'entrepreneuriat et l'inclusion des femmes dans le numérique. C'est un moment unique pour mettre en lumière les talents féminins, échanger des idées et construire un futur technologique plus inclusif."
      <p>
      💡Au programme : 
     <b>
     <li>conférences inspirantes, </li> 
      <li>tables rondes avec des expertes du numérique, </li>  
      <li>ateliers interactifs et networking pour encourager l'innovation au féminin.</li>
             </b>      
      
      </p> 
        </p>
			</div>
		</div>
	</div>
</div>

<div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>

<div className="p-5 mx-auto sm:p-10 md:p-16  ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="/AGCCI.jpg" alt="" className="w-full h-60 sm:h-96 " />
		<div className="p-6 pb-12 m-4 bg-black text-pink-600 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
			<div className="space-y-2 ">
        <div className="flex justify-between">
        <a rel="noopener noreferrer" href="#" className=" text-2xl font-semibold sm:text-3xl no-underline text-pink-600 hover:text-pink-500">
          African Girl Can Code Initiative (AGCCI)     </a>
          <div className="card-actions justify-end">
            <button onClick={handleLikes} className="btn btn-secondary">
              {likes ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
				
				<p className="text-xs ">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline no-underline text-pink-600 "> UNWOMEN SENEGAL</a>
				</p>
			</div>
			<div className=" ">
				<p className='text-center'>AGCCI takes a wholistic approach focusing on 3 key areas: </p>
        <li>
        <b>Skills Development</b> : The program equips girls with digital literacy, coding, robotics, and other technical skills to prepare them for careers in technology.
        </li> 
        <li>
        <b>Access to Equipment</b> : Upon completing the AGCCI coding camp, each graduate receives a laptop and six months of internet access to kickstart their journey in innovation and technology.
        </li>
        <li>
        <b>Mentorship and Networking</b>: The Siemens EmpowerHer Program provides six months of mentorship, offering both technical and life skills to help the girls thrive in the workforce.
        </li>       
			</div>
		</div>
	</div>
</div>

<div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>

<div className="p-5 mx-auto sm:p-10 md:p-16  ">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="./WMD.jpg" alt="" className="w-full h-60 sm:h-96 " />
		<div className="p-6 pb-12 m-4 bg-black text-pink-600 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
			<div className="space-y-2 ">
        <div className="flex justify-between">
          <a rel="noopener noreferrer" href="#" className=" text-2xl font-semibold sm:text-3xl no-underline text-pink-600 hover:text-pink-500" >
          Women's Day 8 MArch
        </a>
        <div className="card-actions justify-end">
            <button onClick={handleLikes} className="btn btn-secondary">
              {likes ? '❤️' : '🤍'}
            </button>
          </div>  
        </div>
				
				<p className="text-xs ">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline no-underline text-pink-600 "> UAM's Women Students</a>
				</p>
			</div>
			<div className="text-pink-600">
				<p>
        8 mars, <b> Journée internationale des droits des femmes</b>, il est important de se pencher sur la situation des femmes au Sénégal. 
        Les femmes sénégalaises ont longtemps été confrontées à des discriminations et des inégalités en matière d'accès à l'éducation, 
        à la santé et à l'emploi. Cependant, ces dernières années, des progrès ont été réalisés pour garantir l'égalité des sexes et améliorer les droits des femmes.
        </p>
			</div>
		</div>
	</div>
</div>
<div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>
</div>
        </>
    )
}
