import * as React from "react";
import Navbar from "./navbar";
import Footer from "./pages/footer.component";

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    public componentDidMount() {
        setTimeout(() => {
            const $loadingContainer = $(".cssload-pgloading")[0];
            $loadingContainer.classList.add("cssload-pgloading-inative");
        }, 0);
    }

    render() {
        return (
            <div>
                <div className="cssload-pgloading">
                    <div className="cssload-loadingwrap">
                        <ul className="cssload-bokeh">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <Navbar />
                <div className="page-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
