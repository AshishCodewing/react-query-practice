export function getPosts() {
    fetch("/api/vans")
        .then(res => res.json())
        .then(data => console.log(data))
}
