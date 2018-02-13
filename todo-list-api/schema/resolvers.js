const TODOS = [
  {
    id: 1,
    title: 'Teste de TODO',
    completed: false,
  },
  {
    id: 2,
    title: 'Teste de TODO2',
    completed: false,
  }
]


module.exports = {

  Query: {
    todos: (obj, args, context) => {
      return TODOS
    },

    todo: (obj, args, context) => {
      return TODOS[0];
    }
  },

  Todo: {
    id: (obj) => {
      return obj.id;
    },
    title: (obj) => {
      return obj.title;
    },
    completed: (obj) => {
      return obj.completed;
    }
  }
}
