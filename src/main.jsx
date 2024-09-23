import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.jsx'
import Produtos from './routes/Produtos.jsx'
import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import CadastrarProduto from './routes/CadastrarProduto.jsx'
import Criar from './routes/Criar.jsx'

const router = createBrowserRouter([{
  path:"/", element:<App/>,
  errorElement: <Error/>,

  children:[
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/produtos", element:<Produtos/>},
    {path:"/sobre", element:<Sobre/>},
    {path:"/cadastrarProduto",element:<CadastrarProduto/>},
    {path:"/criar", element: <Criar/>}
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
