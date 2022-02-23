
export const endPoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:300/"
// const clientId = "c16ab0ca84d44bf9862a23f1e58f1b07"
const clientId = "cff76213089a4e228206c8bf120d67cb";


const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]



export const accessUrl = `${endPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


export const getTokenFromUrl = () => {
  return window.location.hash.substring(1).split('&').reduce((initial,item) => {
    let part=item.split('=')
    initial[part[0]]=decodeURIComponent(part[1])
    return initial
  },{})
}