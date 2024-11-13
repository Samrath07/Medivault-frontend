import { Button } from '@mui/material';
export const StyledButton = ({ label,onClick , sx}) => {
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          p: 2,
          textTransform: 'none',
          fontSize: 20,
          width: 300,
          ...sx
        }}
        onClick={onClick}
      >
        {label}
      </Button>
    </>
  );
};
