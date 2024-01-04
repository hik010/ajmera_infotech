type Props = {
  data: any;
};

function SelectedProduct({ data }: Props) {
  return <>{data.title}</>;
}

export default SelectedProduct;
