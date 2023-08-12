// const mysql = require('mysql');


// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'MoviesDB'
//   });

//   //const _pool = new sql.ConnectionPool(sqlConfig);

//   pool.getConnection(function (err) {
//     if(err){
//         console.log("error occurred while connecting");
//     }
//     else{
//         console.log("connection created with Mysql successfully");
//     }
//   });
const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();

  module.exports = class MoviesDao {
    // static addmovies(movieObj) {
    //    console.log( 
    //     movieObj.title,
    //     movieObj.type,
    //     movieObj.release_date,
    //     movieObj.director,
    //     movieObj.budget,
    //     movieObj.story_line,
    //     movieObj.cast,
    //     movieObj.trailer_link);
        
    //     const statement = `INSERT INTO movie_master (title, type, release_date, director,budget,story_line,cast_name,trailer_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    //     const values = [movieObj.title,
    //         movieObj.type,
    //         movieObj.release_date,
    //         movieObj.director,
    //         movieObj.budget,
    //         movieObj.story_line,
    //         movieObj.cast,
    //         movieObj.trailer_link];
    //     return new Promise((resolve, reject) => {
    //         pool.query(statement, values, (error, results) => {
    //             if (error) {
    //                 reject(error);
    //             } else {
    //                 resolve(results);
    //             }
    //         });
    //     });
    // }



    static async main(movieObj, arr) {
       return await prisma.movie_master.create({
          data: {
            title : movieObj.title,
            type: movieObj.type,
            release_date: movieObj.release_date,
            director: movieObj.director,
            budget: movieObj.budget,
            story_line: movieObj.story_line,
            cast_name: movieObj.cast,
            trailer_link :movieObj.trailer_link,
            movie_poster: movieObj.movie_poster,
            // posts: {
            //   create: { title: 'Hello World' },
            // },
            // profile: {
            //   create: { bio: 'I like turtles' },
            // },
          },
        });
     
      // console.log("IDDDDDDDDD:>>>>>>",idd.id);

      


      // return idd;
        

        // const post = await prisma.movie_master.update({
        //     where: { id: 1 },
        //     data: { title: "Sameer" },
        //   })
        //   console.log("UPDATE RES::::::::::>",post)
      }

      static async cast_det(arr, u_id) {
        for(var i=0; i<arr.length;i++) {
          await prisma.cast_details.create({
            data: { 
              ref_id: u_id,
              cast_name: arr[i].cast_name,
              role_name: arr[i].role_name, 
              profile_img:  arr[i].profile,
            },
          });
        }
        
      }

      static async allMovie() {
      const allUsers = await prisma.movie_master.findMany({
        //   include: {
        //     posts: true,
        //     profile: true,
        //   },
        })
        console.dir(allUsers, { depth: null });
        return allUsers;
      }

      static async singleMovie(id) {
      const movie = await prisma.movie_master.findUnique({
        where: {
          id: parseInt(id),
          
        },
      })
      return movie;
    }

    static async movieCast(u_idid) {
      console.log("id:::::::>",u_idid);
      const cast = await prisma.cast_details.findMany({
        where: {
          ref_id: 134,
          
        },
      })
      console.log("CAST::::::::>",cast);
      return cast;
    }
     
}