import React, {Component} from 'react';
import classes from './FullPhoto.module.scss';
import Comment from '../../components/Comment/Comment';
import NewComment from "../../components/NewComment/NewComment";
import Spinner from "../../components/UI/Spinner/Spinner";

class FullPhoto extends Component {
    render() {
        let photo = '';

        if (this.props.id) {
            photo = <Spinner/>;
        }

        if (this.props.loadedPhoto) {
            let comments = Object.values(this.props.loadedPhoto.comments).map(comment => {
                return <Comment key={comment.id} date={comment.date} text={comment.text}/>
            });

            photo = (
                <div className={classes.FullPhoto}>
                    <div className={classes.FullPhoto__img}>
                        <img src={this.props.loadedPhoto.url} alt=""/>
                    </div>
                    <ul className={classes.FullPhoto__comments}>
                        {comments}
                    </ul>
                    <NewComment photoKey={this.props.loadedPhoto.id}/>
                </div>
            )
        }
        return (
            photo
        )
    }
}

export default FullPhoto;