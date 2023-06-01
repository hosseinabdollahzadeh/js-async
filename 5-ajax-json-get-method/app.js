document.getElementById('get-post').addEventListener('click', loadPost);
document.getElementById('get-posts').addEventListener('click', loadPosts);

function loadPost() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'post.json');

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

function loadPosts() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'posts.json');

    xhr.onload = () => {
        if (xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);

            let output = "";
            posts.forEach(post => {
                output += `
            <ul>
                <li>ID: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
            </ul>
            `;
            });
            document.getElementById('output').innerHTML = output;
        }
    }

    xhr.send();
}

