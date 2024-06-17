// Components
import { ItemImageHalf } from '../components/content/ItemImageHalf';
import { LayoutContent } from '../components/layout/_layoutConent';
// Images
import image_01 from './../assets/static/images/image_ontwerprichtlijn_01.png';
import image_02 from './../assets/static/images/image_ontwerprichtlijn_02.png';
import image_03 from './../assets/static/images/image_ontwerprichtlijn_03.png';
import image_04 from './../assets/static/images/image_ontwerprichtlijn_04.png';

export function Ontwerprichtlijnen() {
    return (
        <LayoutContent header="Ontwerprichtlijnen">
            <div className="flex flex-wrap gap-4">
                <ItemImageHalf image={image_01}
                                backgroundColor="bg-red"/>
                <ItemImageHalf image={image_02}/>
                <ItemImageHalf image={image_03}
                                backgroundColor="bg-blue"/>
                <ItemImageHalf image={image_04}
                                backgroundColor="bg-pink"/>
            </div>
        </LayoutContent>
    );
}
