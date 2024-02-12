import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import LetterPage from './pages/MainPage/LetterPage';
import ChocoPage from './pages/MainPage/ChocoPage';

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: '/letterpage',
                element: <LetterPage />
            },
            {
                path: '/chocopage',
                element: <ChocoPage />
            }
        ]
    }
]);