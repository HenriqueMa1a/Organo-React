import LogoRodape from '../LogoRodape'
import SocialRodape from '../SocialRodape'
import Text from '../Text'
import './Footer.css'

const Footer = ()=>{
    return(
        <section className='footer'>
            <SocialRodape/>
            <LogoRodape/>
            <Text/>
        </section>
    )
}

export default Footer