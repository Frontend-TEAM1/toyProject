import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/routing';
import { store } from 'store/store';
import GlobalStyles from 'styles/global';

function App() {
  // const Posts = MockPost(5);
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  // console.log(Posts);

  return (
    <>
      <Provider store={store}>
          <GlobalStyles />
          <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
