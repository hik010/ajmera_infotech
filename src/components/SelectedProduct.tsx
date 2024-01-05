import { Box, Rating, Typography } from '@mui/material';
import { capitalize } from '../helperFunctions';
import backArrow from '../back-arrow.svg';

type Props = {
  data: any;
  handleClickBackArrow: () => void;
};

function SelectedProduct({ data, handleClickBackArrow }: Props) {
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
      >
        <Box
          component="img"
          src={backArrow}
          sx={{
            borderRadius: '99.9rem',
            border: '1px solid #D0D5DD',
            background: '#FFF',
            width: '2rem',
            height: '2rem',
            padding: '1.2rem',
            display: { xs: 'block', sm: 'none' },
          }}
          onClick={handleClickBackArrow}
        />
      </Box>
      <Box>
        <Typography component="div" variant="purple">
          {capitalize(data.category)}
        </Typography>
        <Typography component="div" variant="title" mt="1.2rem">
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

      <Box display="flex" columnGap="0.8rem" alignItems="center">
        <Rating
          name="read-only"
          value={data.rating.rate}
          readOnly
          size="large"
        />
        <Typography fontSize="1.6rem" fontWeight="medium" color="#101828">
          {data.rating.rate}
        </Typography>
        <Typography
          fontSize="1.6rem"
          fontWeight="light"
          color="#475467"
        >{`${data.rating.count} reviews`}</Typography>
      </Box>
      <Typography variant="price">{`$${data.price}`}</Typography>
    </Box>
  );
}

export default SelectedProduct;
