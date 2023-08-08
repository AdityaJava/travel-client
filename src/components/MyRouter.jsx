import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TravelPackages from "./TravelPackages";
import PackageSearchComponent from "./PackageSearchComponent";

class MyRouter extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<PackageSearchComponent />}></Route>
                        <Route exact path="/travelPackages" element={<TravelPackages />}></Route>

                    </Routes>
                </BrowserRouter>
            </div>
        )
    }

}

export default MyRouter;