import React, { useState } from 'react';
import { connect } from 'react-redux';
import {TextField, Button} from '@material-ui/core';
import {ButtonStyle, TextFieldStyle} from './query-area.styles'

import {searchMovies} from "../actions/common_actions";


const QueryArea = props => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);

    const onKeyPressInt = (e) =>{
        if (e.key === 'Enter') {
            props.searchMovies(title, year);
            e.preventDefault();
        }
    };

    return (

        <div >
            <TextField style={TextFieldStyle} required id="title" label="Title" type="search" variant="outlined"
                       onChange={(e) => setTitle(e.target.value)} onKeyPress={onKeyPressInt} />
            <TextField id="release-year" label="Release Year" type="search" variant="outlined" helperText="(Optional)"
                       onChange={(e) => setYear(e.target.value)} onKeyPress={onKeyPressInt}/>
            <Button style={ButtonStyle} variant="contained" color="primary"
                    onClick={() => props.searchMovies(title, year)}>
                Search
            </Button>
            <Button style={ButtonStyle} disabled variant="contained" color="primary">
                Advanced Search (future)
            </Button>
        </div>


    );
};


function mapDispatchToProps(dispatch) {
    return{
        searchMovies: (title, year) => {
            dispatch(searchMovies(title, year));
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(QueryArea);