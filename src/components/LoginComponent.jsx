import { Component } from "react";

class LoginComponent extends Component {
    render() {
        return (
            <div>

                UserName: <input type="text"></input>
                Password: <input type="password"></input>
                <button type="submit" className="btn btn-success">Login</button>

            </div>
        )
    }
}
export default LoginComponent;