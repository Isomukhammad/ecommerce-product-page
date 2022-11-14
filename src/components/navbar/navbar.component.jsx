import {ReactComponent as Cart} from '../../images/icon-cart.svg'
import {ReactComponent as Menu} from '../../images/icon-menu.svg'
import Avatar from '../../images/image-avatar.png';

import styled from 'styled-components';

const Navbar = () => {
    return(
        <NavbarContainer>
            <div>
                <Menu/>
                <h1>sneakers</h1>
            </div>
            <div>
                <Cart/>
                <img 
                    src={Avatar} 
                    alt="Avatar" 
                />
            </div>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export default Navbar;