import { useEffect, useState } from "preact/compat";
import {  useRoute } from "preact-iso";
import directus from "../../utils/directus";
import { readItem } from "@directus/sdk";
export  function Post() {
  const {params } = useRoute();
    const [post, setPost] = useState( {});
    useEffect(() => {
        const fetchData = async () => {
          try {
            const post = await directus.request(readItem("posts", params.slug  ));
            console.log("🚀 ~ fetchData ~ posts:", post)
            setPost(post); // Assuming posts.data contains an array of blog posts
          } catch (error) {
            console.error("Error fetching blogs:", error);
          }
        };
    
        fetchData();
      }, [params.slug]);

  
    return (
      <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
      )}
    </div>
    )
  };