let API;

const APIPromise = fetch("/api-key")
  .then((res) => res.text())
  .then((key) => {
    API = axios.create({
      baseURL: "https://onimovies-api.onrender.com/api/v1",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return API;
  });

export { APIPromise as API };
