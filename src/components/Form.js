import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions';

function mapDispatchToProps ( dispatch ) {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle( { title, id });
        this.setState({ title: "" });
    }
    handleChange (event) {
        this.setState({ [event.target.id] : event.target.value });
    }
    render() {
        const { title } = this.state;
        return (
            <form onSubmit = { this.handleSubmit }>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={ title }
                    onChange={ this.handleChange }
                    />
                </div>
                <button type="submit"
                className="btn btn-success btn-ig"> 
                SAVE
                </button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;