import Stepper from "../Stepper";
import { ContentContainer } from "common/components/StyledComponents";
import { steps } from "common/config";

function Student() {
  return (
    <ContentContainer>
      <Stepper steps={steps} />
    </ContentContainer>
  );
}

export default Student;
