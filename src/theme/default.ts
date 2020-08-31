import ThemeType from "./type";

const defaultTheme: ThemeType = {
  color: {
    primary: "blue",
    positive: "green",
    negative: "red",
  },
  border: {
    normal: "5px",
    thick: "10px",
  },
  animation: {
    fast: 0.4,
    normal: 0.8,
    slow: 1.6,
  },
};

export default defaultTheme;
