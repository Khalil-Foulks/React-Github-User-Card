import React from "react"
import FollowerCard from "./FollowerCard"

class UserCard extends React.Component {
    render(){
        return(
            <div className='cards'>
                <div className="card userCard">
                    <img src={`${this.props.githubData.avatar_url}`}></img>
                    <h2 className='name'>
                        {this.props.githubData.name}
                        <p>Username: {this.props.githubData.login}</p>
                        <p>Location: {this.props.githubData.location}</p>
                        <p>Profile:
                            <a href={this.props.githubData.html_url} target='blank'>Profile Link</a>
                        </p>
                        <p>Followers:{this.props.githubData.followers} </p>
                        <p>Following:{this.props.githubData.following} </p>
                    </h2>
                </div>
                <FollowerCard/>
            </div> 
        )
    }
}

export default UserCard;