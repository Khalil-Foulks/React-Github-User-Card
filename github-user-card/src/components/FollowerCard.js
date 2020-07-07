import React from 'react'
import axios from 'axios'
import Card from './card'

class FollowerCard extends React.Component {
    constructor(){
        super();
        this.state ={
            githubFollowerData:[]
        }
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/khalil-foulks/followers")
        .then(res => {
            this.setState({
                githubFollowerData:res.data
            })
        })
      }

    render(){
        return(
            <div>
                {
                    this.state.githubFollowerData.map(follower => (
                        <div>
                            <Card follower={follower}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default FollowerCard