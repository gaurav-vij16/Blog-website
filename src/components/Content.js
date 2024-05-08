import { AppContext } from "../Contexts/Appcontext";
import { useContext } from "react";
import Card from "./Card.js";
import Loading from "./Loading"; // Assuming Loading component is defined

const Content = () => {
    const { isLoading, posts } = useContext(AppContext);

    return (
        <div className=" ">
            {isLoading ? (
                <Loading /> // Show loading component if data is still loading
            ) : (
                posts.length === 0 ? (
                    <h1>No data found</h1> // Show message if no data is found
                ) : (
                    posts.map((post) => (
                        <Card key={post.id} post={post} /> // Assuming each post has a unique identifier like 'id'
                    ))
                )
            )}
        </div>
    );
};

export default Content;
