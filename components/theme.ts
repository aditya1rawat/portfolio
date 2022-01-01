import { extendTheme, theme as og } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		black: '#000F14',
		white: '#FFEFEB',
		red: '#D5202C',
		green: '#9BC53D',
		blue: '#006DAA',
		gray: {
			800: '#000F14'
		}
	},
	fonts: {
		heading: `DEVIS, ${og.fonts.heading}`,
		body: `Inter, ${og.fonts.body}`
	}
});
