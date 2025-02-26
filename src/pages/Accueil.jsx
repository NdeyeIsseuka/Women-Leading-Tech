import React from 'react';
import { motion } from 'framer-motion';


export default function Accueil() {
    const words = ["Bienvenue"," dans notre espace", " dédié à l'empowerment"," des femmes dans le tech. (❁´◡`❁)"];

    return (
        <>
    <div className="">
 
    <div className=" min-h-screen ">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-[url('./Ad.jpg')] bg-cover bg-center min-w-full">
      <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="./lead1.avif" alt="" className="w-full h-60 sm:h-96 " />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md 
        bg-gray-950">
			<div className="space-y-2 ">
                
                <div className="text-xl text-center font-bold text-pink-700 ">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 + index * 0.5,
                delay: index * 0.5,
                repeat: Infinity }} // Délai entre les mots
          >
            {word} 
          </motion.span>
        ))}
      </div>
                
		<p className="text-xs text-white">By
			<a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> WomenLeadingTech</a>				</p> 
			</div>
            <a href="#">
            <div className="mt-10 inline-block bg-pink-800 hover:bg-pink-500 text-black font-bold py-2 px-4 rounded">
				<p>Plus d'infos ici...</p>
			</div>
            </a>            
		</div>
	</div>
</div>  
</div> 
      {/* Section A Propos */}
      <div className="bg-[url('./Ad.jpg')] bg-cover bg-center">
<section className="container mx-auto  px-4 sm:px-6 lg:px-8 rounded-lg shadow-md p-6">
  <h2 className="text-xl font-semibold text-pink-700 mb-4">A Propos</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="border rounded-lg p-4">
      <p className="text-white  italic">
      Notre initiative vise à sensibiliser les jeunes femmes aux opportunités offertes par le numérique et à promouvoir les femmes leaders 
      dans le tech. Nous croyons que chaque femme a le potentiel de réussir dans ce domaine et nous sommes là pour les encourager et les soutenir.</p>
    </div>

    <div className="border rounded-lg p-4">
      <p className="text-pink-700 text-xl  italic">Missions
        
      </p>
      <p className="text-sm text-white italic mt-2">
        - Sensibiliser les jeunes</p>
        <p className="text-sm text-white  italic mt-2">
        - Encourager une utilisation consciente et responsable </p>
        <p className="text-sm text-white  italic mt-2">
        - Partager des expériences réelles et des témoignages</p>
    </div>
  </div>
</section>
      
       

      {/* Section Témoignages */}

      <section className="py-6 sm:py-12  dark:text-gray-950 ">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Témoignages</h2>
			<p className="font-serif text-sm dark:text-white text-white">Le Pouvoir du Numérique Raconté par Ceux Qui l'Ont Vécu.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="./tem1.avif" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">AWA ~ Entrepreneure</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">"Je n'aurais jamais cru que je pourrais créer mon propre projet tech sans l'encouragement et le soutien de cette communauté.
                    Maintenant, je suis prête à inspirer d'autres jeunes femmes à suivre leurs rêves dans le domaine numérique."</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Février 1, 2025</span>
						<span>1K ❤️</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="./tem2.avif" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Fatou ~ Etudiante</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">
                    "Grâce à ce blog, j'ai appris l'importance de la cybersécurité. Maintenant, je me sens plus en sécurité lorsque je navigue sur Internet et je sais comment protéger mes données personnelles.
                    </h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Janvier 22, 2025</span>
						<span>1.2K ❤️</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="./tem3.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Madeleine ~ Lycéenne</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">
                    "Je suis impressionnée par la diversité des femmes que j'ai rencontrées à travers cette initiative. Chacune a une histoire unique et inspirante, et cela m'a motivée à poursuivre mes propres objectifs dans le tech."

                    </h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Janvier 10, 2025</span>
						<span>5K ❤️</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col bg-gray-50">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="./tem4.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Isseu ~ Business woman</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug text-justify">
                        "Les conseils pratiques que j'ai trouvés ici m'ont permis de protéger mes données sensibles et celles de mes clients. Grâce à ce blog, j'ai également appris à utiliser les nouvelles technologies pour faire croître mon business tout en restant en sécurité."

                    </h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>Janvier 4, 2025</span>
						<span>2.4K ❤️</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
