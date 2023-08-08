import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TravelPackages from "./TravelPackages";
import PackageSearchComponent from "./PackageSearchComponent";
import HeaderComponent from "./HeaderComponent";

class MyRouter extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<HeaderComponent />}></Route>
                        <Route exact path="/travelPackages" element={<TravelPackages />}></Route>
                        <Route exact path="/packageSearch" element={<PackageSearchComponent />}></Route>

                    </Routes>
                </BrowserRouter>
            </div>
        )
    }

}

export default MyRouter;