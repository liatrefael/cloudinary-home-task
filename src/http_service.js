const searchMovies = async (title, year) => {
    try {
        let url =  (`http://www.omdbapi.com/?t=${title}&apikey=157f34ed`).replace(/ /g, '+');
        if (year > 0){
            url += `&y=${year}`
        }
        const response = await fetch(
             url,
            {
                method: 'get',
                headers: {
                }
            }
        );
        if (!response.ok) {
            return Promise.reject('problem getting movie');
        } else {
            return await response.json();
        }
    } catch (err) {
        return Promise.reject('problem getting movie');
    }
};

export default {searchMovies}