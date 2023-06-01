document.getElementById('get-post').addEventListener('click', loadPost);

function loadPost() {
    const xhr = new XMLHttpRequest();
    const number = document.getElementById('number-post').value;
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${number}`);

    xhr.onload = () => {
        if (xhr.status === 200) {
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

    xhr.send();
}

