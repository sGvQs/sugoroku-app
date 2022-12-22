import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

type RatingDifficalityProps = {
  value: number;
  final: boolean;
};

export const RatingDifficality: React.FC<RatingDifficalityProps> = ({
  value,
  final,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!final && <Box sx={{ ml: 2 }}>難易度：</Box>}
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
};
