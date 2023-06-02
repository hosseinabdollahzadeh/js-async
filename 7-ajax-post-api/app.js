document.getElementById('send-post').addEventListener('click', sendPost);

function sendPost() {
    const xhr = new XMLHttpRequest();

    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;

    const params = {userId: 2, title: postTitle, body: postBody};

    // console.log(JSON.stringify(params));

    // xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true); // true for async and false for sync (default is true)
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = () => {
        if (xhr.status === 201) {
            let post = JSON.parse(xhr.responseText);
            let output = `
            <ul>
                <li>ID: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
            </ul>
            `;

            document.getElementById('output').innerHTML = output;
        }
    }

    xhr.send(JSON.stringify(params));
}

