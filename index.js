const express = require('express');
const fs = require('fs');                            //to write in files
const users =  require('./MOCK_DATA.json')
const app = express();
const port = 8000;

//APPLY MIDDLEWARES
app.use(express.urlencoded({ extended : false}));  

app.get("/users", (req, res) => {                                                             /*HTML*/
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

//Routes

app.get("/api/users", (req, res) => {                                                          /*JSON*/
    return res.json(users);
});

/*app.get("/api/users/:id", (req, res) => {  
    const id = Number(req.params.id);                                                                
    const user = users.find((user) => user.id === Number(id) );
    if(!user){
        return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
});*/

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1 });
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users) ,(err , data) => {
        return res.status(201).json({ status : "success",id: users.length });
    });
    
});

/*app.patch("/api/users/:id", (req, res) => {  
    //TODO: Edit the  user with id
    return res.json({ status : pending });
});

app.delete("/api/users/:id", (req, res) => {  
    //TODO: delete the  user with id
    return res.json({ status : pending });
});*/


//or I CAN DO GROUPING LIKE THIS(grouping is done so that if someday i wanted to change the name of my route then i will have to change it at one place only)
app.route("/api/users/:id")
    .get((req, res) => {  
        const id = Number(req.params.id);                                                                
        const user = users.find((user) => user.id === Number(id) );
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    })
    .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    // Find the user
    const user = users.find((u) => u.id === id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    // Update user details
    Object.assign(user, body);
    // Save to file
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 2));
    res.json({ message: "User updated", user });
})
.delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    // Remove user from array
    users.splice(userIndex, 1);

    // Save updated array to file
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users, null, 2));

    return res.json({ message: "User deleted successfully" });
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});