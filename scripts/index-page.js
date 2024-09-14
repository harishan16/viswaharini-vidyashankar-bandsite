const bandSiteApi = new BandSiteApi('90a0e7b8-68d9-4acb-af2a-f8c719480a9d');

let commentsList = [];
let nameError = document.querySelector('.comments__nameError');
let commentError = document.querySelector('.comments__commentError');
let commentsForm = document.querySelector('.comments__form');
console.log(commentsForm);

let displayElement = document.querySelector('.comments__display');


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

function dateConversion (item) {
    const time = new Date(item.timestamp);
const month = ('0' + (time.getMonth() + 1)).slice(-2);
const day = ('0' + time.getDate()).slice(-2);
const year = time.getFullYear();
commentedTime  = `${month}/${day}/${year}`;
}

function getComments() {
    displayElement.innerText = "";

    async function getCommentsData() {
        const getData = await bandSiteApi.getComments();
        commentsList = arraySort(getData.data);
        commentsList.forEach((item) => {
            displayComment(item);
        });
    }
    getCommentsData();
}
getComments();

function displayComment(item) {
    dateConversion(item);
    console.log(item);

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

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('comments__icons');
    infoText.appendChild(iconsDiv);

    const likeButton = document.createElement('img');
    likeButton.classList.add('comments__like');
    likeButton.setAttribute('src', './assets/icons/SVG/like.png');
    iconsDiv.appendChild(likeButton);

    const likeCount = document.createElement('span');
    likeCount.classList.add('comments__likeCounter');
    likeCount.textContent = item.likes;
    iconsDiv.appendChild(likeCount);

    const deleteButton = document.createElement('img');
    deleteButton.classList.add('comments__delete');
    deleteButton.setAttribute('src', './assets/icons/SVG/trash.png');
    infoText.appendChild(deleteButton);

    let divider = document.createElement('hr');
    divider.classList.add('comments__divider');
    displayElement.appendChild(divider);

    likeButton.addEventListener('click', (event) => {
        event.preventDefault();
        async function saveLikeData() {
            const likeUpdated = await bandSiteApi.likeComment(item.id);
            console.log(likeUpdated);
       getComments();
     }
     saveLikeData();
    })

    deleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        async function deleteCommentData() {
            const deleteUpdated = await bandSiteApi.deleteComment(item.id);
            console.log(deleteUpdated);
       getComments();
     }
     deleteCommentData();
    })
  
}

commentsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const comment = form.comment.value;

if (name && comment) {
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
















