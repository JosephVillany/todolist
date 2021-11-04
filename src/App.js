import React, { useState, useEffect } from "react";

//Components
import Header from "./components/Header";
import Todo from "./components/Todo";
import Loader from "./components/Loader";

//Styles
import "./styles/App.css";

const App = () => {


  //STATE
  const [todoList, setTodoList] = useState([]);
  const [filtro, setFiltro] = useState (null);

  //EFFECT

  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      // setTimeout(() => {
      setTodoList(resultTodoList);
      setFiltro(resultTodoList)
      // }, 2000);
    };
    handleTodoList();
  }, []);

  //FUNCIONES
  const handleCompleteTodo = (id, status) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setFiltro( filtro.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleFilter = (estado)=>{

    if(estado==="all"){
      setFiltro(todoList);
    
    }else if (estado === "complete"){
      setFiltro(todoList.filter((z)=>z.completed===true) )
    }else if (estado==="incompleta"){
      setFiltro(todoList.filter((z)=> z.completed===false))
    }
  
  }


  return (
    <div className="App">
      <Header 
      handleFilter={handleFilter}
      />

      <div className="todo-container">
        {filtro && filtro.length > 0 ?  (
          filtro.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompleteTodo}
              id={singleTodo.id}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
