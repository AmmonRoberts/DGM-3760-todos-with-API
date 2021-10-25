# NodeJS API

## Controllers

### todosController
- **GET**: Gets all categories
  - localhost:3000/todos
- **GET**: Get all tasks from category
  - localhost:3000/todos/{categoryName}
- **POST**: Create new todo
  - localhost:3000/todos
    - {name, category}
- **PUT**: Update existing todo
  - localhost:3000/todos/{todoId}
    - {name, category}
- **DELETE**: Delete todo
  - localhost:3000/todos/{todoId}


### categoriesController
- **GET**: Gets all categories
  - localhost:3000/categories
- **POST**: Create new category
  - localhost:3000/categories
    - {name}
- **PUT**: Update existing category
  - localhost:3000/categories/{categoryName}
    - {newName}
- **DELETE**: Delete category (sets categry for each to "Undefined")
  - localhost:3000/categories/{categoryName}
