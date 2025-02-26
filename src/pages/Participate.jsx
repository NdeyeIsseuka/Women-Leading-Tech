export default function Participate() {
    return (
    <>
	<div>
<div className="bg-[url('./prt.jpg')] bg-cover bg-center min-h-screen  flex flex-col items-center justify-center text-center py-48">
	<h1 className=" mt-72  text-4xl font-extrabold text-pink-600">Chaque action compte ! </h1>

	<h2 className=" mt-2 text-2xl font-extrabol text-pink">	Que vous soyez débutante, experte, mentor ou conférencière, votre contribution peut inspirer et transformer la place des femmes dans la tech.	</h2>
	</div>
<div className="bg-[url('./Ad.jpg')] bg-cover bg-center min-h-screen">
   <section className="  py-1">
   <h1 className="text-center text-2xl font-extrabold my-2 text-pink-500">Elles ont participé. </h1>

	<div className="container max-w-5xl p-6 mx-auto space-y-6 ">
		<a  href="/events" className="block max-w-sm gap-3 mx-auto sm:max-w-full group no-underline lg:grid lg:grid-cols-12">
			<img src="./AGCCI.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
			<div className="p-6 space-y-2 lg:col-span-5 bg-white">
				<h3 className="text-2xl font-semibold text-pink-700 sm:text-2xl ">🌟 S'inscrire aux événements</h3>
				<span className="text-xs text-pink-900">May 19, 2021</span>
				
				<p className="text-center">🔥 Un moment magique où les rêves prennent vie dans le monde du digital ! </p>
				<p className="text-center"> Apprentissage, Partage & Innovation	</p>		
				<p className="text-center"> Elles ont osé, elles ont appris, elles ont codé ! </p>
				<p className="text-center"> Le futur de la tech est entre leurs mains ! ✨</p>
				<p className="text-center text-pink-700 font-semibold">🔹 #WomenInTech 🔹 #AGCCI 🔹 #CodingGirls 🔹 #Empowerment</p>	
					
				
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="/events" className="max-w-sm mx-auto group no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./dct.JPG" />
				<div className="p-6 space-y-2 bg-white">
					<h3 className="text-xl font-semibold text-center text-pink-700 group-focus:underline">Visite Inspirante au Datacenter de Diamniadio ! </h3>
					<span className="text-xs ">January 21, 2023</span>
					<p>🔹 Sécurité, puissance et transformation digitale</p>
					<p>🔹 Une opportunité unique pour découvrir comment la tech façonne l'avenir et comment les femmes peuvent y jouer un rôle clé ! 💪👩‍💻</p>
					<p className="text-center text-pink-700 font-semibold"> #WomenInTech 💜 #Innovation #DataRevolution #Empowerment #SenegalTech 🚀</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="/events" className="max-w-sm mx-auto group no-underline  focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./paneliste.jpeg" />
				<div className="p-6 space-y-2 bg-white">
					<h3 className="text-xl font-semibold text-center text-pink-700 group-focus:underline">Célébration inclusive du 08 Mars</h3>
					<span className="text-xs dark:text-black">March 08, 2024</span>
					<p className="text-justify">
					Pr. Fatou Diop SALL, Enseignante-chercheure en Sciences de Gestion/Marketing à l'École supérieure Polytechnique de Dakar.
					</p>
					<p className="text-center font-semibold dark:text-black"> <b>Théme : "Investir en faveur des femmes : accélérer le rythme"</b>	 </p>
					<p className="text-center text-pink-700 font-semibold"> #WomenInTech 💜 #Innovation #UAM #8Mars #Empowerment #SenegalTech 🚀</p>

				</div>
			</a>
			<a rel="noopener noreferrer" href="/events" className="max-w-sm mx-auto group no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="./ONU-FEMMES.webp" />
				<div className="p-6 space-y-2 bg-white">
					<h3 className="text-xl font-semibold text-center text-pink-700 group-focus:underline">ONU FEMMES SENEGAL</h3>
					<span className="text-xs dark:text-black">January 23, 2021</span>
					<p className="text-justify">
					Représente l'entité des Nations Unies pour l'égalité des sexes et l'autonomisation
					des femmes au Sénégal. Elle multiplie des initiatives visant à atteindre les Objectifs 
					du Développement Durable (ODDs) à l'horizon 2030, en particulier, l'ODD 5 qui se focalise de façon spécifique sur l'égalité des sexes.
					
					</p>
					<p className="text-center text-pink-700 font-semibold"> #Women #ONU-FEMMES #EmpowerHER #SenegalTech </p>

				</div>
			</a>
			
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</section>


<section className=" text-white">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl text-center font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<div className="relative mt-6 mb-12 flex justify-center">
			<input type="search" name="Search..."  placeholder="Search" className="rounded "/>
			<button type="button" className="bg-pink-700 w-28 ">Submit</button>
		</div>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Quel est l'objectif de cette initiative ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
				Inspirer, éduquer et connecter les jeunes femmes dans le monde du numérique.
				</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Pourquoi est-il important de sensibiliser les jeunes femmes au numérique ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
				Pour leur donner les outils nécessaires pour réussir dans un monde de plus en plus numérique. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Comment puis-je participer à une session de formation ?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
				Vous pouvez vous inscrire aux formations via notre page "Événements". </p>
			</details>
		</div>
	</div>
</section>
</div>
</div>

    </>
	)
}