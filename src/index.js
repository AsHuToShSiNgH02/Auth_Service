const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');
// const {User, Role} = require('./models/index');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

        // const u1 = await User.findByPk(3)
        // const r1 = await Role.findByPk(2)
        // // u1.addRole(r1);
        // const response = await u1.getRoles();
        // console.log(response);

        // const service = new UserService();
        // const newToken = service.createToken({email: 'sanket@admin.com', id: 1});
        // console.log("new token is", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzE1ODUyODMzLCJleHAiOjE3MTU5MzkyMzN9.aUKJYsVrbye_zy73mEk0Rf3WgyH-cWW6dsWecchpDw8';
        // const response = service.verifyToken(token);

        // console.log(response);
    });
}

prepareAndStartServer();