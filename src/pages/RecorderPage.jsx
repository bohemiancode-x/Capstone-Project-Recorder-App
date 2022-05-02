import { ReactMediaRecorder } from "react-media-recorder";
import { useNavigate } from "react-router-dom";
import pauseicon from './pauseicon.svg';
import resumeicon from './resumeicon.svg';

const RecorderPage = () => {
    const navigate = useNavigate

    return (
        <div className="recorderpage">
        <ReactMediaRecorder
          screen
          render={({ status, startRecording, stopRecording, pauseRecording, resumeRecording, mediaBlobUrl, clearBlobUrl }) => (
            <div className="record-main">
              <video className="video-output" src={mediaBlobUrl} controls autoPlay loop />
              
              <div className="buttons">
              <button className="start-record" onClick={startRecording}>Start Recording</button>
              <button onClick={pauseRecording} className="pauserecord"><img src={pauseicon} alt="" /></button>
              <button onClick={resumeRecording} className="resumerecord"><img src={resumeicon} alt="" /></button>
              
              <button className="stop-record" onClick={stopRecording}>Stop Recording</button>
              <button className="resetrecord" onClick={clearBlobUrl}>Reset</button>
              </div>
              <div className="status">
                  <p>Screen Recorder Status: </p>
                  <button disabled>{status}</button>
                </div>
            </div>
          )}
        />
      </div>
    );
}
 
export default RecorderPage;