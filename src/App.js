import React from "react";
import './App.css';
import {CardList} from "./Components/card-list/card-list.component";
import {SearchBox} from "./Components/search-box/search-box.component";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            monsters : [],
            searchField : ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then( users => this.setState({ monsters : users }))
    }

    search() {
        return this.state.monsters.filter(monster =>
            monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        )
    }

    render() {

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    for='search monster'
                    handleChange={e => this.setState({searchField : e.target.value})}
                />
                <CardList monsters={this.search()} />
            </div>
        );
    }

}
