console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards

const courseToCard = ({
  prefix,
  number,
  title,
  url,
  desc,
  prereqs,
  credits,
}) => {
  const prereqLinks = prereqs
    .map((prereq) => `<a href="#" class="card-link">${prereq}</a>`)
    .join();
  const courseTemplate = `<div class="col">
            <div class="card" style="width: 18rem;">
              <h3 class="card-header"><a href="${url}">${title}</a></h3>
              <div class="card-body">
                <h5 class="card-title">${prefix} ${number}</h5>
                <p class="card-text">${desc}</p>
                ${prereqLinks}
                <div class="card-footer text-muted">
                  ${credits}
                </div>
              </div>
            </div>
          </div>`;
  return courseTemplate;
};
const resultsContainer = document.querySelector("#filtered-results");
const courseCards = data.items.map(courseToCard);
let filteredCourseCards = courseCards;
resultsContainer.innerHTML = filteredCourseCards.join("");
// courseCards.forEach((c) => document.write(c));

// console.log(courseCards);
// document.write(courseCards.join(''))

// 2. maybe we only show those that match the search query?
//

const filterCourseCard = (markup, query) => {
  console.log(markup, query);
  return markup.toLowerCase().includes(query.toLowerCase());
};

const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", (ev) => {
  console.log(ev);
  ev.preventDefault();
  // ev.stopPropagation();
  console.log("query text");
  const searchField = document.querySelector('input[name="query-text"]');
  const queryText = searchField.value;
  console.log(queryText);
  const filteredCourseCards = courseCards.filter((card) =>
    filterCourseCard(card, queryText)
  );
  console.log('filteredCourseCards', filteredCourseCards);
  resultsContainer.innerHTML = filteredCourseCards.join("");
});

// 3. we update the result count and related summary info as we filter

// my attempt
// const numPrereqs = courseCards.filter((card) => {
//   `<dt>Count</dt>
// <dd><span></span> items</dd>
// <dt>Cost</dt>
// <dd><span>12</span> credit-hours + <span>6</span> credit-hours of prereqs</dd>`;
// return numPrereqs;
// });
// const prereqsContainer = document.querySelector("#live-count");
// const updatePrereqs = data.items.map(numPrereqs);
// countCost.innerHTML = updatePrereqs.join("");

function updateCount() {
  const count = document.getElementById("result-count");
  const countValue = filteredCourseCards.length;
  count.innerText = `${countValue} items`;
}

updateCount();