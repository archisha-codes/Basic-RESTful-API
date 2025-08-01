# Basic-RESTful-API
1-We required n number of users so using Fake Data API: https://www.mockaroo.com/ to generate fake 1000 users in JSON format for now 2-TASKS REST API - JSON (HYBRID SERVER -Supports browsers as well as mobile apps) GET /users - List all users (HTML) GET /api/users - List all users (JSON) GET /api/users/1 - Get single user with id 1 GET /api/users/2 - Get single user with id 2 //if with /api then throws a JSON data, otherwise an HTML data POST /api/users - Add user/create new user PATCH /api/users/1 - Edit the user with id 1(Partially update user) DELETE /api/users/1 - Delete user with id 1

3-go to browser and type http://localhost:8000/users to get the list of all the users.

4-go to browser and type (http://localhost:8000/api/users/1) to get user 1.

5-Install postman for API testing->create workspace ->run GET req and send.

*for post req*
write HTTP://localhost:8000/api/users-->under Body --> in x-www-form-urlencoded -->we will add new user here 
in key create fields as first_name ,last_name and whatever u want and write values .
APPLY MIDDLEWARES
app.use(express.urlencoded({ extended : false}));  ->whenever some form data will be sent this code will put it into the Body.
<img width="400" height="400" alt="Screenshot 2025-08-02 004345" src="https://github.com/user-attachments/assets/121cf3f3-62ef-4147-8c61-670632e6c6d6" />

POST
<img width="400" height="208" alt="Screenshot 2025-08-02 010655" src="https://github.com/user-attachments/assets/d9ff3f45-3492-4555-a72f-fb40c2426b72" />
<img width="400" height="200" alt="Screenshot 2025-08-02 010423" src="https://github.com/user-attachments/assets/8b0d6337-70d0-4e36-9b18-acfc2e1cc4ed" />

PATCH
<img width="500" height="300" alt="Screenshot 2025-08-02 012346" src="https://github.com/user-attachments/assets/4f547d5e-50cf-4599-a6c0-1230396800aa" />

DELETE
<img width="400" height="200" alt="Screenshot 2025-08-02 013236" src="https://github.com/user-attachments/assets/a4ba37ab-e0b2-4a0d-b71a-ff7e3ac8efad" />
