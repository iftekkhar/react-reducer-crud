import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Modal from 'react-modal';
import { modalStyles } from '../ModalStyles';

Modal.setAppElement('#root')

const EditCategory = ({ category }) => {
    const ID = category.id
    const { editCategory } = useContext(GlobalContext);

    const [editTitle, setEditTitle] = useState(category.label)
    const handleEditTitle = e => { setEditTitle(e.target.value) }


    const handleEditCategory = e => {
        e.preventDefault();
        const updatedCategory = {
            id: ID,
            value: ID,
            label: editTitle
        }
        editCategory(updatedCategory);
        closeModal()
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }

    return (
        <div>
            <button onClick={openModal}>Edit Category</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Edit Category"
            >

                <form onSubmit={handleEditCategory}>
                    <input onChange={handleEditTitle} value={editTitle}></input>
                    <button type='submit'>Edit Category</button>

                </form>

            </Modal>
        </div>
    );
};

export default EditCategory;