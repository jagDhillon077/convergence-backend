import { sequelize, DataTypes} from "../database.js"


const TodoItem = sequelize.define('todoItem', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    todoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {})


// sync and seed database with default todo items
TodoItem.sync({alter: true}).then((data) => {
    return TodoItem.bulkCreate([{
        title: "Finish report",
        category: "Work",
        description: "Compile data and complete the annual report.",
        ownerId: 1,
        todoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Clean the garage",
        category: "Home",
        description: "Organize tools and get rid of unused items.",
        ownerId: 2,
        todoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        title: "Morning jog",
        category: "Exercise",
        description: "Run 5k around the neighborhood.",
        ownerId: 3,
        todoId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Team meeting",
        category: "Work",
        description: "Discuss the new project proposal with the team.",
        ownerId: 1,
        todoId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Fix the kitchen sink",
        category: "Home",
        description: "The tap has been leaking for a week.",
        ownerId: 2,
        todoId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Attend yoga class",
        category: "Exercise",
        description: "Evening yoga class at the community center.",
        ownerId: 3,
        todoId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
}).catch((err) => {
    console.error("Error syncing table models")
})

export default TodoItem;