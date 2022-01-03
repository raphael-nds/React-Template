export const theme = {
   colors: {
      main: {
         blue: '#1D69E5',
         darkblue: '#0E2E59',
         grey: '#9CA3AC',
         lightGrey: '#EEEEEE',
         white: '#ffffff',
         lightBlue: '#F2F7FF',
         black: '#202020',
         main: '#0B2445'
      },
      alerts: {
         red: '#FF6B6B',
         lightRed: '#FFE9E7',
         yellow: '#FECA57',
         lightYellow: '#FFFAE4',
         green: '#1DD1A1',
         lightGreen: '#DEFFF6'
      },
      personalization: {
         lightGreen: '#B8E994',
         green: '#6DC981',
         purple: '#706FD3',
         cyan: '#6A89CC',
         lightBlue: '#82CCDD',
         yellow: '#FAD390',
         orange: '#FF7C32',
         red: '#E55039'
      }
   },
   font: {
      family: {
         default: "'Open Sans', sans-serif",
         secondary: "'Montserrat', sans-serif"
      },
      sizes: {
         xsmall: '8rem',
         small: '1.6rem',
         medium: '2.4rem',
         large: '3.2rem',
         xlarge: '4.0rem',
         xxlarge: '4.8rem',
         huge: '5.6rem',
         xhuge: '6.4rem'
      }
   },
   media: {
      lteMedium: '(max-width: 768px)'
   },
   spacings: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem'
   }
} as const
