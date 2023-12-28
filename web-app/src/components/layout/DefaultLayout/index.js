import Header from "./Header/Header";
import Slidebar from './Slidebar/Slidebar'
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header></Header>
            <div className="container">
                <Slidebar></Slidebar>
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default DefaultLayout;