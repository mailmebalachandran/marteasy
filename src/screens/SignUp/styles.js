import {StyleSheet} from 'react-native';
import * as colors from "../../themes/colors";
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  logoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "30%"
  },
  // OTP Styles
  otpContainer: {
    margin: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  otpInput: {
    borderColor: colors.BRAND_SECONDARY,
    borderWidth: 2,
    borderRadius: 5,
    width: "18%",
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  }
});

export default styles;
