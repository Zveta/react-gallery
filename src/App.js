import React, {Component} from 'react';
import Gallery from './containers/Gallery/Gallery';
import Layout from './containers/Layout/Layout';

class App extends Component {
    render() {
        return (
            <Layout>
                <Gallery/>
            </Layout>
        );
    }
}

export default App;
