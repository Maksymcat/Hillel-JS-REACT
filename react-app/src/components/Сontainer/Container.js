import React from 'react'
import Cute from '../Cute/Cute'
import Love from '../Love/Love'
import Star from '../Star/Star'
import Cool from '../Cool/Cool'
import Smile from '../Smile/Smile'
import { max } from 'lodash'

class Container extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        cuteLikes: parseInt(localStorage.getItem('cuteLikes')) || 0,
        loveLikes: parseInt(localStorage.getItem('loveLikes')) || 0,
        starLikes: parseInt(localStorage.getItem('starLikes')) || 0,
        coolLikes: parseInt(localStorage.getItem('coolLikes')) || 0,
        smileLikes: parseInt(localStorage.getItem('smileLikes')) || 0,
        winner:'',
        maxLikes:''
    }
}
    updatecuteLikes =  (updateLike) => {
        this.setState({cuteLikes: updateLike})
        localStorage.setItem('cuteLikes', JSON.stringify(updateLike))
    }
    updateloveLikes =  (updateLike) => {
        this.setState({loveLikes: updateLike})
        localStorage.setItem('loveLikes', JSON.stringify(updateLike))
    }
    updatestarLikes =  (updateLike) => {
        this.setState({starLikes: updateLike})
        localStorage.setItem('starLikes', JSON.stringify(updateLike))
    }
    updatecoolLikes =  (updateLike) => {
        this.setState({coolLikes: updateLike})
        localStorage.setItem('coolLikes', this.state.coolLikes)
    }
    updatesmileLikes =  (updateLike) => {
        this.setState({smileLikes: updateLike})
        localStorage.setItem('smileLikes', updateLike)
    }
   
    findMaxLikes = () => {
       const  maxLikes = Math.max(this.state.cuteLikes, this.state.loveLikes, this.state.starLikes, this.state.coolLikes, this.state.smileLikes)
       let winner = '';
       if(maxLikes === this.state.cuteLikes){
        winner = 'Cute';
       }else
       if(maxLikes === this.state.loveLikes){
        winner = 'Love';
       }else
       if(maxLikes === this.state.starLikes){
        winner = 'Star';
       }else
       if(maxLikes === this.state.coolLikes){
        winner = 'Cool';
       }else
       if(maxLikes === this.state.smileLikes){
        winner = 'Smile';
        
       }
     this.setState({maxLikes})
       this.setState({winner})
      
       
    }
    
    render() {
        
 
        const emojiMap = {
            Cute: '😊',
            Love: '❤️',
            Star: '⭐',
            Cool: '😎',
            Smile: '😄',
        }
        return(
            <>
            <div style={{display: 'flex'}}>
            <Cute likes={this.state.cuteLikes}
            updatecuteLikes={this.updatecuteLikes}/>
            <Love likes={this.state.loveLikes}
            updateloveLikes={this.updateloveLikes}/>
            <Star likes={this.state.starLikes}
            updatestarLikes={this.updatestarLikes}/>
            <Cool likes={this.state.coolLikes}
            updatecoolLikes={this.updatecoolLikes}/>
            <Smile likes={this.state.smileLikes}
            updatesmileLikes={this.updatesmileLikes}/>
            <button style={{width: 100, height: 30}} onClick={this.findMaxLikes}>Show result</button>
            {this.state.winner &&   (
                <div>
                    <h2> viigrav {emojiMap[this.state.winner]} з результатом {this.state.maxLikes}</h2>
                </div>
            )}
            </div>
            </>
            
        )
    }
  
}



export default Container;