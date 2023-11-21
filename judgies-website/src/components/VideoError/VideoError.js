import ErrorImg from '../../media/SomethingWentWrong.jpg'

function VideoError() {
    return(
        <div>
            <img src={ErrorImg} alt='Something went wrong' />
        </div>
    )
}

export default VideoError;