console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards

const courseToCard = ({prefix, number, title, url, desc, prereqs, credits}) => {
  const courseTemplate = `<div class="col">
            <div class="card" style="width: 18rem;">
              <h3 class="card-header">${title}</h3>
              <div class="card-body">
                <h5 class="card-title">${prefix} ${number}</h5>
                <p class="card-text">${desc}</p>
                <h6 class="card-text">Prerequisites: ${prereqs}</h6>
              </div>
            </div>
          </div>`;
  return courseTemplate;
}

const courseCards = data.items.map(courseToCard);
courseCards.forEach((c) => document.write(c));
// console.log(courseCards);
// document.write(courseCards.join(''))

// 2. maybe we only show those that match the search query?

// Approach: When search button is clicked, log query text, filter data, update dom

const filterCards = (markup, query) => {
  return markup.toLowerCase().includes(query.toLowerCase());
}

const searchButton = document.getElementById("search-btn")
searchButton.addEventListener("click", (ev) => {
  console.log(ev);
  ev.preventDefault();
  console.log("query text");
  const searchField = document.querySelector('input[name="query-text"]');
  const queryText = searchField.value;
  console.log(queryText);
  const filteredCourseCards = courseCards.filter((card) => filteredCourseCards(card, queryText));
  filteredCourseCards.forEach((card) => {
    document.write(card);
  })
})



// 3. we update the result count and related summary info as we filter