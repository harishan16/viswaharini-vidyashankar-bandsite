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
let showsEl = document.querySelector('.shows');
// console.log(articleEl);

function labelFunc (label) {
    // console.log(label);
    let labelName = document.createElement('p');
    labelName.innerHTML = label;
    labelName.classList.add('shows__list-label');
    return labelName;
} 

for (let i = 0; i < showsList.length; i++) {

    let articleEl = document.createElement('article');
    articleEl.classList.add('shows__list');


    let show = showsList[i];   
   let labelName = labelFunc('DATE');
    console.log(labelName);

    articleEl.appendChild(labelName);


    let date = document.createElement('p');
    date.innerHTML = show.date;
    date.classList.add('shows__list-info');
    date.classList.add('shows__list-info--highlight');
    articleEl.appendChild(date);

   let venueName = labelFunc('VENUE');

   articleEl.appendChild(venueName);


    let venue = document.createElement('p');
    venue.innerHTML = show.venue;
    venue.classList.add('shows__list-info');
    articleEl.appendChild(venue);

    let locationName = labelFunc('LOCATION');

    articleEl.appendChild(locationName);


    let location = document.createElement('p');
    location.innerHTML = show.location;
    location.classList.add('shows__list-info');
    articleEl.appendChild(location);

    let buyTickets = document.createElement('button');
    buyTickets.innerHTML = 'BUY TICKETS';
    buyTickets.classList.add('shows__buyTickets');
    articleEl.appendChild(buyTickets);

    showsEl.appendChild(articleEl);

    let divider = document.createElement('hr');
    divider.classList.add('shows__divider');
    showsEl.appendChild(divider);

}