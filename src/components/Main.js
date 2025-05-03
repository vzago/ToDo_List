import React, { Component } from 'react';
import './Main.css';

//Form
import { FaPlus } from 'react-icons/fa';

//Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do form
    const { tarefas } = this.state;
    let { novaTarefa } = this.state; // Usando let para permitir reatribuição
    novaTarefa = novaTarefa.trim(); // Remove espaços em branco

    if (tarefas.indexOf(novaTarefa) !== -1) {
      alert('Tarefa já existe');
      return;
    }

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
