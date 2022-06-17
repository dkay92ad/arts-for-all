import Stepper from "common/components/Stepper";
// import StudentInput from "./StudentInput";
import { ContentContainer } from "common/components/StyledComponents";
import { StudentContainer } from "./styled";
const questions = [
  { label: "Choose Art" },
  { label: "Personal Details" },
  { label: "Preview and Confirm" },
  { label: "Pay" },
];

function Student() {
  return (
    <ContentContainer>
      <StudentContainer>
        <Stepper questions={{ steps: questions }} />
      </StudentContainer>
    </ContentContainer>
  );
}

export default Student;
