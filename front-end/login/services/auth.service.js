export async function authPost(jsonForm) {
    const baseUrl = "http://localhost:5000/v1/";
    const route = "auth";
    const method = "POST";

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = jsonForm;
    const response = await fetch(baseUrl + route, {body, headers, method});
    return await response.json();
}