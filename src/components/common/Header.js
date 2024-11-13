import { Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import { StyledButton } from './StyledButtons';

export const Header = ({ title, label, onClick }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between" // Ensures content is far apart
      sx={{ width: '100%' }} // Full width to allow space between items
    >
      <Typography variant="h2">{title}</Typography>
          <StyledButton label={label} onClick={onClick} sx={{width : 200}} />
    </Stack>
  );
};
