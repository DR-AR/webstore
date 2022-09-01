import createTheme from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
	interface Theme {
		palette: {
			mode: string;
			primary: {
				main: string;
				//used for the off black/white colors for backgrounds -- SAME FOR BOTH THEMES
				light: string;
				dark: string;
			};
			secondary: {
				main: string;
				//used for the off black/white colors for backgrounds -- OPPOSITE BETWEEN THEMES
				//this allows some things to switch but others to stay the same between themes
				light: string;
				dark: string;
			};
			info: {
				main: string;
				light: string;
				dark: string;
			};
			success: {
				main: string;
				light: string;
				dark: string;
			};
			warning: {
				main: string;
			};
			error: {
				main: string;
			};
		};
	}
}

const nordColors = {
	nord0: "#2E3440",
	nord1: "#3B4252",
	nord2: "#434C5E",
	nord3: "#4C566A",
	nord4: "#D8DEE9",
	nord5: "#E5E9F0",
	nord6: "#ECEFF4",
	nord7: "#8FBCBB",
	nord8: "#88C0D0",
	nord9: "#81A1C1",
	nord10:  "#5E81AC",
	nord11:  "#BF616A",
	nord12:  "#D08770",
	nord13:  "#EBCB8B",
	nord14:  "#A3BE8C",
	nord15:  "#B48EAD"
}

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: nordColors.nord6
		},
		secondary: {
			main: nordColors.nord3
		},
		info: {
			main: nordColors.nord15
		},
		success: {
			main: nordColors.nord14
		},
		warning: {
			main: nordColors.nord13
		},
		error: {
			main: nordColors.nord11
		}
	}
});