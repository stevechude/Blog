const baseURL = process.env.baseURL;

// endpoint: http://localhost:3000/api/posts
export default async function getPost(id) {
  const res = await fetch(`${baseURL}api/posts`);
  const posts = await res.json();

  if (id) {
    const result = posts.find((val) => val.id == id);
    return result;
  }

  return posts;
}
