import express from 'express';
export const menuRouter = express.Router();

const menus = [
    {id: 1, name: "Shan Khout Swel", price: 2000, isArchived: false},
    {id: 2, name: "Mote Hinn Kharr", price: 1000, isArchived: false}
]

menuRouter.get('/', (req, res) => {
    res.send(menus);
});

menuRouter.post('/', (req, res) => {
    console.log(req.body);
    res.send("Post request received")
});

menuRouter.delete('/', (req, res) => {
    
});

menuRouter.put('/', (req, res) => {
    
});