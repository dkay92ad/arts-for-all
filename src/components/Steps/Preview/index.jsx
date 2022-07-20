import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startCase } from "lodash-es";
import { PreviewContainer } from "./styled.js";

const Preview = () => {
  const chooseArt = useSelector((state) => state.chooseArt.toJS());
  const personalDetails = useSelector((state) => state.personalDetails.toJS());
  //   const dispatch = useDispatch();

  return (
    <PreviewContainer>
      <h4 className="preview-title">Choose Art</h4>
      <ul>
        {Object.entries(chooseArt.filterData).map((value) => (
          <li key={value[0]}>
            <span>{`${startCase(value[0]).split("Art").splice(1)}:`}</span>
            {value.length > 0 && (
              <span style={{ marginLeft: "1em" }}>{`${value[1]}`}</span>
            )}
          </li>
        ))}
      </ul>
      <h4 className="preview-title">Personal Details</h4>
      <ul>
        {Object.entries(personalDetails.data).map((value) => (
          <li key={value[0]}>
            <span>{`${startCase(value[0])}:`}</span>
            {value.length > 0 ? (
              <span style={{ marginLeft: "1em" }}>{`${value[1]}`}</span>
            ) : (
              "-"
            )}
          </li>
        ))}
      </ul>
    </PreviewContainer>
  );
};

export default Preview;
