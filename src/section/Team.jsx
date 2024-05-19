// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemTeam } from '../components/content/ItemTeam';
// Images
import image_team_01 from './../assets/static/images/team/Josh.jpg';
import image_team_02 from './../assets/static/images/team/Wesley.jpg';
import image_team_03 from './../assets/static/images/team/Ying-Zi.jpg';
import image_team_04 from './../assets/static/images/team/Lindsey.jpg';
import image_team_05 from './../assets/static/images/team/Thijs.jpg';
import image_team_06 from './../assets/static/images/team/Bas.jpg';

export function Team() {
    return (
        <LayoutContent header="Het team...">
            <div id="Team" className="md:flex md:flex-wrap md:justify-center md:gap-10">
                <ItemTeam textTeamMember="Joshua"
                            textEmail="0933530@hr.nl"
                            textCourse="CMGT"
                            textFunction="Developer"
                            imageTeamMember={image_team_01}
                            noMarginTop
                            backgroundColor="bg-red"/>
                <ItemTeam textTeamMember="Wesley"
                            textEmail="0960572@hr.nl"
                            textCourse="CMGT"
                            textFunction="Developer"
                            imageTeamMember={image_team_02} 
                            backgroundColor="bg-yellow"/>
                <ItemTeam textTeamMember="Ying-Zi"
                            textEmail="1039826@hr.nl"
                            textCourse="CMD"
                            textFunction="Designer"
                            imageTeamMember={image_team_03} 
                            backgroundColor="bg-blue"/>
                <ItemTeam textTeamMember="Lindsey"
                            textEmail="1011219@hr.nl"
                            textCourse="CMD"
                            textFunction="Designer"
                            imageTeamMember={image_team_04} 
                            backgroundColor="bg-yellow"/>
                <ItemTeam textTeamMember="Thijs"
                            textEmail="1005526@hr.nl"
                            textCourse="CMD"
                            textFunction="Designer"
                            imageTeamMember={image_team_05}
                            backgroundColor="bg-blue"/>
                <ItemTeam textTeamMember="Bas"
                            textEmail="1000283@hr.nl"
                            textCourse="CMD"
                            textFunction="Designer"
                            imageTeamMember={image_team_06}
                            noMarginBottom
                            backgroundColor="bg-red"/>
            </div>
        </LayoutContent>
    )
}
