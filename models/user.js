import { sequelize, DataTypes } from "../database.js"


const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {})

// sync and seed table with default user data
User.sync({alter: true}).then((data) => {
    return User.bulkCreate([
        {
            username: "Sally",
            password: "secret",
            ownerId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            username: "James",
            password: "secret",
            ownerId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            username: "Anthony",
            password: "secret",
            ownerId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          }
    ])
}).catch((err) => {
    console.error("Error syncing user models")
})

export default User;


