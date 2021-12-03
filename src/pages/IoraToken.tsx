
import CopyContent from "../assets/img/token/icon/copy-content.png"
import Metamask from "../assets/img/token/icon/metamask.png"
import Eclipse from "../assets/img/token/circle/elipses-1.png"
import Image1 from "../assets/img/token/featureImageSong.png"
import Image2 from "../assets/img/token/imagem-2.png"
import Eclipse2 from "../assets/img/token/circle/elipses-2.png"
import LiveTV from "../assets/img/token/icon/live-tv.png"
import Wallet from "../assets/img/token/icon/Wallet.png"
import Union from "../assets/img/token/icon/union.png"
import Mockup1 from "../assets/img/token/mockup-1.png"
import Mockup2 from "../assets/img/token/mockup-2.png"
import Mockup3 from "../assets/img/token/mockup-3.png"
import Mockup4 from "../assets/img/token/mockup-4.png"
import Elipse3 from "../assets/img/token/circle/elipses-3.png"
import Elipse2 from "../assets/img/token/circle/elipses-2.png"
import Phone from "../assets/img/token/telefone.png"
import { useTranslation } from "react-i18next"

function IoraToken() {
    const [t] = useTranslation();

    return <section id="IoraToken">
        <div className="token-page-wrp position-relative">
            <img src={Eclipse} alt="" className="token-bg tkbg1" />
            <div className="iora-container">
                <div className="iora-plat-wrp text-center">
                    <h2>{t("Iora.Part1")}<br /> {t("Iora.Part2")}</h2>
                    <p>{t("Iora.Part3")} <br /> {t("Iora.Part4")}</p>
                    <a href="#" className="iora-btns">{t("BuyIora")}</a>
                    <div className="iora-cont-address iora-top-contact">
                        <h5>{t("ContractAddress")}</h5>
                        <div className="iroa-add-input">
                            <input type="text" defaultValue="0xee4c36aaf349ca458deBbD94dFdd66dC941C6616" />
                            <div className="iora-add-contact">
                                <a href="#"><img src={CopyContent} alt="Copycontent" /></a>
                                <a href="#"><img src={Metamask} alt="Use Metamask" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iora-imagem d-flex justify-content-center">
                <div className="iora-imagem-box left-imagem">
                    <img src={Image1} className="img-fluid" alt="" />
                </div>
                <div className="iora-imagem-box right-imagem">
                    <img src={Image2} className="img-fluid" alt="" />
                </div>
            </div>
            <div className="section-bg-one position-relative">
                <img src={Eclipse2} alt="" className="token-bg tkbg2" />
                <div className="iora-container">
                    <div className="iora-invest-wrp">
                        <h3>{t("SectionInvesting.Part1")} <br /> {t("SectionInvesting.Part2")}</h3>
                        <div className="invest-row">
                            <div className="iora_invest_box text-center">
                                <div>
                                    <div className="iora-invest-icon">
                                        <img src={LiveTV} alt="" className="img-fluid" />
                                    </div>
                                    <h6>{t("TokenFeatures.Part1")} <br /> {t("TokenFeatures.Part2")}</h6>
                                </div>
                            </div>
                            <div className="iora_invest_box text-center">
                                <div>
                                    <div className="iora-invest-icon">
                                        <img src={Wallet} alt="Wallet" className="img-fluid" />
                                    </div>
                                    <h6>{t("TokenFeatures.Part3")} <br /> {t("TokenFeatures.Part4")}</h6>
                                </div>
                            </div>
                            <div className="iora_invest_box text-center">
                                <div>
                                    <div className="iora-invest-icon">
                                        <img src={Union} alt="" className="img-fluid" />
                                    </div>
                                    <h6>{t("TokenFeatures.Part5")} <br /> {t("TokenFeatures.Part6")}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="investing-agora">
                        <h3>{t("Reasons.Part1")}</h3>
                        <p>{t("Reasons.Part2")}</p>
                        <p>{t("Reasons.Part3")}</p>
                        <p>{t("Reasons.Part4")}<a href="https://docs.praora.com"><b>{t("whitepaper")}</b></a> {t("Reasons.Part5")}
                        </p>
                    </div>
                    <div className="iora-mockup">
                        <div className="iora-mockup-box">
                            <img src={Mockup1} alt="" className="img-fluid" />
                        </div>
                        <div className="iora-mockup-box">
                            <img src={Mockup2} alt="" className="img-fluid" />
                        </div>
                        <div className="iora-mockup-box">
                            <img src={Mockup3} alt="" className="img-fluid" />
                        </div>
                        <div className="iora-mockup-box">
                            <img src={Mockup4} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-bg-tf position-relative">
                <img src={Elipse3} alt="" className="token-bg tkbg3" />
                <img src={Elipse2} alt="" className="token-bg tkbg4" />
                <div className="iora-container">
                    <div className="iora-item-cont iora-item-secure">
                        <h4>{t("Reasons.Part6")}</h4>
                        <p>
                            {t("Reasons.Part7")}
                        </p>
                    </div>
                    <div className="iora-item-cont iora-item-start-live">
                        <h4>{t("Reasons.Part8")}<br /> {t("Reasons.Part9")}</h4>
                        <p>
                            {t("Reasons.Part10")}
                        </p>
                    </div>
                    <div className="iora-item-cont iora-item-connect">
                        <h4> {t("Reasons.Part11")}</h4>
                        <p>
                        {t("Reasons.Part12")}
                        </p>
                    </div>
                    <div className="iora-item-cont iora-item-uma-platf">
                        <h4> {t("Reasons.Part13")} <br />  {t("Reasons.Part14")}</h4>
                        <p>
                        {t("Reasons.Part15")}
                        </p>
                    </div>
                    <div className="uma-sec-platf-wrp">
                        <div className="uma-platform-box">
                            <div className="uma-platform-content">
                                <div className="uma-platform-left">
                                    <h3>{t("Community.Part1")} <br /> {t("Community.Part2")}</h3>
                                    <p>{t("Community.Part3")} <br />{t("Community.Part4")}</p>
                                    <a href="#" className="iora-btns">{t("BuyIora")}</a>
                                    <div className="iora-cont-address iora-bottm-contact">
                                        <h5>{t("ContractAddress")}</h5>
                                        <div className="iroa-add-input">
                                            <input type="text" defaultValue="0xee4c36aaf349ca458deBbD94dFdd66dC941C6616" />
                                            <div className="iora-add-contact">
                                                <a href="#"><img src={CopyContent} alt="" /></a>
                                                <a href="#"><img src={Metamask} alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uma-platform-right">
                                    <img src={Phone} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default IoraToken;
