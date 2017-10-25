import store from './store'

export const play = () =>
{
    let newSongs = [...store.getState().songs];
    let nowPlayingIndex = store.getState().nowPlayingIndex;
    console.log("entra play");
    newSongs[nowPlayingIndex].isPlaying = true;
    console.log("songs", newSongs);    
    store.setState({
        songs: newSongs
    })
}

export const stop = () =>
{
    let newSongs = [...store.getState().songs];
    let newNowPlayingIndex = store.getState().nowPlayingIndex;
    newSongs[newNowPlayingIndex].isPlaying = false;
    console.log("songs", newSongs);    
    store.setState({
        songs: newSongs
     })
}

export const next = () => 
{
    let newSongs = store.getState().songs;
    let newNowPlayingIndex = store.getState().nowPlayingIndex + 1;
    stop();
    if(newNowPlayingIndex === newSongs.length) 
    {
        newNowPlayingIndex = 0;
    }
    store.setState({
        nowPlayingIndex: newNowPlayingIndex,
    })
    console.log("idex", newNowPlayingIndex);            
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