const mysql = require('mysql');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'MoviesDB'
  });

  //const _pool = new sql.ConnectionPool(sqlConfig);

  pool.getConnection(function (err) {
    if(err){
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");
    }
  });


  module.exports = class MoviesDao {
    static addmovies(movieObj) {
       console.log( 
        movieObj.title,
        movieObj.type,
        movieObj.release_date,
        movieObj.director,
        movieObj.budget,
        movieObj.story_line,
        movieObj.cast,
        movieObj.trailer_link);
        
        const statement = `INSERT INTO movie_master (title, type, release_date, director,budget,story_line,cast_name,trailer_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [movieObj.title,
            movieObj.type,
            movieObj.release_date,
            movieObj.director,
            movieObj.budget,
            movieObj.story_line,
            movieObj.cast,
            movieObj.trailer_link];
        return new Promise((resolve, reject) => {
            pool.query(statement, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}