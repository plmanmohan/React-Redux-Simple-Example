import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
export class Post extends Component {
    construction() {
        super();
    }
    componentDidMount() {
        this.props.getData();
    }

    render() {
        
    }
}