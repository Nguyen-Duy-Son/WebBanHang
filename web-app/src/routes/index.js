import SignIn from "~/pages/SignIn/SignIn";
import SignUp from "~/pages/SignUp/SignUp";

// Public Routes
const publicRoutes = [
    {path:'/SignIn', componnent:SignIn},
    {path:'/SignUp', componnent:SignUp}
]

// Private Routes
const privateRoutes = []
export {publicRoutes,privateRoutes};