let showsList = [];

const bandSiteApi = new BandSiteApi('90a0e7b8-68d9-4acb-af2a-f8c719480a9d');

async function getShowDates() {
    const showDates = await bandSiteApi.getShows();
    const showsList = showDates.data;
    showsList.forEach((show) => {
        displayDates(show);
    })
    console.log(showsList);
}

getShowDates();


let showsEl = document.querySelector('.shows');

// Create shows header row for tablet and desktop view
let labelRow = document.createElement('div');
labelRow.classList.add('shows__labelRow');

showsEl.appendChild(labelRow);


function headerLabel () {
    let labelDate = document.createElement('span');
    labelDate.innerText = 'DATE';
    labelDate.classList.add('shows__label');
    labelRow.appendChild(labelDate);

    let labelVenue = document.createElement('span');
    labelVenue.innerText = 'VENUE';
    labelVenue.classList.add('shows__label');
    labelRow.appendChild(labelVenue);

    let labelLocation = document.createElement('span');
    labelLocation.innerText = 'LOCATION';
    labelLocation.classList.add('shows__label');
    labelRow.appendChild(labelLocation);
}

headerLabel();

// Create shows item list

function labelFunc (label) {
    let labelName = document.createElement('p');
    labelName.innerText = label;
    labelName.classList.add('shows__list-label');
    return labelName;
} 


function displayDates (show) {
    let articleEl = document.createElement('article');
    articleEl.classList.add('shows__list');

    // let show = showsList[i];  
    // console.log(show); 
    let labelName = labelFunc('DATE');
    articleEl.appendChild(labelName);

//     // console.log(show.date);
//     const newDate = new Date(show.date);
//     const dayName = newDate.toLocaleString({weekday: 'short'});
//     const month = newDate.toLocaleString({month: 'short'});
// const day = ('0' + newDate.getDate()).slice(-2);
// // console.log(day);
// const year = newDate.getFullYear();

// const showTime = `${dayName} ${month} ${day} ${year}`;
// console.log(showTime);


//     const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' }); // Mon
// const month = date.toLocaleString('en-US', { month: 'short' }); // Sep
// const day = pad(date.getDate()); // 09
// const year = date.getFullYear(); // 2024
//     console.log(day);

    let date = document.createElement('p');
    date.innerText = show.date;
    date.classList.add('shows__list-info');
    date.classList.add('shows__list-info--highlight');
    articleEl.appendChild(date);

    let venueName = labelFunc('VENUE');
    articleEl.appendChild(venueName);

    let venue = document.createElement('p');
    venue.innerText = show.place;
    venue.classList.add('shows__list-info');
    articleEl.appendChild(venue);

    let locationName = labelFunc('LOCATION');
    articleEl.appendChild(locationName);

    let location = document.createElement('p');
    location.innerText = show.location;
    location.classList.add('shows__list-info');
    articleEl.appendChild(location);

    let buyTickets = document.createElement('button');
    buyTickets.innerText = 'BUY TICKETS';
    buyTickets.classList.add('shows__buyTickets');
    articleEl.appendChild(buyTickets);

    showsEl.appendChild(articleEl);

    let divider = document.createElement('hr');
    divider.classList.add('shows__divider');
    showsEl.appendChild(divider);
}

// Hover state and selected state for shows item

    let allShows = document.querySelector('.shows');

    allShows.addEventListener('click', (event) => {
    let showItems = document.querySelectorAll('.shows__list');

    showItems.forEach((item) => {
        item.classList.remove('shows__list--selectedItem');
    })

    const clickedShow = event.target.closest('.shows__list');
    if (clickedShow) {
        clickedShow.classList.add('shows__list--selectedItem');
    }
})