</div>
   
    </div>
    {/* Section Actualité */}   
    <div className="bg-[url('./bg3.avif')] bg-cover bg-center">

   
    <div className=" text-white min-h-screen flex">
      {/* Barre latérale gauche */}
      <aside className="w-1/4 p-4">
        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                      <div className="flex flex-col space-y-8 md:space-y-12">
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 ">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-600"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a rel="noopener noreferrer" href="#" className="font-serif text-pink-600 hover:underline">Rendez-vous le 08 Mars à Diamniadio</a>
                                <p className="text-xs dark:text-gray-600">47 minutes ago by
                                    <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600"> NIK</a>
                                </p>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 dark:text-gray-600">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-600"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a rel="noopener noreferrer" href="#" className="font-serif text-pink-600 hover:underline">Importance de la diversité et de l'inclusion dans la tech.</a>
                                <p className="text-xs dark:text-gray-600">2 hours ago by
                                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600"> NIK</a>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 dark:text-gray-600">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-600"></span>
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a rel="noopener noreferrer" href="#" className="font-serif text-pink-600 hover:underline">Startups fondées par des femmes dans le domaine de la tech.</a>
                                <p className="text-xs dark:text-gray-600">4 hours ago by
                                    <a rel="noopener noreferrer" href="https://www.linkedin.com/posts/maimouna-leye-diakhat%C3%A9-06a2a395_dematacademy-ciomag-chatgpt-activity-7049393376063836161-s8DK/?originalSubdomain=sn" className="hover:underline dark:text-violet-600"> NIK</a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div className="flex w-full h-1 bg-opacity-10 ">
                                <div className="w-1/2 h-full "></div>
                            </div>
                            <a  href="#" className="no-underline ">
                                <span className="text-xs font-bold tracking-wider text-pink-600 hover:underline uppercase">See more exclusives</span>
                               
                            </a>
                        </div>
                    </div> 
      </aside>

      {/* Contenu principal */}
      <main className="w-1/2 p-4">
        <img
          src="./home.jpg"
          alt="Femme dans le tech"
          className="rounded-lg shadow-md "
        />
        
      </main>

      {/* Barre latérale droite */}
      <aside className="w-1/4 p-4">
               <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                         <div className="mb-8 space-x-5 ">
                            <button type="button" className="pb-2 px-4 text-xs font-bold uppercase border-b-2 border-transparent hover:border-pink-600 transition ">Latest</button>
                            <button type="button" className="pb-2 px-4 text-xs font-bold uppercase border-b-2 border-transparent hover:border-pink-600 transition">Popular</button>
                        </div>

                         <div className="flex flex-col divide-y dark:divide-gray-300">
                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="./MD_SENUM.png" />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif text-pink-600 hover:underline no-underline"> Maimouna Diakhaté, CEO SENUM.</a>
                                    <p className="mt-auto text-xs dark:text-gray-600">5 minutes ago
                                        <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Politics</a>
                                    </p>
                         </div>
                </div>
                <div className="flex px-1 py-4">
                    <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="./dicko.png" />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="https://africa.unwomen.org/en/news-and-events/stories/2018/08/dicko-sy" className="font-serif text-pink-600 no-underline hover:underline">
                                        Dicko Sy, Co-founder of the startup Dictaf Corporation !
                                        </a>
                                    <p className="mt-auto text-xs dark:text-gray-600">14 minutes ago
                                        <a rel="noopener noreferrer" href="#" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">Agronomist</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex px-1 py-4">
                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="./home4.jpg" />
                                <div className="flex flex-col flex-grow">
                                    <a rel="noopener noreferrer" href="#" className="font-serif text-pink-600 hover:underline no-underline">Dernières avancées en intelligence artificielle et leur impact sur l'égalité des genres.</a>
                                    <p className="mt-auto text-xs dark:text-gray-600">22 minutes ago
                                        <a rel="noopener noreferrer" href="https://www.latribune.fr/opinions/tribunes/l-ia-genere-de-nouvelles-formes-d-inegalites-entre-les-femmes-et-les-hommes-944092.html" className="block dark:text-blue-600 lg:ml-2 lg:inline hover:underline">World</a>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
      </aside>
    </div>     
    

    {/* contact */}

    <section className="py-6 text-black ">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>UAM Diamniadio</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>77 000 00 00</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>uam@uam.sn</span>
				</p>
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Ouli Traore" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 text-black" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="ouli@traore.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 text-black" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" placeholder="Bonjour..." className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 text-black"></textarea>
			</label>
			<button type="button" className="self-center bg-pink-700 w-28 px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50">
                Submit</button>
		</form>
	</div>
</section>
</div>
</div>
        </>
    );
}