import React from 'react';
import $ from 'jquery';
import Song from './song.jsx';


const Songs = React.createClass({
    getInitialState(){
        return {
            songs: []
    },
    componentDidMount(){
        $.ajax({
            url: '/api/songs',
            method: 'GET'
        }).done((data)=>{
            this.setState({songs: data})
        })
    },
    render(){
        console.log('songs state:',this.state.songs[0]);
        // let list= this.state.songs.map((songs,indx)=>{ return <Song title={songs.title} url={songs.youtube_url}key={indx}/>});
        return <div>
                <h1>Songs List</h1>
              </div>
    }
});

export default Songs;
