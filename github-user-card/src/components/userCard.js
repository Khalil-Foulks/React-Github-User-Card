import React from "react"

class UserCard extends React.Component {
    render(){
        return(
            <div>
                <img src={`${this.props.githubData.avatar_url}`}></img>
                <h2>{this.props.githubData.name}</h2>
                <p>Username: {this.props.githubData.login}</p>
                <p>Location: {this.props.githubData.location}</p>
                <p>Profile:
                    <a href={this.props.githubData.html_url} target='blank'>Profile Link</a>
                </p>
                <p>Followers:{this.props.githubData.followers} </p>
                <p>Following:{this.props.githubData.following} </p>
            </div> 
        )
    }
}

export default UserCard;