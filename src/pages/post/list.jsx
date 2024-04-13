import { useEffect, useState } from "preact/compat";
import { Link } from "preact-router";
import directus from "../../utils/directus";
import { readItems } from "@directus/sdk";
export  function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true); // Set loading state to true when fetching data

        const fetchData = async () => {
          try {
            const posts = await directus.request(readItems("posts", {
                fields : ['title', 'published_date', 'author.name', 'slug'],
            }));
            console.log("🚀 ~ fetchData ~ posts:", posts)
            setPosts(posts); // Assuming posts.data contains an array of blog posts
          } catch (error) {
            console.error("Error fetching posts:", error);
          }finally {
            setLoading(false); // Set loading state to false when data is fetched (whether success or error)
          }
        };
    
        fetchData();
      }, []);

  
    return (
        <div>
        <h1>Blog Posts</h1>
        { loading ? ( 
          <p>Loading...</p>
        ) : (
          <ul>
          {posts.map((post) => (
            <li key={post.slug}>
                <Link href={`/post/${post.slug}`}>
              <h2 style={{ textAlign: "left", textDecoration: 'underline', cursor: 'pointer' }}>{post.title}</h2>
                </Link>
              <div  style={{ textAlign: "left" }}>
                <span>{post.published_date}</span>
                <span > &bull; {post.author.name}</span>
              </div>
            </li>
          ))}
        </ul>
        ) }

      </div>
    )
  };