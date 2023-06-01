const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            let error = false;
            if (!error) {
                resolve(post);
            } else {
                reject('Error ...');
            }
        }, 2000);
    });
}

async function getPosts() {
    try {
        let newPost = await createPost({title: 'Post Three', body: 'This is post three'});
        // console.log(newPost);

        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    } catch (err) {
        console.log(err);
    }
}

// createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch((err) => console.log(err));

getPosts();