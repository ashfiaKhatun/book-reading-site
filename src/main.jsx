import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ReadBook from './components/ReadBook/ReadBook.jsx';
import WishBook from './components/WishBook/WishBook.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json')
      },
      { 
        path: '/listed-book',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: '/listed-book/read-book',
            element: <ReadBook></ReadBook>,
            loader: () => fetch('books.json')
          },
          {
            path: '/listed-book/wish-book',
            element: <WishBook></WishBook>,
            loader: () => fetch('books.json')
          },
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
