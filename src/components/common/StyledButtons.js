import { Button } from "@mui/material"
export const StyledButton = ({label}) => {

    return (
        <>
             <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2, p: 2, mx : 5, textTransform: 'none', fontSize : 20, width : 300 }}
              >
                {label}
              </Button>
        </>
    )
}