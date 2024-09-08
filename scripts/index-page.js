
let commentsList = [
    {
        name: 'Victor Pinto',
        timeStamp: '11/02/2023',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },
    {
        name: 'Christina Cabrera',
        timeStamp: '10/28/2023',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    {
        name: 'Isaac Tadesse',
        timeStamp: '10/20/2023',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me   goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }
]

function arraySort (){
commentsList.sort((a, b) => {
    const dateA = new Date(a.timeStamp);
    const dateB = new Date(b.timeStamp);

    return dateB - dateA;
}); 
}


let commentsForm = document.querySelector('.comments__form');
console.log(commentsForm);

let displayElement = document.querySelector(".comments__display");
console.log(displayElement);

function displayNew () {
    displayElement.innerText = "";

commentsList.forEach((item) => {
    displayComment(item);
});
}

function displayComment(item) {

let article = document.createElement("article");
article.classList.add("comments__item");
displayElement.appendChild(article);

if (item.image !== undefined) {
    const userImage = document.createElement('img');
    userImage.classList.add("comments__userImage");
    userImage.setAttribute("src", item.image);
    article.appendChild(userImage);
} else {
    const imageHolder = document.createElement('div');
    imageHolder.classList.add("comments__imageHolder");
    article.appendChild(imageHolder);
}

const infoText = document.createElement("div");
infoText.classList.add("comments__info-text");
article.appendChild(infoText);

const userName = document.createElement('p');
userName.classList.add("comments__user-name");
userName.textContent = item.name;
infoText.appendChild(userName);

const timeStamp = document.createElement('span');
timeStamp.classList.add("comments__time-stamp");
timeStamp.textContent = item.timeStamp;
infoText.appendChild(timeStamp);

const userComment = document.createElement('p');
userComment.classList.add("comments__user-comment");
userComment.textContent = item.comment;
infoText.appendChild(userComment);

let divider = document.createElement('hr');
divider.classList.add('comments__divider');
displayElement.appendChild(divider);
}

commentsForm.addEventListener('submit', (event) => {
   
event.preventDefault();

const form = event.target;
const name = form.name.value;
const comment = form.comment.value;

// creating the new comment as object
    const newComment = {
        name: name,
        timeStamp: new Date(),
        comment: comment,
    }

commentsList.push(newComment);
    
arraySort();

 // formatting date to mm/dd/yyyy
const month = ('0' + (newComment.timeStamp.getMonth() + 1)).slice(-2);
const day = ('0' + newComment.timeStamp.getDate()).slice(-2);
const year = newComment.timeStamp.getFullYear();

newComment.timeStamp = `${month}/${day}/${year}`;

form.reset();

displayNew();

}) 

displayNew();
