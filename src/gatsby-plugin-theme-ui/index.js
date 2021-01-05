export default {
  breakpoints: ['400px', '900px', '1200px', '1800px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 200,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fffff',
    dark: '#000',
    primary: '#009345',
    secondary: '#CF2B36',
    muted: '#fff',
    offWhite: '#f7f7f7',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    galleryAlbumTitle: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'light',
      fontSize: [3, 4, 5],
      color: 'muted',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: 'primary',
      border: '3px solid',
      borderColor: 'primary',
      fontSize: [3, 4],
      paddingX: [3, 4],
      paddingY: [2],
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        background: 'transparent',
        transition: 'all .3s',
      },
    },
    secondary: {
      color: 'white',
      backgroundColor: 'secondary',
      border: '3px solid',
      borderColor: 'secondary',
      fontSize: [3, 4],
      paddingX: [3, 4],
      paddingY: [2],
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        background: 'transparent',
        transition: 'all .3s',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
      p: {
        margin: 0,
      },
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};
