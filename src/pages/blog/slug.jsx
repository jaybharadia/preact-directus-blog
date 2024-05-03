import { useEffect, useState } from "preact/compat";
import {  useRoute , useLocation} from "preact-iso";
import directus from "../../utils/directus";
import { readItem } from "@directus/sdk";
export  function Blog() {
  const {params} = useRoute();
  const location = useLocation();
    const [post, setPost] = useState( {});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true); // Set loading state to true when fetching data

        const fetchData = async () => {
          try {
            const post = await directus.request(readItem("posts", params.slug  ));
            setPost(post); // Assuming posts.data contains an array of blog posts
          } catch (error) {
            location.route('/404');
            console.error("Error fetching page:", error);
          }finally{
            setLoading(false)
          }
        };
    
        fetchData();
      }, [params.slug]);

  
    return (
      <div>
        { loading ? (
          <p>Loading...</p>
          ) : (
            <img src={`${directus.url}assets/${post.image.filename_disk}?width=600`} alt="" />
            <>
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </>
        )}
      
    </div>
    )
  };