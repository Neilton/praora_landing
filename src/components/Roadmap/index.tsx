import { useTranslation } from 'react-i18next';
import "../../assets/shared/styles/style.css";
import "../../assets/shared/styles/responsive.css";

function Roadmap() {
    const [t] = useTranslation();

    return <section id="roadmap">
        <div className="roadmap-wrp pl-55 main-width mt-5">
            <div className="content-width">
                <div className="rdmp-heading">
                    <h4>Roadmap</h4>
                </div>
                <div className="pl-40">
                    <div className="roadmap-tp-cont">
                        <h6>What’s roadmap?</h6>
                        <p>
                            A roadmap is a strategic plan that defines a goal or desired outcome and includes the major
                            steps or milestones needed to reach it.
                        </p>
                        <h6>Our roadmap</h6>
                    </div>
                    <ul className="roadmp-list-wrp">
                        <li>
                            <div className="roadmp-lst-cont road-lst-lft">
                                <div>
                                    <div className="road-icn-it active">
                                        <img src="assets/img/icon/Search.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="road-itm-cont">
                                    <h6>2021 - 1st Semester</h6>
                                    <span>Research</span>
                                </div>
                            </div>
                            <div className="roadmp-lst-cont road-lst-rit">
                                <p>
                                    Market studies and adaptations of the model for contracting service providers to
                                    smart contracts.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="roadmp-lst-cont road-lst-lft">
                                <div>
                                    <div className="road-icn-it active">
                                        <img src="assets/img/icon/mdi_hand-coin.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="road-itm-cont">
                                    <h6>2021 - 1st Semester</h6>
                                    <span>Investments and hires</span>
                                </div>
                            </div>
                            <div className="roadmp-lst-cont road-lst-rit">
                                <p>
                                    Through personal private investment, materials and team were hired for studies and
                                    development of user experience, as well as the development of the Praora MVP.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="roadmp-lst-cont road-lst-lft">
                                <div>
                                    <div className="road-icn-it active">
                                        <img src="assets/img/icon/akar-icons_check.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="road-itm-cont">
                                    <h6>2021 - 2nd Semester</h6>
                                    <span>Validation</span>
                                </div>
                            </div>
                            <div className="roadmp-lst-cont road-lst-rit">
                                <p>
                                    First user experience tests, market research, beta user feedback were carried out.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="roadmp-lst-cont road-lst-lft">
                                <div>
                                    <div className="road-icn-it">
                                        <img src="assets/img/icon/bx_bxs-rocket.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="road-itm-cont">
                                    <h6>2022 - Jun</h6>
                                    <span>MVP Launch</span>
                                </div>
                            </div>
                            <div className="roadmp-lst-cont road-lst-rit">
                                <p>
                                    Will be the launch of Praora MVP with multi-chain trades, login with MetaMask or
                                    Wallet Connect.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="roadmp-lst-cont road-lst-lft">
                                <div>
                                    <div className="road-icn-it">
                                        <img src="assets/img/icon/bx_bxs-rocket.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="road-itm-cont">
                                    <h6>2022 - May</h6>
                                    <span>New feature</span>
                                </div>
                            </div>
                            <div className="roadmp-lst-cont road-lst-rit">
                                <p>
                                    Praora Wallet will be launched, with Login authentication via QR CODE, as well as
                                    encrypted live chat integrated into the system.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="roadmp-lst-cont road-lst-lft pb-0">
                                <div>
                                    <div className="road-icn-it">
                                        <img src="assets/img/icon/bx_bxs-rocket.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="road-itm-cont">
                                    <h6>2022 - November</h6>
                                    <span>Mobile Launch</span>
                                </div>
                            </div>
                            <div className="roadmp-lst-cont road-lst-rit pb-0">
                                <p>
                                    Will be the launch of the mobile platform to integrate the live and meetings service
                                    to the system.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
}

export default Roadmap;
