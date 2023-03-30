import { AppBar as MuiAppBar, Typography, styled, Box, Button } from '@mui/material'

type AppBarProps = {
  isLoggedIn: boolean
  onLogin: () => void
  onLogout: () => void
}

const AppBar = ({ isLoggedIn, onLogin, onLogout }: AppBarProps) => {

  console.log(isLoggedIn)
  console.log(onLogin)
  console.log(onLogout)

  return (
    <StyledAppBar position="static" color="default">
      <Typography variant="h3" pl={4} fontWeight={700}>
      Superfluid - NFT Lending
      </Typography>

      <Box mr={5}>
        {isLoggedIn ? (
          <Button variant="contained" onClick={onLogout}>
            Log Out
          </Button>
        ) : (
          <Button variant="contained" onClick={onLogin}>
            Login
          </Button>
        )}
      </Box>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(MuiAppBar)`
  && {
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.palette.background.paper};
    height: 70px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 2px solid ${({ theme }) => theme.palette.background.paper};
    box-shadow: none;
  }
`

export default AppBar
