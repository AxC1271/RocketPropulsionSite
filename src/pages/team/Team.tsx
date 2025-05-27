import Header from "../../components/header/Header";
import FooterSocial from "../../components/footersocial/FooterSocial";
import UserInfoAction from "../../components/userinfoaction/UserInfoAction";

import AlvinCheng from "../../assets/images/headshots/AlvinCheng.png";

import classes from "./Team.module.css";

const Team = () => {
    return (
        <div className={classes.team}>
            <Header />
            <div className={classes.user_group}>
                <h1 className={classes.title}>Exec Board</h1>
                <div className={classes.underline}></div>
                <UserInfoAction
                    avatarSrc={AlvinCheng}
                    name="Alvin Cheng"
                    email="asc187@case.edu"
                    position="President"
                    onSendMessage={() => console.log('Send message clicked')}
                />
            </div>
            <div className={classes.user_group}>
                <h1 className={classes.title}>Tech Leads</h1>
                <div className={classes.underline}></div>
                <div className={classes.user_grid}>
                    <UserInfoAction
                        avatarSrc={AlvinCheng}
                        name="Alvin Cheng"
                        email="asc187@case.edu"
                        position="Lead Engineer"
                        onSendMessage={() => console.log('Send message clicked')}
                    />
                    <UserInfoAction
                        avatarSrc={AlvinCheng}
                        name="Alvin Cheng"
                        email="asc187@case.edu"
                        position="Treasury"
                        onSendMessage={() => console.log('Send message clicked')}
                    />
                    <UserInfoAction
                        avatarSrc={AlvinCheng}
                        name="Alvin Cheng"
                        email="asc187@case.edu"
                        position="Secretary"
                        onSendMessage={() => console.log('Send message clicked')}
                    />
                    <UserInfoAction
                        avatarSrc={AlvinCheng}
                        name="Alvin Cheng"
                        email="asc187@case.edu"
                        position="Advisor"
                        onSendMessage={() => console.log('Send message clicked')}
                    />
                </div>
            </div>

            <FooterSocial />
        </div>
    )
}

export default Team;