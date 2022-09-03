const loadCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category));
}

const displayCategories = categories =>{
    // console.log(categories);
    const categoryContainer = document.getElementById('category-container');
    
    categories.forEach(category =>{
        // console.log(category)
        const newButton = document.createElement('button');
        newButton.classList.add('list-group-item');
        newButton.setAttribute('onClick', `displayNewsById('${category.category_id}')`);
        newButton.innerText = category.category_name;
        categoryContainer.appendChild(newButton);
    });
}

function displayNewsById(categoryId){
    fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    .then(res => res.json())
    .then(data => displayNews(data.data));
}

const displayNews = news =>{
    console.log(news);
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerText = '';
    news.forEach(hotNews =>{
        console.log(hotNews);
        const newsCard = document.createElement('div');
    newsCard.classList.add('card')
    newsCard.innerHTML =`
    <div class="row g-0">
              <div class="col-md-4">
                <img src="${hotNews.thumbnail_url}" class="img-fluid rounded-start" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${hotNews.title}</h5>
                  <p class="card-text">${hotNews.details.slice(0,250)}</p>
                  <div class="d-flex justify-content-between">
                   <div class="d-flex">
                   <p class="me-3"><img src="${hotNews.author.img}"      class="img-fluid rounded-circle" style="width: 2rem;"></p>
                  <p class="card-text"><small class="text-muted">${hotNews.author.name}</small></p>
                  </div>
                  <div>
                  <p class="card-text align-items-center"><small class="text-muted"><i class="fa-solid fa-eye"></i> ${hotNews.total_view}</small></p>
                  </div>
                  <div>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                  </div>
                </div>
              </div>
            </div>
    `
    newsContainer.appendChild(newsCard);
    })
    
}

loadCategory();