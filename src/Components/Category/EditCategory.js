import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';


const EditCategory = ({ category }) => {
    const ID = category.id
    const { editCategory } = useContext(GlobalContext);

    const [editTitle, setEditTitle] = useState(category.text)
    const handleEditTitle = e => { setEditTitle(e.target.value) }


    const handleEditCategory = e => {
        e.preventDefault();
        const updatedCategory = {
            id: ID,
            value: editTitle,
            text: editTitle
        }
        editCategory(updatedCategory);
        closeModal()
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }

    return (
        <div>
            <Modal
                onClose={closeModal}
                onOpen={openModal}
                open={modalIsOpen}
                trigger={<Button icon primary><Icon name='edit' /></Button>}
            >
                <Modal.Header>Update Category</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleEditCategory}>
                        <Form.Input required fluid type="text" name='title' onChange={handleEditTitle} value={editTitle} placeholder=' Category Name'></Form.Input>
                        <Button primary type="submit">Update Category</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </div>
    );
};

export default EditCategory;