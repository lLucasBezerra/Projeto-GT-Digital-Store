import LogoFooter from '../../assets/logo-footer.svg'
import LogoHeader from '../../assets/logo-header.svg'
export default function Logo({ isLight, isDesktop }) {
  return (
    <img src={isLight? LogoHeader : LogoFooter} alt="Logo da Digital Store" width={isDesktop? 253 : 138} height={isDesktop? 44 : 24}/>
  )
}
