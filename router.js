import {user, members, saveStudent, update, removeUser, removeAllUser} from './controller.js';

const router = (app) => {   
    app.get('/user', user);
    app.get('/members', members);
    app.post('/save-student', saveStudent);
    app.post('/update', update);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUser);
}