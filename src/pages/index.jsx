import directus from "../utils/directus";
import { readSingleton } from "@directus/sdk";
import { useState } from "preact/compat";


export function Home(){
    const [global, setGlobal ] = useState( {});
    const fetchData =  async () => {

        const global = await directus.request(readSingleton("global"));

        setGlobal(global)


    };
    fetchData()

    return (
        <div>
            Home Page
            <h1>{global.title}</h1>
        </div>
    )
}