document.getElementById('get-text').addEventListener('click', getData);

function getData() {
    fetch('data.txt')
        .then(res => {
            if (res.ok) {
                return res.text();
            } else {
                throw Error(res.status);
            }
        })
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}