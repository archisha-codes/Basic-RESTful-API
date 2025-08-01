const express = require('express');
const users =  require('./MOCK_DATA.json')
const app = express();
const port = 8000;

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

app.get("/api/users/:id", (req, res) => {  
    const id = Number(req.params.id);                                                                /*JSON*/
    const user = users.find((user) => user.id === Number(id) );
    return res.json(user);
});

app.post("/api/users", (req, res) => {  
    //TODO: Create a new user
    return res.json({ status : pending });
});

app.patch("/api/users/:id", (req, res) => {  
    //TODO: Edit the  user with id
    return res.json({ status : pending });
});

app.delete("/api/users/:id", (req, res) => {  
    //TODO: delete the  user with id
    return res.json({ status : pending });
});


//or I CAN DO GROUPING LIKE THIS(grouping is done so that if someday i wanted to change the name of my route then i will have to change it at one place only)
app.route("/api/users/:id")
    .get((req, res) => {  
        const id = Number(req.params.id);                                                                
        const user = users.find((user) => user.id === Number(id) );
        return res.json(user);
    })
    .patch((req, res) => {  
        //TODO: Edit the  user with id
        return res.json({ status : pending });
    })
    .delete((req, res) => {  
        //TODO: delete the  user with id
        return res.json({ status : pending });
    });



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});