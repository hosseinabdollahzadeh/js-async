document.getElementById('get-post').addEventListener('click', getPost);
document.getElementById('get-posts').addEventListener('click', getPosts);

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/3')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error(res.status);
            }
        })
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
        .catch(err => console.log(err));
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error(res.status);
            }
        })
        .then(posts => {

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
        })
        .catch(err => console.log(err));
}

