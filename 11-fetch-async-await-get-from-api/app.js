document.getElementById('get-post').addEventListener('click', getPost);
document.getElementById('get-posts').addEventListener('click', getPosts);

async function getPost() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts/11')
        if (res.ok) {
            let post = await res.json();
            let output = `
            <ul>
                <li>ID: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body: ${post.body}</li>
            </ul>
            `;
            document.getElementById('output').innerHTML = output;
        } else {
            throw Error(res.status);
        }
    } catch (err) {
        console.log(err);
    }
}

async function getPosts() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (res.ok) {
            let posts = await res.json();
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
        } else {
            throw Error(res.status);
        }
    } catch (err) {
        console.log(err);
    }
}

