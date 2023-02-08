import { MockPost } from "../../__mocks__/post";
import Card from "./components/Card/Card";


function HomePage() {
    const Posts = MockPost(5);

    return (
        <>
            {Posts.map((diary) => {
                return <Card diary={diary}/>
            })}
        </>
    )
}

export default HomePage;