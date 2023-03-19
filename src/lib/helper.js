const baseURL = "http://localhost:3000/api/posts";

// endpoint: http://localhost:3000/api/posts
export default async function getPost(id) {
  const res = await fetch(`${baseURL}`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}

// const baseURL = "http://localhost:3000/";

// export default async function getPost(id) {
//   const endpoint = id ? `api/posts/${id}` : "api/posts";
//   const res = await fetch(`${baseURL}${endpoint}`);
//   const data = await res.json();

//   return data;
// }

// endpoint: http://localhost:3000/api/posts

// export default async function getPost(id) {
//   const res = await fetch(`${baseURL}api/posts`);
//   const posts = await res.json();

//   if (id) {
//     const result = posts.find((val) => val.id == id);
//     return result;
//   }

//   return posts;
// }
