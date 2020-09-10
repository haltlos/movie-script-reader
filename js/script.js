let searchedThenFiltered = false;
let unitsFilteredBySearch = [];
let unitsFilteredByActors = [];
let favorites = [];

let units = [];

// Collateral
const array_tt0369339 = [
  {
    id: 1,
    person: "Max",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man",
    time: "01:00:00",
    timestamp: 3600,
    type: "talk",
  },
  {
    id: 2,
    person: "Vincent",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man1",
    time: "01:00:10",
    timestamp: 3610,
    type: "talk",
  },
  {
    id: 3,
    person: "Vincent",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man 2",
    time: "01:00:20",
    timestamp: 3620,
    type: "talk",
  },
  {
    id: 4,
    person: "Annie",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man 2",
    time: "01:00:30",
    timestamp: 3630,
    type: "talk",
  },
  {
    id: 5,
    person: "Annie",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    time: "01:00:40",
    timestamp: 3640,
    type: "talk",
  },
  {
    id: 6,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit just a description of the background scenery",
    time: "01:00:40",
    timestamp: 3640,
    type: "etc",
  },
  {
    id: 7,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit just a description of the background scenery",
    time: "01:00:40",
    timestamp: 3640,
    type: "etc",
  },
  {
    id: 8,
    person: "Vincent",
    text: "Lorem ipsum dolor sit amet consectetur, woman adipisicing elit angel",
    time: "01:01:10",
    timestamp: 3670,
    type: "talk",
  },
  {
    id: 9,
    person: "Fanning",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    time: "01:01:20",
    timestamp: 3680,
    type: "talk",
  },
  {
    id: 10,
    person: "Fanning",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:01:30",
    timestamp: 3690,
    type: "talk",
  },
  {
    id: 11,
    person: "Vincent",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:30",
    timestamp: 3750,
    type: "talk",
  },
  {
    id: 12,
    text:
      "Lorem ipsum dolor sit amet consectetur, woman adipisicing elit just a description of the background scenery",
    time: "01:02:30",
    timestamp: 3750,
    type: "etc",
  },
  {
    id: 13,
    person: "Richard",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:40",
    timestamp: 3760,
    type: "talk",
  },
  {
    id: 14,
    person: "Dominik",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:50",
    timestamp: 3770,
    type: "talk",
  },
  {
    id: 15,
    person: "Ida",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. man Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:60",
    timestamp: 3780,
    type: "talk",
  },
];

// Jerry Maguire
const array_tt0116695 = [
  {
    id: 1,
    person: "Mary",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man",
    time: "01:00:00",
    timestamp: 3600,
    type: "talk",
  },
  {
    id: 2,
    person: "John",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man1",
    time: "01:00:10",
    timestamp: 3610,
    type: "talk",
  },
  {
    id: 3,
    person: "John",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man 2",
    time: "01:00:20",
    timestamp: 3620,
    type: "talk",
  },
  {
    id: 4,
    person: "Jake",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit man 2",
    time: "01:00:30",
    timestamp: 3630,
    type: "talk",
  },
  {
    id: 5,
    person: "Jake",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    time: "01:00:40",
    timestamp: 3640,
    type: "talk",
  },
  {
    id: 6,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit just a description of the background scenery",
    time: "01:00:40",
    timestamp: 3640,
    type: "etc",
  },
  {
    id: 7,
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit just a description of the background scenery",
    time: "01:00:40",
    timestamp: 3640,
    type: "etc",
  },
  {
    id: 8,
    person: "John",
    text: "Lorem ipsum dolor sit amet consectetur, woman adipisicing elit angel",
    time: "01:01:10",
    timestamp: 3670,
    type: "talk",
  },
  {
    id: 9,
    person: "Martin",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor.",
    time: "01:01:20",
    timestamp: 3680,
    type: "talk",
  },
  {
    id: 10,
    person: "Martin",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:01:30",
    timestamp: 3690,
    type: "talk",
  },
  {
    id: 11,
    person: "John",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:30",
    timestamp: 3750,
    type: "talk",
  },
  {
    id: 12,
    text:
      "Lorem ipsum dolor sit amet consectetur, woman adipisicing elit just a description of the background scenery",
    time: "01:02:30",
    timestamp: 3750,
    type: "etc",
  },
  {
    id: 13,
    person: "Alexa",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:40",
    timestamp: 3760,
    type: "talk",
  },
  {
    id: 14,
    person: "Dominik",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:50",
    timestamp: 3770,
    type: "talk",
  },
  {
    id: 15,
    person: "Alfonso",
    text:
      " Lorem ipsum dolor sit amet Lorem, ipsum dolor. man Lorem ipsum dolor sit amet Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus esse, dolorum sed sequi aliquam culpa doloremque dolores eveniet veritatis vero, ipsam minima, suscipit earum maiores deleniti officia? Molestias corrupti itaque vitae voluptatem soluta commodi labore suscipit. Ducimus, repudiandae? Temporibus placeat rem iste porro dolorem voluptatem ratione officiis, aut quaerat.",
    time: "01:02:60",
    timestamp: 3780,
    type: "talk",
  },
];

