import React, { Component } from 'react';
import axios from 'axios';

import { string } from 'prop-types';
import classes from './NewComment.module.scss';
import Input from "../UI/Input/Input";

class NewComment extends Component {
    state = {
        comment: {
            name: '',
            comment: ''
        }
    };

    postDataHandler = (e) => {
        e.preventDefault();
        const { comment } = this.state;
        const { photoKey } = this.props;

        const data = {
            name: comment.name,
            comment: comment.comment
        };
        axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${  photoKey  }/comments`, data)
            .then(response => {
                console.log(response);
                alert('Комментарий отправлен!')
            })
            .catch(error => {
                console.log(error);
                alert('Не удалось отправить комментарий')
            })
        ;
    };

    inputCommentHandler = (event) => {
        this.setState( prevState => ({
            comment:
                { ...prevState.comment, comment: event.target.value }
        }) )
    };

    inputNameHandler = (event) => {
        this.setState(prevState => ({
            comment:
                { ...prevState.comment, name: event.target.value}
        }) )
    };

    render () {
        const { comment } = this.state;

        return (
            <form className={classes.Form}>
                <Input label='Ваше имя' id='username' value={comment.name} onchange={(event) => this.inputNameHandler(event)}/>
                <Input label='Ваш комментарий' id='comment' value={comment.comment} onchange={(event) => this.inputCommentHandler(event)}/>
                <button type='submit' className={classes.Submit} onClick={(e) => this.postDataHandler(e)}>Оставить комментарий</button>
            </form>
        );
    }
}

NewComment.propTypes = {
    photoKey: string.isRequired,
};

export default NewComment;
