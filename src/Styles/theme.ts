import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
	colors: {
		brand: {
			100: '#034AFD',
			200: '#1ECAAF',
			300: '#34423D',
			400: '#A3B8B0',
		},
	},
	components: {
		Tabs: {
			variants: {
				line: {
					tab: {
						color: 'brand.400',
						_selected: {
							borderColor: 'brand.200',
							color: 'brand.300',
							outline: 'none',
						},
					},
				},
			},
		},
		Checkbox: { variants: { line: { color: 'brand.400' } } },
	},
});
