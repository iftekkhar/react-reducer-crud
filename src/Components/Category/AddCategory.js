import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import { modalStyles } from '../ModalStyles';
import { GlobalContext } from '../Context/GlobalState';
Modal.setAppElement('#root')

const AddCategory = () => {
    const { addCategory } = useContext(GlobalContext);
    const [title, setTitle] = useState('')

    const handleTitleChange = e => {
        setTitle(e.target.value)
    }
    const handleAddCategory = e => {
        e.preventDefault();
        const newCategory = {
            id: uuidv4(),
            value: title,
            label: title
        }
        addCategory(newCategory)
        closeModal()
        setTitle('')
    }

    //Modal
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }
    return (
        <div>
            <button onClick={openModal}>Add New Category</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Add Category"
            >
                <form onSubmit={handleAddCategory}>
                    <input type="text" name='title' onChange={handleTitleChange}></input>
                    <button type="submit">Add Category</button>
                </form>
            </Modal>
        </div>
    );
};

export default AddCategory;