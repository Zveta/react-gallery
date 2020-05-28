import React, { Component } from 'react';
import axios from 'axios';

import classes from './NewComment.module.scss';
import Input from './../UI/Input/Input';

class NewComment extends Component {
    state = {
        comment: {
            name: '',
            comment: ''
        }
    };

    postDataHandler = (e) => {
        e.preventDefault();
        const data = {
            name: this.state.comment.name,
            comment: this.state.comment.comment
        };
        axios.post('https://boiling-refuge-66454.herokuapp.com/images/' + this.props.photoKey + '/comments', data)
            .then(response => {
                console.log(response)
                alert('Комментарий отправлен!')
            })
            .catch(error => {
                console.log(error)
                alert('Не удалось отправить комментарий')
            })
        ;
    };

    inputCommentHandler = (event) => {
        this.setState( {
            comment:
                { ...this.state.comment, comment: event.target.value }
        } )
    };

    inputNameHandler = (event) => {
        this.setState( {
            comment:
                { ...this.state.comment, name: event.target.value}
        } )
    };

    render () {
        return (
            <form className={classes.Form}>
                <Input label='Ваше имя' value={this.state.comment.name} onchange={(event) => this.inputNameHandler(event)}/>
                <Input label='Ваш комментарий' value={this.state.comment.comment} onchange={(event) => this.inputCommentHandler(event)}/>
                <button type='submit' className={classes.Submit} onClick={(e) => this.postDataHandler(e)}>Оставить комментарий</button>
            </form>
        );
    }
}

export default NewComment;