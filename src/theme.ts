import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    purple: React.CSSProperties;
    title?: React.CSSProperties;
    description?: React.CSSProperties;
    price?: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    purple?: React.CSSProperties;
    title?: React.CSSProperties;
    description?: React.CSSProperties;
    price?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    purple: true;
    title: true;
    description: true;
    price: true;
  }
}

const theme = createTheme({
  typography: {
    purple: {
      fontSize: '1.4rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '2rem',
      color: '#6941C6',
    },
    title: {
      fontSize: '1.8rem',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '2.8rem',
      color: '#101828',
    },
    description: {
      fontSize: '1.6rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '2.8rem',
      color: '#475467',
      textOverflow: 'ellipsis',
    },
    price: {
      fontSize: '2rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '3rem',
      color: '#101828',
    },
  },
});

export default theme;
