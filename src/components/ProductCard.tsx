import { Box, Card, CardContent, Typography } from '@mui/material';
import { capitalize } from '../helperFunctions';
import { Product } from '../types';

type Props = {
  key: number;
  data: Product;
  selected: Boolean;
  handleClick: (id: number) => void;
};

function ProductCard({ data, handleClick, selected }: Props) {
  return (
    <Card
      sx={{
        overflow: 'visible',
        borderRadius: '1.2rem',
        border: '1px solid ',
        borderColor: selected ? '#B692F6' : '#EAECF0',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }}
      onClick={() => handleClick(data.id)}
    >
      <CardContent sx={{ display: 'flex', columnGap: '2rem' }}>
        <Box
          sx={{
            background: `no-repeat center/75% url(${data.image})`,
            backgroundColor: '#F4F6FA',
            backgroundBlendMode: 'multiply',
            minHeight: { xs: 115, md: 160 },
            minWidth: { xs: 100, md: 128 },
            borderRadius: '0.8rem',
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          <div>
            <Typography variant="purple" component="div">
              {capitalize(data.category)}
            </Typography>
            <Typography
              variant="title"
              component="div"
              fontSize={{ xs: '1.4rem' }}
              sx={{ overflow: 'hidden' }}
            >
              {data.title}
            </Typography>
            <Typography
              component="div"
              fontSize={{ xs: '1.2rem' }}
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
          </div>
          <div>
            <Typography
              variant="price"
              fontSize={{ xs: '1.6rem' }}
            >{`$${data.price}`}</Typography>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
