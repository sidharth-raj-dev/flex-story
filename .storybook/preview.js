export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'dark',
        value: '#000000',
      },
      {
        name: 'gray',
        value: '#e0e0e0',
      },
      {
        name: 'white',
        value: '#ffffff',
      }
    ],
  },
}