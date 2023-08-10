const isNullInJson = (jsonObject)=>{

    for (let key in jsonObject) {
        if (jsonObject.hasOwnProperty(key)) {
          if (jsonObject[key] === null) {
            return true
          }else {
            if(typeof jsonObject[key] == 'object'){
                const  jsonObject1 = jsonObject[key]
                for(let key1 in jsonObject1){
                    if (jsonObject1[key1] === null) {
                        return true
                    }
                }
            }
          }
        }
    }

    return false
}


const isValidKeys = (jsonObject)=>{
    const validKey = 'movie,seats,slot';
    const validSeatsKey = 'A1,A2,A3,A4,D1,D2';
    const key  = Object.keys(jsonObject).sort().toString();
    if(validKey === key){
        const seatsKey = Object.keys(jsonObject['seats']).sort().toString()
        if(validSeatsKey === seatsKey){
            return true
        }
        else{
            return false
        }
    }else {
        return false;
    }

}

const isAllSeatsZero = (jsonObject) =>{

    const seats = jsonObject.seats
    const seatsKeys =  Object.keys(jsonObject.seats)
    let countZeroSeats = 0
    for(let i = 0;i<seatsKeys.length;i++){
        if(seats[seatsKeys[i]]=== 0){
            countZeroSeats++;
        }
    }

    if(countZeroSeats === seatsKeys.length){
        return true;
    }else {
        return false;
    }

    

}




const bookMovieMiddleWare = (request,responce,next)=>{
    const requestBookMovieData = request.body
    const validKey = isValidKeys(requestBookMovieData);
    const nullJson = isNullInJson(requestBookMovieData)
    const allSeatsZero = isAllSeatsZero(requestBookMovieData)
    console.log(requestBookMovieData)

    if(validKey && (!nullJson)){
        if(! allSeatsZero){
            next()
        }else {
            responce.status(402).json({
                error: {
                    message: `All Seats are Zero`
                }
            });
        }
        
    }else{
        console.log(`invalid json : -  ${validKey? "null in json":"Not valid key of json"}`)
        responce.status(402).json({
            error: {
                message: "Enter all the details"
            }
        });
    }

}


module.exports = bookMovieMiddleWare