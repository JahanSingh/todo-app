const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express()

app.use(express.json())
app.post("/todo", function async (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })
    res.json({
        msg: "new todo created"
    })
})
app.get("/todos", function (req, res) {
    
})
app.put("/completed", function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
        return;
    }
)

app.listen(3000);