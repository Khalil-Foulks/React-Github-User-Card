import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card userCard">
                <img src={`${this.props.follower.avatar_url}`}></img>
                <h2 className='name'>
                    {this.props.follower.name}
                    <p>Username: {this.props.follower.login}</p>
                    <p>Location: {this.props.follower.location}</p>
                    <p>Profile:
                        <a href={this.props.follower.html_url} target='blank'>Profile Link</a>
                    </p>
                    <p>Followers:{this.props.follower.followers} </p>
                    <p>Following:{this.props.follower.following} </p>
                </h2>
            </div>
        )
    }
}

export default Card