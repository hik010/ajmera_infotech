import { Box, Typography } from '@mui/material';
import { capitalize } from '../helperFunctions';

type Props = {
  data: any;
};

function SelectedProduct({ data }: Props) {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      justifyContent="start"
      rowGap="3.2rem"
      p="3.2rem"
    >
      <Box
        sx={{
          background: `no-repeat center/30% url(${data.image})`,
          backgroundColor: '#F4F6FA',
          backgroundBlendMode: 'multiply',
          minHeight: { xs: 115, md: '70vh' },
          minWidth: { xs: 100, md: 128 },
          borderRadius: '0.8rem',
        }}
      />
      <Box>
        <Typography component="div" variant="purple">
          {capitalize(data.category)}
        </Typography>
        <Typography component="div" variant="title">
          {data.title}
        </Typography>
        <Typography
          component="div"
          sx={{
            mb: 1.5,
            height: '2.4rem',
            overflow: 'hidden',
            display: 'block',
          }}
          variant="description"
          color="text.secondary"
        >
          {data.description}
        </Typography>
      </Box>

      <Box>
        <Typography>{data.rating.rate}</Typography>
        <Typography>{`${data.rating.count} reviews`}</Typography>
      </Box>
      <Typography variant="price">{`$${data.price}`}</Typography>
    </Box>
  );
}

export default SelectedProduct;
