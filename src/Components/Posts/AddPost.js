import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import { modalStyles } from '../ModalStyles';
import { GlobalContext } from '../Context/GlobalState';
import AddCategory from '../Category/AddCategory';

Modal.setAppElement('#root')

const AddPost = () => {
    const { posts, addPost } = useContext(GlobalContext);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    }
    const handleAddPost = e => {
        e.preventDefault();
        const newPost = {
            id: uuidv4(),
            title: title,
            description: description
        }
        addPost(newPost)
        closeModal()
        setTitle('')
        setDescription('')
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }
    return (
        <div>
            <button onClick={openModal}>Add Post</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Add Post"
            >
                <form onSubmit={handleAddPost}>
                    <input type="text" name='title' onChange={handleTitleChange}></input>
                    <input type="text-area" name='description' onChange={handleDescriptionChange}></input>
                    <button type="submit">Add Post</button>
                </form>
                <AddCategory></AddCategory>
            </Modal>
        </div>
    );
};

export default AddPost;