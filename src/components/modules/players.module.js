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
                name: "David",
                surname: "Jungman",
                age: "17",
                type: "Brankář"
            },
            {
                id: 1,
                name: "Vladimir",
                surname: "Hladky",
                age: "18",
                type: "Kuřák pér"
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
