// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardEntry = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then ( res => {

    const aHeadlines =[]
    const aImgUrl = []
    const aName = []

    res.data.articles.bootstrap.forEach( item => {
        aHeadlines.push(item.headline)
        aImgUrl.push(item.authorPhoto)
        aName.push(item.authorName)
    })
    res.data.articles.javascript.forEach( item => {
        aHeadlines.push(item.headline)
        aImgUrl.push(item.authorPhoto)
        aName.push(item.authorName)
    })
    res.data.articles.jquery.forEach( item => {
        aHeadlines.push(item.headline)
        aImgUrl.push(item.authorPhoto)
        aName.push(item.authorName)
    })
    res.data.articles.node.forEach( item => {
        aHeadlines.push(item.headline)
        aImgUrl.push(item.authorPhoto)
        aName.push(item.authorName)
    })
    res.data.articles.technology.forEach( item => {
        aHeadlines.push(item.headline)
        aImgUrl.push(item.authorPhoto)
        aName.push(item.authorName)
    })
    aHeadlines.forEach((item, index) => {
        const imgData = aImgUrl[index]
        const authorData = aName[index]
        const finalCard = cardMaker({ headline: item, imgUrl: imgData, name: authorData })
        cardEntry.appendChild(finalCard)
    })
})
.catch ( err => {
    console.log(err)
})

function cardMaker(attrs){

    const { headline, imgUrl, name } = attrs

    const card = document.createElement('div')
    card.classList.add('card')
    card.addEventListener('click', function(){console.log(headline)})

    const headlines = document.createElement('div')
    headlines.classList.add('headline')
    headlines.textContent = headline
    card.appendChild(headlines)

    const author = document.createElement('div')
    author.classList.add('author')
    card.appendChild(author)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    const img = document.createElement('img')
    img.src = imgUrl
    imgContainer.appendChild(img)

    const authorName = document.createElement('span')
    authorName.textContent = `By ${name}`
    imgContainer.appendChild(authorName)

    return card
}


