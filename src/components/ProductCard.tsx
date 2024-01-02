import { Card, CardContent, Typography } from '@mui/material';

type Props = {
  data: any;
};

function ProductCard({ data }: Props) {
  return (
    <Card sx={{ overflow: 'visible' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
