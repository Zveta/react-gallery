import React, { Component } from 'react';
import classes from './Gallery.module.scss';
import Photo from './../../components/Photo/Photo';
import FullPhoto from "../FullPhoto/FullPhoto";
import Modal from "../../components/UI/Modal/Modal";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";

class Gallery extends Component {
    state = {
        photos: [],
        selectedPhotoId: null,
        error: false,
        loadedPhoto: null
    };

    componentDidMount () {
        axios.get( 'https://boiling-refuge-66454.herokuapp.com/images' )
            .then( response => {
                const photos = response.data;
                const updatedPhotos = photos.map(photo => {
                    return photo;
                });
                this.setState({photos: updatedPhotos});
            } )
            .catch(error => {
                this.setState({error: true});
                console.log(error);
                alert('Что-то пошло не так')
            });
    }

    photoSelectedHandler = (id) => {
        this.setState({selectedPhotoId: id, showModal: true, loadedPhoto: null});
         axios.get('https://boiling-refuge-66454.herokuapp.com/images/' + id)
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
        let photos = <Spinner/>;

        if (this.state.photos) {
            photos = this.state.photos.map(photo => {
                return <Photo
                    key={photo.id}
                    url={photo.url}
                    clicked={() => this.photoSelectedHandler(photo.id)} />;
            });
        }

        return (
            <div className={classes.Gallery}>
                {photos}
                <Modal show={this.state.showModal} clicked={this.modalCloseHandler}>
                    <FullPhoto loadedPhoto={this.state.loadedPhoto} id={this.state.selectedPhotoId} />
                </Modal>
            </div>
        );
    }
}

export default Gallery;