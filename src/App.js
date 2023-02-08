import { MockPost } from "./__mocks__/post";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from './styles/theme'



function App() {
  // const Posts = MockPost(5);
  // /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  // console.log(Posts);

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
  );
}

export default App;
