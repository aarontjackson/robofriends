import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';



class App extends React.Component {
    constructor() {
        super()
        this.state = {
                robots: robots,
                searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users').then(response => {
            response.json();
        })
        this.setState({robots: robots})
        console.log('check');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }

}

export default App;