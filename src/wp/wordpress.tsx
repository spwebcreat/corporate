export async function getPosts() {
  try {
    const rs = await fetch("http://territory.okinawa.local/wp-json/wp/v2/posts?_embed");
    if (!rs.ok) {
      throw new Error(`HTTP error! status: ${rs.status}`);
    }
    const posts = await rs.json();
    return posts;
  } catch (error) {
    return null;
  }
}

export async function getDetailPost(id: number) {
  try {
    const rs = await fetch(`http://territory.okinawa.local/wp-json/wp/v2/posts/${id}?_embed`);
    if (!rs.ok) {
      throw new Error(`HTTP error! status: ${rs.status}`);
    }
    const post = await rs.json();
    return post;
  } catch (error) {
    return null;
  }
}