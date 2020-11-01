import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../Context/GlobalState';
import { Button, Form, Modal } from 'semantic-ui-react';
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import AddCategory from '../Category/AddCategory';

const AddPost = () => {

    const { addPost, categories } = useContext(GlobalContext);

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
            description: description,
            category: selectedCategory
        }
        addPost(newPost)
        setTitle('')
        setDescription('')
        setSelectedCategory([])
        closeModal()

    }

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() { setIsOpen(true); }
    function closeModal() { setIsOpen(false); }


    const [selectedCategory, setSelectedCategory] = useState([]);
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);

    };

    return (
        <div>
            <Modal
                onClose={closeModal}
                onOpen={openModal}
                open={modalIsOpen}
                trigger={<Button primary>Add New Post</Button>}
            >

                <Modal.Header>Add a New Post</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleAddPost}>
                        <Form.Input required fluid type="text" name='title' onChange={handleTitleChange} placeholder=' Post Title' />

                        <Form.TextArea required name='description' onChange={handleDescriptionChange} placeholder='Post Description' />

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
                        <Button type="submit" primary>Submit</Button>
                    </Form>
                </Modal.Content>


            </Modal>
        </div>
    );
};

export default AddPost;