function init() {
  initMovies();
  units = array_tt0369339;
  dumpUnits(units);

  displayActors(collectActorNames(units));
  document
    .querySelector(".sidebar__actors__content")
    .addEventListener("click", handleClickActor);
  document
    .querySelector(".sidebar__favorites__content")
    .addEventListener("click", handleClickFavorite);
  document
    .querySelector("input.search")
    .addEventListener("input", _.debounce(handleSearch, 550));
  document
    .querySelector(".script-container")
    .addEventListener("click", handleClickUnit);
}
init();

function collectActorNames(units) {
  const actors = _.uniqBy(units, "person")
    .map(({ person }) => person)
    .filter(person => person != undefined);
  // console.log("actors", actors);
  return actors;
}

function handleClickUnit(e) {
  const clickedElement = e.target;
  const clickedUnit = clickedElement.closest(".script-item");
  if (!clickedUnit) return;
  clickedUnit.classList.toggle("item--selected");
  const id = parseInt(clickedUnit.dataset.id);
  updateFavorites(id);
}

function updateFavorites(id) {
  const isDuplicate = findUnitInFavorites(id);
  if (isDuplicate) {
    const pos = favorites.indexOf(isDuplicate);
    const removedUnit = favorites.splice(pos, 1);
  } else {
    const newUnit = { id };
    favorites.push(newUnit);
  }
  const favoritesCount = favorites.length;
  if (favoritesCount > 0) {
    favoritesSorted = favorites.sort((a, b) => a.id - b.id);
  }
  updateSidebar(favoritesCount);
}

function findUnitInFavorites(searchedId) {
  const unit = favorites.find(favorite => favorite.id === searchedId);
  // console.log(unit, typeof unit);
  return unit;
}

function updateSidebar(favoritesCount) {
  updateSidebarHtml();
  console.log("favoritesCount", favoritesCount);
  const pIntro = document.querySelector(".sidebar__favorites__intro");

  if (favoritesCount < 1) {
    pIntro.classList.remove("display-none");
  } else {
    pIntro.classList.add("display-none");
  }
}

function updateSidebarHtml() {
  let html = "";
  for (favorite of favorites) {
    const unitFavorited = findUnit(favorite.id);
    const { id, text, time, timestamp, person, type } = unitFavorited;
    html += `
<p data-id="${id}" class="favorite-item">
<time class="script-item__timestamp" datetime="${timestamp}">${time}</time>
<b class="favorite-item__type">${unitTypeIs(unitFavorited)}</b>
${text.substring(1, 70)} ...
</p>
    `;
  }
  document.querySelector(".sidebar__favorites__content").innerHTML = html;
}

function unitTypeIs(unitFavorited) {
  console.log("unitFavorited.type", unitFavorited.type);

  if (unitFavorited.type === "talk") {
    return `${unitFavorited.person}:`;
  } else {
    return "–";
  }
}

function findUnit(searchedId) {
  const unitFound = units.find(({ id }) => id === searchedId);
  return unitFound;
}

function displayActors(actors) {
  // actors.forEach(value => console.log(value));
  actors.forEach(value =>
    document
      .querySelector(".sidebar__actors__content")
      .insertAdjacentHTML(
        "afterbegin",
        `<span data-name="${value}" class="sidebar__actor">${value}</span> `
      )
  );
}

function handleSearch() {
  const searchTerm = this.value;
  if (!searchTerm) {
    if (searchedThenFiltered && unitsFilteredByActors.length > 0) {
      unitsFilteredByActors = reapplyActors(units);
    }

    unitsFilteredBySearch = [];
    dumpUnits(arrayToUse(unitsFilteredByActors, units));
    searchedThenFiltered = false;
    return;
  } else if (searchTerm.length < 3) {
    return;
  }
  console.log("searching for", searchTerm);
  searchedThenFiltered = unitsFilteredByActors.length > 0 ? false : true;
  // this means that search was initiated before any actor filters were applied
  filterTheScript(searchTerm);
}

function handleClickActor(e) {
  const clickedElement = e.target;
  console.log("clicked on element", clickedElement);

  const clickedActor = clickedElement.closest(".sidebar__actor");
  if (!clickedActor) return;

  clickedActor.classList.toggle("sidebar__actor--active");

  let activeActorsArray = [
    ...document
      .querySelector(".sidebar")
      .querySelectorAll(".sidebar__actor--active"),
  ];
  // console.log("activeActorsArray length", activeActorsArray.length);

  const activeActorsArrayNames = activeActorsArray.map(actor => actor.dataset.name);
  // console.log("activeActorsArrayNames", activeActorsArrayNames);

  if (activeActorsArrayNames.length === 0) {
    dumpUnits(arrayToUse(unitsFilteredBySearch, units));
    unitsFilteredByActors = [];
  } else {
    filterTheScript(activeActorsArrayNames);
  }
}

