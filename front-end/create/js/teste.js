async function createNewUser() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    const requestBody = {
     email: "ab@gmail.com",
     senha: "ab",
     nome: "Nome ab",
    };
  
    const dataRequest = {
      headers: headers,
      method: "POST",
      body: JSON.stringify(requestBody),
    };
  
    const response = await fetch("http://localhost:5000/user", dataRequest);
    const json = await response.json();
  
    console.log(json);
  } 
  async function login() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
  
    const requestBody = {
      email: "ab@gmail.com",
      senha: "ab",
    };
  
    const dataRequest = {
      headers: headers,
      method: "POST",
      body: JSON.stringify(requestBody),
    };
  
    const response = await fetch("http://localhost:5000/auth", dataRequest);
    const json = await response.json();
    console.log(json);
  
    sessionStorage.setItem("token", json.data.token);
  }
  await createNewUser();
  await login();