import { memo } from "react" ;
import { LinkType } from "../../../common/types"
import HyperLink from "../small/HyperLink"
import SocialFeed from "../small/SocialFeed" ;

const Footer = () => {

    return (
        <div className='footer outer'>
            <div className='inner' >
                <SocialFeed />
                <p> Made with <HyperLink type={LinkType.External} to="https://react.dev/"> React</HyperLink> and lots of Good 'Ole Determination.</p>
                <p> &copy; {(new Date()).getFullYear()} Malakai Spann.</p>
            </div>
        </div>
    )
}

export default memo(Footer)