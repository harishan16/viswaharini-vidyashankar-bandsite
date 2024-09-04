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
let articleEl = document.querySelector('.shows__list');
console.log(articleEl);

for (let i = 0; i < showsList.length; i++) {

    let show = showsList[i];

    let dateLabel = document.createElement('p');
    dateLabel.innerHTML = 'DATE';
    dateLabel.classList.add('shows__list-label');
    articleEl.appendChild(dateLabel);

    let date = document.createElement('p');
    date.innerHTML = show.date;
    date.classList.add('shows__list-date');
    date.classList.add('shows__list-date--highlight');
    articleEl.appendChild(date);

    let venueLabel = document.createElement('p');
    venueLabel.innerHTML = 'VENUE';
    venueLabel.classList.add('shows__list-label');
    articleEl.appendChild(venueLabel);

    let venue = document.createElement('p');
    venue.innerHTML = show.venue;
    venue.classList.add('shows__list-venue');
    articleEl.appendChild(venue);

    let locationLabel = document.createElement('p');
    locationLabel.innerHTML = 'LOCATION';
    locationLabel.classList.add('shows__list-label');
    articleEl.appendChild(locationLabel);

    let location = document.createElement('p');
    location.innerHTML = show.location;
    location.classList.add('shows__list-location');
    articleEl.appendChild(location);

    let buyTickets = document.createElement('button');
    buyTickets.innerHTML = 'BUY TICKETS';
    buyTickets.classList.add('buyTickets');
    articleEl.appendChild(buyTickets);
}