document.getElementById('send-post').addEventListener('click', updatePost);

function updatePost() {

    const postId = document.getElementById('post-id').value;
    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;

    const params = {userId: 2, title: postTitle, body: postBody};

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(post => {
            let output = `
            <ul>
                <li>ID: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
            </ul>
            `;
            document.getElementById('output').innerHTML = output;
        })
}