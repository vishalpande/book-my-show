const { connection } = require("../connector");

class BookMovieController {
    static async getFunction(request,responce){
        await connection.findOne().sort({ field: 'asc', _id: -1 }).limit(1).exec((err, bookMovie)=>{
            if(err){
                responce.status(500).json({error: err})
            }else {
                if (bookMovie===null){
                    responce.status(200).json({"message": "no previous booking found"})
                }else{
                    responce.status(200).json(bookMovie)
                }
                
            }
        }) 
    }

    static async postFuntion(request,responce) {
        const data = request.body
        const bookMovie = new connection(data)
        await bookMovie.save((err)=>{
            if (err){
                responce.status(500).json({error: err})
            }
            else{
                responce.status(200).json({message: "successful added"})
            }
        });
    }

}

module.exports = BookMovieController
