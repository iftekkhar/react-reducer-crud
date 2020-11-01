import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import AddCategory from '../Category/AddCategory';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { Select, InputLabel, MenuItem } from '@material-ui/core';

const EditPost = ({ post }) => {
    const ID = post.id
    const { editPost, categories } = useContext(GlobalContext);

    const [editTitle, setEditTitle] = useState(post.title)
    const handleEditTitle = e => { setEditTitle(e.target.value) }
    const [editDescription, setEditDescription] = useState(post.description)
    const handleEditDescription = e => { setEditDescription(e.target.value) }

    const handleEditPost = e => {
        e.preventDefault();
        const updatedPost = {
            id: ID,
            title: editTitle,
            description: editDescription,
            category: selectedCategory
        }
        editPost(updatedPost);
        closeModal()
    }

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }

    const [selectedCategory, setSelectedCategory] = useState(post.category);
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div>
            <Modal
                onClose={closeModal}
                onOpen={openModal}
                open={modalIsOpen}
                trigger={<Button icon primary><Icon name='edit' /> Update Post</Button>}
            >
                <Modal.Header>Edit Post</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleEditPost}>
                        <Form.Input required fluid onChange={handleEditTitle} value={editTitle} placeholder=' Post Title'></Form.Input>
                        <Form.TextArea required onChange={handleEditDescription} value={editDescription} placeholder='Post Description'></Form.TextArea>
                        {/* <Form.Dropdown upward placeholder='Category' fluid multiple selection options={categories} value={selectedCategory}
                            onChange={handleCategoryChange}>
                        </Form.Dropdown> */}
                        <br />
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            variant="outlined"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            multiple
                            autoWidth

                        >

                            <AddCategory ></AddCategory>
                            <hr />
                            {categories.map((name) => (
                                <MenuItem key={name.id} value={name.value}>
                                    {name.text}
                                </MenuItem>
                            ))}
                        </Select>
                        <br />
                        <Button primary type='submit'>Update</Button>

                    </Form>
                </Modal.Content>


            </Modal>
        </div>
    );
};

export default EditPost;