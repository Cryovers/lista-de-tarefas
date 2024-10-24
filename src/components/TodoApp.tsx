"use client";
import React, { useState } from 'react';

interface Tarefa {
    id: number,
    descricao: string
    concluida: boolean;
}

const TodoApp: React.FC = () => {
    const [listaTarefas, setListaTarefas] = useState<Tarefa[]>([]);
    const [inputDescricao, setInputDescricao] = useState<string>('');

    const adicionaTarefa = (descricao: string) => {
        const newTarefa: Tarefa = {
            id: listaTarefas.length + 1,
            descricao: descricao,
            concluida: false
        }

        setListaTarefas(tarefas => [...tarefas, newTarefa]);
        alert(`Tarefa: ${newTarefa.descricao} adicionada!`);
    }

    const removeTarefa = (id: number) => {
        setListaTarefas(tarefas => tarefas.filter(tarefa => tarefa.id !== id));
        alert(`Tarefa Removida!`);
    }

    /* const atualizaTarefa = (id: number, novaDescricao: string) => {
        const updatedTarefa: Tarefa = listaTarefas.map(tarefa => {
            if(tarefa.id === id) {
                tarefa.descricao = novaDescricao;
                return tarefa;
            }
        });

        setListaTarefas(tarefas => [...tarefas, updatedTarefa])
    } */

    const completaTarefa = (id: number) => {
        setListaTarefas(tarefas => tarefas.filter(tarefa => tarefa.id !== id));
        alert("Tarefa Completada!");
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputDescricao.trim()) {
            adicionaTarefa(inputDescricao);
        } else {
            alert("Campo descrição em branco, favor preencher o campo!");
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label>Descreva a Tarefa:</label>
                    <input
                        placeholder='Tarefa'
                        value={inputDescricao}
                        onChange={(e) => setInputDescricao(e.target.value)}
                        className="text-black border border-gray-300 rounded p-2"
                    ></input>
                    <button type='submit' className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Adicionar Tarefa</button>
                </div>
            </form>

            <ul>
                {listaTarefas.map((tarefa) => (
                    <li key={tarefa.id} className="flex flex-row gap-4">
                        {tarefa.descricao}
                        <div className="flex flex-row gap-1">
                            <button onClick={() => completaTarefa(tarefa.id)} className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Completar Tarefa</button>
                            <button onClick={() => removeTarefa(tarefa.id)} className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Deletar Tarefa</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;