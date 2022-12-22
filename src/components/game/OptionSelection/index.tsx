import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { OptionSelectionObject } from '../../../types';

type OptionSelectionProps = {
  options?: OptionSelectionObject;
};

export const OptionSelection: React.FC<OptionSelectionProps> = ({
  options,
}) => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      {options?.option1 && (
        <BottomNavigationAction
          label={options?.option1}
          value={options?.option1}
          icon={<RestoreIcon />}
        />
      )}
      {options?.option2 && (
        <BottomNavigationAction
          label={options?.option2}
          value={options?.option2}
          icon={<FavoriteIcon />}
        />
      )}
      {options?.option3 && (
        <BottomNavigationAction
          label={options?.option3}
          value={options?.option3}
          icon={<LocationOnIcon />}
        />
      )}
      {options?.option3 && (
        <BottomNavigationAction
          label={options?.option3}
          value={options?.option3}
          icon={<FolderIcon />}
        />
      )}
    </BottomNavigation>
  );
};
