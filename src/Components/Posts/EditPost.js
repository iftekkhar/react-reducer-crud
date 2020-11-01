import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Modal from 'react-modal';
import { modalStyles } from '../ModalStyles';

Modal.setAppElement('#root')

const EditPost = ({ post }) => {
    const ID = post.id
    const { editPost } = useContext(GlobalContext);

    const [editTitle, setEditTitle] = useState(post.title)
    const handleEditTitle = e => { setEditTitle(e.target.value) }
    const [editDescription, setEditDescription] = useState(post.description)
    const handleEditDescription = e => { setEditDescription(e.target.value) }

    const handleEditPost = e => {
        e.preventDefault();
        const updatedPost = {
            id: ID,
            title: editTitle,
            description: editDescription
        }
        editPost(updatedPost);
        closeModal()
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }

    return (
        <div>
            <button onClick={openModal}>Edit Post</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Add Post"
            >

                <form onSubmit={handleEditPost}>
                    <input onChange={handleEditTitle} value={editTitle}></input>
                    <input onChange={handleEditDescription} value={editDescription}></input>
                    <button type='submit'>Edit Post</button>

                </form>

            </Modal>
        </div>
    );
};

export default EditPost;