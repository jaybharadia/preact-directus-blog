import { useEffect, useState } from "preact/compat";
import {  useRoute , useLocation} from "preact-iso";
import directus from "../utils/directus";
import { readItem } from "@directus/sdk";
export  function Page() {
  const {params} = useRoute();
  const location = useLocation();
    const [page, setPage] = useState( {});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true); // Set loading state to true when fetching data

        const fetchData = async () => {
          try {
            const page = await directus.request(readItem("pages", params.slug  ));
            setPage(page); // Assuming posts.data contains an array of blog posts
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
            <>
              <h1>{page.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: page.content }} />
            </>
        )}
      
    </div>
    )
  };