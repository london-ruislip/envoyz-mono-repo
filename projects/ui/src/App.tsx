import React, { Component } from 'react';
import { Route, RouteComponentProps } from 'react-router';

const dashboard = () => <div>Dashboard</div>;
const maps = () => <div>Select a map</div>;

export default class App extends Component {
    public render() {
        return (
            <>
                <Route path="/" exact component={dashboard} />
                <Route path="/maps" exact component={maps} />
            </>
        );
    }
}