function handleClickFavorite(e) {
  const clickedElement = e.target;
  const clickedFavorite = clickedElement.closest(".favorite-item");
  // console.log("clicked on", clickedFavorite);
  if (!clickedFavorite) return;

  const id = parseInt(clickedFavorite.dataset.id);
  console.log("id parsed", id);
  removeHighlighFromUnit(id);
  clickedFavorite.classList.add("fade");
  window.setTimeout(removeUnitFromFavorites, 905, id);
}

function removeHighlighFromUnit(searchedId) {
  // console.log("searchedId via removeHighlighFromUnit", searchedId);
  const selectorString = `p.script-item[data-id='${searchedId}']`;
  // console.log("selectorString", selectorString);
  document.querySelector(selectorString).classList.toggle("item--selected");
}

function removeUnitFromFavorites(searchedId) {
  // console.log("searchedId via removeUnitFromFavorites", searchedId);
  favorites = favorites.filter(favorite => favorite.id !== searchedId);
  const favoritesCount = favorites.length;
  updateSidebar(favoritesCount);
}

// this is necessary in case actor filters are in place, while the input field is cleared
function reapplyActors(units) {
  const sidebar = document.querySelector(".sidebar");
  const activeActorsArray = [...sidebar.querySelectorAll(".sidebar__actor--active")];
  const activeActorsArrayNames = activeActorsArray.map(actor => actor.dataset.name);
  unitsFilteredByActors = units.filter(
    ({ person, type }) =>
      _.includes(activeActorsArrayNames, person) || type === "etc"
  );
  return unitsFilteredByActors;
}

function filterTheScript(filterCriteria) {
  // console.log(
  //   "filterCriteria = activeActorsArrayNames or searchTerm",
  //   filterCriteria
  // );
  // console.log("is filterCriteria an array?", _.isArray(filterCriteria));

  if (Array.isArray(filterCriteria)) {
    // the filter request comes from the sidebar
    unitsFilteredByActors = arrayToUse(unitsFilteredBySearch, units).filter(
      ({ person, type }) => _.includes(filterCriteria, person) || type === "etc"
    );
    dumpUnits(unitsFilteredByActors);
  } else {
    unitsFilteredBySearch = arrayToUse(unitsFilteredByActors, units).filter(
      unit => _.includes(unit.text, filterCriteria) // #work Array Methode benutzen
    );
    dumpUnits(unitsFilteredBySearch);
  }
}

function arrayToUse(anArray, units) {
  const whichArray = anArray.length > 0 ? "anArray" : "units";
  console.log("array to filter by:", whichArray);
  return anArray.length > 0 ? anArray : units;
}

function dumpUnits(anArray) {
  let html = "";
  for (unit of anArray) {
    html += getUnitHtml(unit);
  }
  document.querySelector(".script-container").innerHTML = html;
}

function getUnitHtml(unit) {
  const { person, text, time, id, type, timestamp } = unit;
  const descriptor = type === "talk" ? person : "-";

  const html = `
  <p data-id="${id}" class="script-item ${setUnitCSSClass(person, id, type)}">
<time class="script-item__timestamp" datetime="${timestamp}">${time}</time>
<b class="script-item__type">${descriptor}</b>
${text}
</p>
`;
  // console.log(html);
  return html;
}

/* 
If the unit is from the same person as the previous unit, give it the same CSS class.
Because the code has to adapt to various movie scripts and the number of actors can vary,
the styling cannot be presupposed by HTML and CSS alone.

The function even takes into account units of type "etc".
*/

function setUnitCSSClass(nameOfThisPerson, id, type) {
  const i = id - 1; // array index of this entry
  let j = id - 2; // array index of previous entry

  if (type === "etc") {
    return (units[i].CSSClass = "item--alt-etc");
  } else if (i === 0) {
    return (units[i].CSSClass = "item--alt-1"); // always start with item--alt-1
  } else {
    // console.log(`previous index ${j} versus id ${id}`);
    nameOfPreviousPerson = units[j].person;

    //suche bis zum nächten talk unit zurück
    do {
      prevCSSClass = units[j].CSSClass;
      j = j - 1;
    } while (prevCSSClass === "item--alt-etc");

    // console.log("iteration", i, prevCSSClass);

    altCSSClass = prevCSSClass === "item--alt-1" ? "item--alt-2" : "item--alt-1";

    const isSamePerson = nameOfThisPerson === nameOfPreviousPerson ? true : false;

    if (isSamePerson) {
      units[i].CSSClass = prevCSSClass;
    } else {
      units[i].CSSClass = altCSSClass;
    }
    return units[i].CSSClass;
  }
}
