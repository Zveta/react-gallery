import React, { Component } from 'react';
import axios from "axios";
import classes from './Gallery.module.scss';
import Photo from "../../components/Photo/Photo";
import FullPhoto from "../FullPhoto/FullPhoto";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

class Gallery extends Component {
    state = {
        photos: [],
        selectedPhotoId: '',
        loadedPhoto: null,
        showModal: false
    };

    componentDidMount () {
        axios.get( 'https://boiling-refuge-66454.herokuapp.com/images' )
            .then( response => {
                const photos = response.data;
                this.setState({photos});
            } )
            .catch(error => {
                console.log(error);
                alert('Что-то пошло не так')
            });
    }

    photoSelectedHandler = (id) => {
        this.setState({selectedPhotoId: id, showModal: true, loadedPhoto: null});
         axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${  id}`)
                .then(response => {
                    this.setState({loadedPhoto: response.data})
                })
                 .catch(error => {
                     console.log(error);
                     alert('Что-то пошло не так')
                 });
    };

    modalCloseHandler = () => {
        this.setState({showModal: false, selectedPhotoId: null});
    };

    render () {
        const { photos, showModal, loadedPhoto, selectedPhotoId } = this.state;
        let content = <Spinner/>;

        if (photos) {
          content = photos.map(photo => {
                return <Photo
                    key={photo.id}
                    url={photo.url}
                    clicked={() => this.photoSelectedHandler(photo.id)} />;
            });
        }

        return (
            <div className={classes.Gallery}>
                {content}
                <Modal show={showModal} clicked={this.modalCloseHandler}>
                    <FullPhoto loadedPhoto={loadedPhoto} id={selectedPhotoId} />
                </Modal>
            </div>
        );
    }
}

export default Gallery;
