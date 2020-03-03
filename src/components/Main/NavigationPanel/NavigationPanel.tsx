import * as React from "react";
import {
	Stack,
	DefaultButton,
	PrimaryButton,
	initializeIcons,
	IIconProps,
	IButtonStyles
} from "office-ui-fabric-react";
import { stackTokens, buttonStyle } from "../AnswerPanel/AnswerPanel";
import { INavigation } from "../../../interfaces/INavigation";

initializeIcons();

const backIcon: IIconProps = { iconName: "Back" };
const nextIcon: IIconProps = { iconName: "Forward" };

const nextIconButtonStyle: IButtonStyles = {
	...buttonStyle,
	flexContainer: {
		flexDirection: "row-reverse"
	}
};

const backIconButtonStyle: IButtonStyles = {
	root: {
		...{ ...(buttonStyle.root as object) },
		backgroundColor: "#ccc"
	},
	rootHovered: {
		backgroundColor: "#999"
	}
};

const NavigationPanel: React.FC<INavigation> = ({ isStarted, ...props }) => {
	return (
		<>
			{isStarted ? (
				<Stack horizontal wrap tokens={stackTokens}>
					<DefaultButton
						iconProps={backIcon}
						styles={backIconButtonStyle}
                        text={"Back"}
                        onClick={props.backClickHandler}
					/>
					<PrimaryButton
						iconProps={nextIcon}
						styles={nextIconButtonStyle}
                        text={"Next"}
                        onClick={props.nextClickHandler}
					/>
				</Stack>
			) : (
				<div
					style={{
						display: "flex",
						justifyContent: "center"
					}}
				>
					<PrimaryButton
						styles={nextIconButtonStyle}
                        text={"Start"}
                        onClick={props.startClickHandler}
					/>
				</div>
			)}
		</>
	);
};

export default NavigationPanel;
