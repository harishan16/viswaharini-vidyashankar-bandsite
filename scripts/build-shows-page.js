let showsList = [
    {
        date: 'Mon Sept 09 2024',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Sep 17 2024',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Oct 12 2024',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 16 2024',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 29 2024',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 18 2024',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
]

// const bandSiteApi = new BandSiteApi('90a0e7b8-68d9-4acb-af2a-f8c719480a9d');

// async function getShowDates() {
//     const showDates = await bandSiteApi.getShows();
//     console.log(showDates);
// }

// getShowDates();



let showsEl = document.querySelector('.shows');

// Create shows header row for tablet and desktop view
let labelRow = document.createElement('div');
labelRow.classList.add('shows__labelRow');

showsEl.appendChild(labelRow);

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

// Create shows item list

function labelFunc (label) {
    let labelName = document.createElement('p');
    labelName.innerText = label;
    labelName.classList.add('shows__list-label');
    return labelName;
} 

for (let i = 0; i < showsList.length; i++) {

    let articleEl = document.createElement('article');
    articleEl.classList.add('shows__list');

    let show = showsList[i];   
    let labelName = labelFunc('DATE');
    articleEl.appendChild(labelName);


    let date = document.createElement('p');
    date.innerText = show.date;
    date.classList.add('shows__list-info');
    date.classList.add('shows__list-info--highlight');
    articleEl.appendChild(date);

    let venueName = labelFunc('VENUE');
    articleEl.appendChild(venueName);

    let venue = document.createElement('p');
    venue.innerText = show.venue;
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



