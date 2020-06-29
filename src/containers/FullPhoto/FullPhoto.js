import React, {Component} from 'react';
import { shape, string, number } from 'prop-types';
import classes from './FullPhoto.module.scss';
import Comment from '../../components/Comment/Comment';
import Spinner from "../../components/UI/Spinner/Spinner";
import NewComment from '../../components/NewComment/NewComment';

class FullPhoto extends Component {
    render() {
        const { id, loadedPhoto } = this.props;
        let photo = '';

        if (id) {
            photo = <Spinner/>;
        }

        if (loadedPhoto) {
            const comments = Object.values(loadedPhoto.comments).map(comment => {
                return <Comment key={comment.id} date={comment.date} text={comment.text}/>
            });

            photo = (
                <div className={classes.FullPhoto}>
                    <div className={classes.FullPhoto__img}>
                        <img src={loadedPhoto.url} alt=""/>
                    </div>
                    <ul className={classes.FullPhoto__comments}>
                        {comments}
                    </ul>
                    <NewComment photoKey={loadedPhoto.id}/>
                </div>
            )
        }
        return (
            photo
        )
    }
}

FullPhoto.propTypes = {
  id: number.isRequired,
  loadedPhoto: shape(
    {
      url: string.isRequired,
      id: number.isRequired
    })
};

FullPhoto.defaultProps = {
  loadedPhoto: {}
};

export default FullPhoto;
