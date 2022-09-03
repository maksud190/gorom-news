

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
    .then(data => displayNews(data));
}

const displayNews = news =>{
    console.log(news);
    const newsContainer = document.getElementById('news-container')
    const newsCard = document.createElement('div');
    newsCard.classList.add('card')
    newsCard.innerHTML =`
    <div class="row g-0">
              <div class="col-md-4">
                <img src="" class="img-fluid rounded-start" alt="">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
    
    `
}


// displayCategories(); 
loadCategory();