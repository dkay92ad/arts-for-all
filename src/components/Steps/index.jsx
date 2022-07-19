import ChooseArt from "./ChooseArt";
import PersonalDetails from "./PersonalDetails";
import Preview from "./Preview";
import Payment from "./Payment";
import { StepsContainer } from "./styled";

const StepsRenderer = (props) => {
  const { activeStep } = props;
  switch (activeStep) {
    case 0:
      return <ChooseArt {...props} />;
    case 1:
      return <PersonalDetails {...props} />;
    case 2:
      return <Preview {...props} />;
    case 3:
      return <Payment {...props} />;
    default:
      return null;
  }
};

const Steps = (props) => {
  return <StepsContainer>{StepsRenderer(props)}</StepsContainer>;
};

export default Steps;
