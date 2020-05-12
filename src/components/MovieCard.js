import React from 'react';
import {Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { CardStyle, ImageStyle } from './movie-card.styles';
import {connect} from "react-redux";


const MovieCard = props => {

    const {movie, found} = props;

    if (!movie) {
        return ' ';
    }
    return (

        <div>
            <Card style={CardStyle} variant="outlined">
                {found &&
                <CardMedia
                    style={ImageStyle}
                    image={movie.image}/>
                }
                {found ? <CardContent>
                        <Typography variant="h5" gutterBottom>{movie.title} ({movie.year})</Typography>
                        <Typography paragraph>{movie.duration} | {movie.genre}</Typography>
                        <Typography paragraph>{movie.plot}</Typography>
                        <Typography align="left" paragraph>Director: {movie.director} |
                            Stars: {movie.stars}</Typography>
                    </CardContent> :
                    <CardContent>
                        <Typography variant="h5" gutterBottom>No movie Found</Typography>
                    </CardContent>}

            </Card>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        movie: state.movie,
        found: state.found
    };
}

export default connect(
    mapStateToProps
)(MovieCard);
