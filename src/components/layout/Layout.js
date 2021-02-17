import Header from '../header/Header'
import Section from '../section/Section'
import { Box } from '@material-ui/core' 

const Layout = () => {

    return(
        <Box style={{ height: '100vh' }}>
            <Header />
            <Section />
        </Box>
    )
}

export default Layout;