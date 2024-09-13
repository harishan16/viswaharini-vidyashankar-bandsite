

// class instantiation
const bandSiteApi = new BandSiteApi('90a0e7b8-68d9-4acb-af2a-f8c719480a9d');

let commentsList = [];
let nameError = document.querySelector('.comments__nameError');
let commentError = document.querySelector('.comments__commentError');
let commentsForm = document.querySelector('.comments__form');
let displayElement = document.querySelector('.comments__display');

// step 4: sorts the comments array newest to oldest
function arraySort (data){
    data.sort((a, b) => b.timestamp - a.timestamp);
    return data;
}

function formErrorReset(form) {
    nameError.classList.add('comments__nameError');
    commentError.classList.add('comments__commentError');
    form.name.classList.remove('comments__inputError');
    form.comment.classList.remove('comments__inputError');
}


function getComments() {
    displayElement.innerText = "";

    // setTimeout
    async function getCommentsData() {
        // step 2: get the data from api class
        const getData = await bandSiteApi.getComments();
        // step 3: call sort function to sort
        commentsList = arraySort(getData.data);
        commentsList.forEach((item) => {
            // step 5: for each the array response and call display function
            displayComment(item);
        });
    }
   
 getCommentsData();
}
// step 1 : call get api to get comments
getComments();

// step 4: for each of the comment build the html components
function displayComment(item) {
// step 6: convert ms into regular time and then readable time
const time = new Date(item.timestamp);
const month = ('0' + (time.getMonth() + 1)).slice(-2);
const day = ('0' + time.getDate()).slice(-2);
const year = time.getFullYear();
commentedTime  = `${month}/${day}/${year}`;

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
timeStamp.textContent = commentedTime;
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

if (name && comment) {
// creating the new comment as object
    const newComment = {
        name: name,
        comment: comment,
    }

async function postCommentData() {
       const postComment = await bandSiteApi.postComment(newComment);
       getComments();
}

postCommentData();
form.reset();
formErrorReset(form);

} if(!name) {
    nameError.classList.remove('comments__nameError');
    nameError.classList.add('comments__errorDisplay');
    form.name.classList.add('comments__inputError');
} if(!comment) {
    commentError.classList.remove('comments__commentError');
    commentError.classList.add('comments__errorDisplay');
    form.comment.classList.add('comments__inputError');
} 
}) 








