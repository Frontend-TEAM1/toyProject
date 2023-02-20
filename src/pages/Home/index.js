import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import { MockPost } from "../../__mocks__/post";
import Card from "./components/Card/Card";

function HomePage() {
  const Posts = MockPost(20);

  return (
    <Container>
      {Posts.sort((a, b) => {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }).map((diary) => {
        return <Card diary={diary} />;
      })}
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  /* margin: 0 100px; */
  padding: 100px;
  /* ${flexCenter} */
  display: flex;
  /* justify-content: space-between; */
  border: 1px solid red;
  flex-wrap: wrap;
  background-color: "#F3F3F3";
`;
