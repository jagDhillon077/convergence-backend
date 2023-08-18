import { Sequelize } from "sequelize";

// Setup the Sequelize instance
export const sequelize = new Sequelize('convergence', "", "", {
    dialect: "postgres",
    define: {
        freezeTableName: true
    }
});

export const { DataTypes } = Sequelize

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync({alter: true})

