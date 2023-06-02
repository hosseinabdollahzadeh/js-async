document.getElementById('send-post').addEventListener('click', deletePost);

function deletePost() {

    const postId = document.getElementById('post-id').value;

    fetch(`https://jsonplaceholder.typicode.com/pos2ts/${postId}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error(res.status);
            }
        })
        .then(post => {
            console.log(post);
            document.getElementById('output').innerHTML = `Post ${postId} deleted successfully!`;
        })
        .catch(err => console.log(err));
}