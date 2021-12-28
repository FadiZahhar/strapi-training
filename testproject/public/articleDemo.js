
    const displayArticles = async () => {
            const res = await fetch('/api/articles')
            const articles = await res.json()

            console.log("displayArticles articles" , articles)

            const container = document.querySelector('#articles')
            articles.forEach(article => {
                const image = document.createElement('img')
                image.setAttribute('src', article.thumbnail.url)

               // container.appendChild(image)
               container.appendChild(image)
            });
    }
 
    displayArticles()
