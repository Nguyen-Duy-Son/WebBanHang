import SignIn from "~/pages/Users/SignIn/SignIn";
import SignUp from "~/pages/Users/SignUp/SignUp";
import Home from '~/pages/Users/Home/Home';
import { DefaultLayout } from "~/components/layout";
// Public Routes
const publicRoutes = [
    {path:'/SignIn', componnent:SignIn},
    {path:'/SignUp', componnent:SignUp},
    {path:'/Home', componnent:Home, layout: DefaultLayout}
]

// Private Routes
const privateRoutes = []
export {publicRoutes,privateRoutes};