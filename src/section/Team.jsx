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
            <ItemTeam textTeamMember="Joshua"
                        imageTeamMember={image_team_01}
                        noMarginTop />
            <ItemTeam textTeamMember="Wesley"
                        imageTeamMember={image_team_02} />
            <ItemTeam textTeamMember="Ying-Zi"
                        imageTeamMember={image_team_03} />
            <ItemTeam textTeamMember="Lindsey"
                        imageTeamMember={image_team_04} />
            <ItemTeam textTeamMember="Thijs"
                        imageTeamMember={image_team_05} />
            <ItemTeam textTeamMember="Bas"
                        imageTeamMember={image_team_06}
                        noMarginBottom />
        </LayoutContent>
    )
}