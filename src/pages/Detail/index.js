import styled from "styled-components";
import { MockPost } from "../../__mocks__/post";

function DetailPage() {
    return(
        <Container>
            <Wrapper>
                
            </Wrapper>
            <Login>

            </Login>
        </Container>
    )
}

export default DetailPage;

const Container = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    flex-wrap: wrap;
    background-color: rgb(245, 245, 245);
`

const Wrapper = styled.div`
    width: 80%;
    height: 800px;
    margin: 0 auto;
    padding: 50px;
    background-color: white;
    border: 1px solid purple;
    border-radius: 40px
`

const Login = styled.div`
    margin: 0 auto;
    padding: 50px;
    border: 1px solid purple;
    border-radius: 40px
`