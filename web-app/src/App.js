import '~/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import {DefaultLayout} from './components/layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.componnent;
                        let Layout = DefaultLayout;
                        if(route.layout){
                            Layout = route.layout;
                        } 
                        else if(route.layout==null){
                            Layout = Fragment;
                        }
                        return <Route key={index} path={route.path} element={<Layout><Page></Page></Layout>}></Route>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
