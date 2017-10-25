import store from './store'

export const play = () =>
{
    let newSongs = store.getState().songs;
    let nowPlayingIndex = store.getState().nowPlayingIndex;
    console.log("entra play");
    newSongs[nowPlayingIndex].isPlaying = true;
    console.log("songs", newSongs);    
    store.setState({
        songs: newSongs,
     })
}
/*
export const stop = () =>
{
    let songs = store.getState().songs;
    let nowPlayingIndex = store.getState().nowPlayingIndex;
    var currentSong = this.songs[this.nowPlayingIndex];
    currentSong.stop();
}
*/
export const next = () => 
{
    let songs = store.getState().songs;
    let newNowPlayingIndex = store.getState().nowPlayingIndex + 1;
    //this.stop();
    store.setState({
        nowPlayingIndex: newNowPlayingIndex,
    })
    if(newNowPlayingIndex === songs.length) 
    {
        store.setState({
            nowPlayingIndex: 0,
        })
    }
    play();
}
/*
export const renderInElement = (list) => 
{
    list.innerHTML = "";
    for(var i = 0; i < this.songs.length; i++) {
      list.innerHTML += this.songs[i].toHTML();
    }
}*/