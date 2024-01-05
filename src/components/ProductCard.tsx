import { Box, Card, CardContent, Typography } from '@mui/material';
import { capitalize } from '../helperFunctions';

type Props = {
  key: string;
  data: any;
  handleClick: (id: string) => void;
};

function ProductCard({ data, handleClick }: Props) {
  console.info(data);
  return (
    <Card
      sx={{
        overflow: 'visible',
        borderRadius: '1.2rem',
        border: '1px solid #EAECF0',
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
            <Typography variant="title">{data.title}</Typography>
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
          </div>
          <div>
            <Typography variant="price">{`$${data.price}`}</Typography>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
