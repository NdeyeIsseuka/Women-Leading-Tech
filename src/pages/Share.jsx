import React , { useState , useEffect} from "react";


export default function Share () {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  
  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { name, email, message };

    // Ajout d'un nouvel article à db.json
    fetch('http://localhost:3001/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newArticle),
    })
      .then(response => response.json())
      .then(data => {
        // Mettre à jour l'état local pour afficher le nouvel article
        setArticles(prevArticles => [data, ...prevArticles]);
        // Réinitialiser le formulaire
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => console.error('Erreur:', error));
  };

   // Gérer les likes
  const handleLike = (id) => {
    const updatedArticles = articles.map(article => {
      if (article.id === id) {
        return { ...article, liked: !article.liked, likes: article.liked ? article.likes - 1 : article.likes + 1 };
      }
      return article;
    });
    setArticles(updatedArticles);
  };

// Gérer la suppression
const handleDelete = (id) => {
  // Supprimer l'article de db.json
  fetch(`http://localhost:3001/articles/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        // Mettre à jour l'état local en supprimant l'article
        setArticles(prevArticles => prevArticles.filter(article => article.id !== id));
      } else {
        console.error("Erreur lors de la suppression de l'article:", response.status);
      }
    })
    .catch(error => console.error('Erreur:', error));
};

  const sortedArticles = articles.sort((a, b) => b.createdAt - a.createdAt);

    return (
        <>
<div className="grid py-32 grid-cols-1 my-0 bg-[url('./bg2.avif')] bg-cover bg-center gap-8 px-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-800">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-xl text-center font-bold leading-tight lg:text-xl">La réussite passe aussi par le partage ! Publiez votre parcours, vos réussites ou des conseils pour inspirer d'autres femmes.</h2>
          </div>
          <img src="./events.png" alt="" className="p-6 h-52 md:h-80" />
        </div>
        <form noValidate="" className="space-y-6" onSubmit={handleSubmit}>
          <div>
          <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" rows="3" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 rounded"></textarea>
            </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide bg-pink-600 uppercase rounded">Partager votre article</button>
        </form>
        {/* Afficher les articles */}
        <div className="mt-8">
          <h2 className="text-lg font-bold">Articles partagés</h2>
          {articles.map((article) => (
            <div key={article.id} className="bg-pink-600 p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-lg font-bold">{article.name}</h3>
              <p className="text-sm">{article.email}</p>
              <p>{article.message}</p>
              {/* Boutons Like et Supprimer */}
              <div className="flex mt-4">
              <button onClick={() => handleLike(article.id)} className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                  {article.liked ? '❤️' : '🤍'} 
                </button>
                
                <button onClick={() => handleDelete(article.id)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}