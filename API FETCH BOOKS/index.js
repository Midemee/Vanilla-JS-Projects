const URL = "https://example-data.draftbit.com/books?_limit=10"
const form = document.querySelector("form");
const input = document.querySelector("input");
const main = document.querySelector("main");
const empty = document.querySelector(".empty");

const getBooks = async (url) => {
  empty.style.display = "none";
  main.innerHTML = "";
    const response = await fetch(url)   
    const data = await response.json()
    console.log(data);
    if (data.length >= 1) {
      displayBooks(data)
    } else {
      empty.style.display = "block";
    }    
}
getBooks(URL)

const displayBooks = (books) => {
    main.innerHTML = ""
    books.forEach((book)=>{
    const {image_url, title, authors, rating, description} = book
    const bookDiv = document.createElement("div")
    bookDiv.classList.add("book");
        bookDiv.innerHTML = `
      <img src="${image_url}" alt="${title}" />
      <div class= "book-info">
        <h3>${title}</h3>
        <span class= "${ratings(rating)}">${rating}</span>
      </div>
      
      <div class= "description">
      <p><strong>Author:</strong> ${authors}</p>
      <h3> Description </h3>
     ${description}
      </div>
    `;
    main.appendChild(bookDiv)
    });
};

const ratings =(rate)=>{
  if (rate > 4) {
    return 'green'
  } else {
    return 'red'
  }
};

//Work on functionality
const hiddenSearch = document.querySelector(".hidden-search")
const span = document.querySelector(".hidden-search span")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const inputValue = input.value.trim(); 

  if (inputValue) {
    hiddenSearch.style.display = "block";
    span.textContent = inputValue;
    getMovies(URL + searchValue);
    searchValue
    
  } else{
    window.location.reload();
  }
});



