import { useTranslation } from 'react-i18next';
import "../../assets/shared/styles/style.css";
import "../../assets/shared/styles/responsive.css";
import { isMobile } from "react-device-detect";
import YouTube from 'react-youtube';

function VideoPresentation() {
    const [t] = useTranslation();

    const opts = {
        height: isMobile ? '260' : "500",
        width: isMobile ? '340' : "900",
      };

      const _onReady = (event: { target: { pauseVideo: () => void; }; }) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    return  <section id="VideoPresentation">
    <div className="why-participate-wrp">
      <div className="why-partici-cont">
        <div className="why-parti-heading content-width">
          <h4>{t("VideoPresentation.Why")}</h4>
          <p className="pl-40">{t("VideoPresentation.WatchOurVideo")}</p>
        </div>
        <div className="why-parti-row">
          <div className="why-parti-cont">
            <img src="assets/img/why-participate.png" className="img-fluid" alt="" />
          </div>
          <div className="why-parti-cont-rit d-flex justify-content-center">
              <YouTube opts={opts} videoId="yFGAXqMFg6Q" onReady={_onReady} />
          </div>
        </div>
      </div>
    </div>
    </section>
}

export default VideoPresentation;
