import { Card, CardContent, Typography } from '@mui/material';

type Props = {
  key: string;
  data: any;
  handleClick: (product: {}) => void;
};

function ProductCard({ data, handleClick }: Props) {
  return (
    <Card sx={{ overflow: 'visible' }} onClick={() => handleClick(data)}>
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
