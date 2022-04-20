export const fetchData = async () => {
    return fetch('http://localhost/api/hello')
        .then((res) => res.json())
        .then((result) => result);
}
