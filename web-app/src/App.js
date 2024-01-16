import '~/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/layout';
import { Fragment } from 'react';
import { UserProvider } from './pages/Users/UserContext/UserContext'; // Import UserProvider từ Context

function App() {
    return (
        <UserProvider> {/* Bọc App trong UserProvider */}
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component; // Chỉnh sửa từ 'componnent' thành 'component'
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;