import React, { Component } from 'react'

export default class PlayersList extends Component {

    /**
     * Dotaz do databáze monga, prozatím dummy data
     * @see https://docs.mongodb.com/manual/core/databases-and-collections/ 
    */
    getPlayersList = () => {
        const data = [
            {
                id: 0,
                name: "Filip",
                surname: "Kozák",
                age: "17",
                type: "Slabej hráč Fortnite"
            },
            {
                id: 1,
                name: "Vladimir",
                surname: "Hladky",
                age: "18",
                type: "King of Hředle"
            },
            {
                id: 2,
                name: "Lukáš",
                surname: "Rýgl",
                age: "18",
                type: "Neumí Fortnite :("
            }
        ];
        return data;
    }

    render() {
        const players = this.getPlayersList();
        return (
            <table className="playerList table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Jméno</th>
                        <th>Věk</th>
                        <th>Pozice</th>
                    </tr>
                </thead>
                <tbody>
                {players.map(player => {
                    return (
                        <tr className="player" key={player.id}>
                            <td>{player.name} {player.surname}</td>
                            <td>{player.age} </td>
                            <td>{player.type} </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        )
    }
}
