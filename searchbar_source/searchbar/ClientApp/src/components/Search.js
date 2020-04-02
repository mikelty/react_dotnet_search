// JavaScript source code
import React from 'react';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            data: null,
            loaded: false,
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    

    async componentDidMount() {
        await fetch('api/getAll')
            .then(response => response.json())
            .then(data => this.setState({ records: data, loaded: true }));

        this.refs.search.focus();
    }

    handleChange() {
        var loading = this.state.loading;
        this.setState({
            searchString: this.refs.search.value
        });
        if (!loading) {
            this.setState({ loading: true });
        }
        //Faking API call here
        setTimeout(() => {
            this.setState({ loading: false });
            this.refs.search.focus();
        }, 2000);
    }

    render() {
        var { searchString, records, loaded, loading } = this.state;
        if (!loaded) {
            return <div>Loading App...</div>;
        } else {
            let search = this.state.searchString.trim().toLowerCase();

            if (search.length > 0) {
                records = records.filter(function (record) {
                    var name = record.first_name.toLowerCase() + record.last_name.toLowerCase();
                    return name.match(search);
                });
            }

            return (
                <div>
                    <h3>Search by first and last name</h3>
                    <div>
                        <input
                            type="text"
                            value={this.state.searchString}
                            ref="search"
                            onChange={this.handleChange}
                            placeholder="type name here"
                        />
                    </div>
                    {loading ? (
                        <div class="spinner" role="status" />
                    ) : (
                            <div>
                                <div class="card-columns">
                                    {records.map(l => {
                                        return (
                                            <div class="card bg-light">
                                                <div class="card-body text-center">
                                                    <p> {l.first_name} {l.last_name} </p>
                                                    <p> {l.email} </p>
                                                    <p> {l.city} {l.state} {l.zip} </p>
                                                    <p> {l.phone} </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                </div>
            );
        }
        
    }
}