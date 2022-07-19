import { Component } from "react";

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: this.props.person.name,
                phonenumber: this.props.person.phonenumber,
                age: this.props.person.age,
                email: this.props.person.email
            }
        }
    }
    render() {
        return (
            <div>
                <p>Name: {this.state.person.name}</p>
                <p>phonenumber: {this.state.person.phonenumber}</p>
                <p>Age: {this.state.person.age}</p>
                <p>Email: {this.state.person.email}</p>
            </div>
        )
    }
}
