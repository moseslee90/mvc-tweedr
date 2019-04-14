/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let getAll = (callback) => {
  
      let query = 'SELECT users.username, tweets.tweet, tweets.date FROM tweets INNER JOIN users ON (users.id = tweets.user_id)';
  
      dbPoolInstance.query(query, (error, queryResult) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
  
          }else{
            callback(null, null);
  
          }
        }
      });
    };
  
    return {
      getAll,
    };
  };
  