import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../Context/GlobalState";
import { Button, Form } from "semantic-ui-react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";

const AddCategory = () => {
    const { addCategory } = useContext(GlobalContext);

    const [catTitle, setCatTitle] = useState("");
    const handleCatTitleChange = (e) => setCatTitle(e.target.value);

    const handleAddCategory = (e) => {
        e.preventDefault();

        const newCategory = {
            id: uuidv4(),
            value: catTitle,
            text: catTitle,
        };

        addCategory(newCategory);
        setCatTitle("");
        closeCatModal();
    };

    //Modal
    const [catModalIsOpen, setcatModalIsOpen] = useState(false);
    const openCatModal = () => setcatModalIsOpen(true);
    const closeCatModal = () => setcatModalIsOpen(false);

    return (
        <div>
            <Button onClick={openCatModal}>Create New Category</Button>
            <Dialog open={catModalIsOpen} onClose={closeCatModal} aria-labelledby="form-dialog-cat">
                <DialogTitle id="form-dialog-title">Add a New Category</DialogTitle>
                <DialogContent>
                    <Form>
                        <Form.Input required type="text" name="title" onChange={handleCatTitleChange} placeholder=" Category Name"></Form.Input>
                        <Button onClick={handleAddCategory} primary type="submit">Submit</Button>
                        <Button onClick={closeCatModal} color="red" type="submit">Cancel</Button>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddCategory;
