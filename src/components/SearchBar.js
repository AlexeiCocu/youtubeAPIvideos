import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video_search">
                            Search Videos
                        </label>
                        <input
                            id='video_search'
                            type="text"
                            value={this.state.term}
                            onChange={event => {this.setState({term: event.target.value})}}
                        />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar;