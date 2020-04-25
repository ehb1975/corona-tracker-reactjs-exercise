import React from 'react';
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        console.log(country);
        //TODO
        //https://www.youtube.com/watch?v=khJlrj3Y6Ls - 1h:34
        //https://www.npmjs.com/package/react-csv-reader
        //https://github.com/owid/covid-19-data/blob/master/public/data/ecdc/full_data.csv
    }

    render(){
        const { data } = this.state;
        return(
            <div className={styles.container}> 
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts />
            </div>
        )
    }
}

export default App