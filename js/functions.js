function hideSinglePost() {
    document.getElementById("single-post").style.display = "none";
}

function hideEditPage() {
    document.getElementById("single-post").style.display = "none";
}

function goToSinglePost() {
    //hide all posts
    document.getElementById("posts").style.display = "none";
    //display one post (the post that user wants to read)
    document.getElementById("single-post").style.display = "block";
}

function goToHomePage() {

    //hide single post
    document.getElementById('single-post').innerHTML = "";
    document.getElementById('single-post').style.display = "none";
    //show the posts page
    document.getElementById("posts").style.display = "";

}

function goToEditPage() {
    //hide all posts
    document.getElementById("posts").style.display = "none";
    //display one post (the post that user wants to read)
    document.getElementById("single-post").style.display = "block";
}

function goToAdminPage() {

    //hide single post
    document.getElementById('single-post').innerHTML = "";
    document.getElementById('single-post').style.display = "none";
    //show the posts page
    document.getElementById("posts").style.display = "";

}