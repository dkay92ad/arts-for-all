import Stepper from "common/components/Stepper";
import StudentContainer from "./StudentInput";
import { ContentContainer } from "common/components/StyledComponents";
import { StartLearningContainer } from "./styled";
const questions = [
  { label: "Art" },
  { label: "Level" },
  { label: "User Info" },
];

function StartLearning() {
  return (
    <ContentContainer>
      <StartLearningContainer>
        <Stepper questions={{ steps: questions }} />
      </StartLearningContainer>
    </ContentContainer>
  );
}

export default StartLearning;
