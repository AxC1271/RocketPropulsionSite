import Header from "../../components/header/Header";
import FooterSocial from "../../components/footersocial/FooterSocial";
import UserInfoAction from "../../components/userinfoaction/UserInfoAction";

import AlvinCheng from "../../assets/images/headshots/AlvinCheng.png";
import EdwardYorns from "../../assets/images/headshots/EdwardYorns.png";
import JosephAhmed from "../../assets/images/headshots/JosephAhmed.png";
import QuinnHarris from "../../assets/images/headshots/QuinnHarris.png";

import classes from "./Team.module.css";

const Team = () => {
    return (
        <div className={classes.team}>
            <Header />
            <div className={classes.user_group}>
                <h1 className={classes.title}>Liquid Oxygen Design Team</h1>
                <div className={classes.underline}></div>
                <div className={classes.user_grid}>
                    <a
                        href="https://www.linkedin.com/in/alvinscheng"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={AlvinCheng}
                            name="Alvin Cheng"
                            email="asc187@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/edward-yorns-iii"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={EdwardYorns}
                            name="Edward Yorns"
                            email="emy32@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joseph-ahmed-b25b7921a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={JosephAhmed}
                            name="Joseph Ahmed"
                            email="ana98@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                </div>
            </div>
            <div className={classes.user_group}>
                <h1 className={classes.title}>Nitrous Oxide Engine Team</h1>
                <div className={classes.underline}></div>
                <div className={classes.user_grid}>
                    <a
                        href="https://www.linkedin.com/in/edward-yorns-iii"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={EdwardYorns}
                            name="Edward Yorns"
                            email="emy32@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/quinnmharris"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={QuinnHarris}
                            name="Quinn Harris"
                            email="qmh3@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joshua-goldberg-830439268/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={EdwardYorns}
                            name="Joshua Goldberg"
                            email="jdg151@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/edward-yorns-iii"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={EdwardYorns}
                            name="Edward Yorns"
                            email="emy32@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/edward-yorns-iii"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={EdwardYorns}
                            name="Edward Yorns"
                            email="emy32@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/edward-yorns-iii"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <UserInfoAction
                            avatarSrc={EdwardYorns}
                            name="Edward Yorns"
                            email="emy32@case.edu"
                            position="Designer/Engineer"
                            onSendMessage={() => console.log('Send message clicked')}
                        />
                    </a>

                </div>
            </div>

            <FooterSocial />
        </div>
    )
}

export default Team;