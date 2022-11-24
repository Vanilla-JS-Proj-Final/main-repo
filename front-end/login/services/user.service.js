export async function userPost(jsonForm) {
    const baseUrl = "http://localhost:5000/v1/";
    const route = "user";
    const method = "POST";

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = jsonForm;
    const response = await fetch(baseUrl + route, {body, headers, method});
    return await response.json();
}