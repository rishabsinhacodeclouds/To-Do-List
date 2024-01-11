const ToDoModel = require("../models/ToDoModel");

const loadpage = async (req, res) => {
    try {
        res.render('ToDoView');
    }
    catch (err) {
        console.log(err.message);
    }
}

// const loadweather = async (req, res) => {
//     try {
//         res.render('Weather');
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }

const saveToDo = async (req, res) => {
    try {
        const { toDo } = req.body;
        const data = new ToDoModel({
            toDo: toDo
        })
        const savedData = await data.save();
        res.status(201).json(savedData);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: 'Server error' });
    }
}

const getToDo = async (req, res) => {
    try {
        const data = await ToDoModel.find();
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ error: "No data found" })
        }
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message })
    }
}

const updateToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const { toDo, isdeleted } = req.body;
        const data = await ToDoModel.findByIdAndUpdate(id, { toDo, isdeleted }, { new: true });
        if (!data) {
            res.status(404).json({ message: 'Data not found' });
        }
        else {
            res.status(200).json(data);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
    }
}

const deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await ToDoModel.findByIdAndDelete(id);
        if (!data) {
            res.status(404).json({ message: 'Data not found' });
        }
        else {
            res.status(200).json({ message: "Deleted Successfully...." });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    saveToDo,
    getToDo,
    updateToDo,
    deleteToDo,
    loadpage
}