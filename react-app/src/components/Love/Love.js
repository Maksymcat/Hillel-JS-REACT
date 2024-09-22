import React from 'react';

const  Love = ({updateLikes,likes}) => {
  
    


    
            return (<>
            <div>{likes}</div>
            <div style={{height: 20,background: 'red'}} onClick={() => updateLikes(likes + 1)}>❤️</div>
            </>)
          }
        

export default Love;