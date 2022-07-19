import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PreviewContainer } from "./styled.js";

const Preview = () => {
  const chooseArt = useSelector((state) => state.chooseArt.toJS());
  const personalDetails = useSelector((state) => state.personalDetails.toJS());
  //   const dispatch = useDispatch();

  return (
    <PreviewContainer>
      <p>Choose Art</p>
      {Object.entries(chooseArt.filterData).map((value, index) => (
        <div key={value[0]}>
          <p>{`${index + 1}. ${value[0]}`}</p>
          {value.length > 0 ? (
            <span style={{ marginLeft: "1em" }}>{`${value[1]}`}</span>
          ) : (
            <span>-</span>
          )}
        </div>
      ))}
      <hr />
      <p>Personal Details</p>
      {Object.entries(personalDetails.data).map((value, index) => (
        <div key={value[0]}>
          <p>{`${index + 1}. ${value[0]}`}: </p>
          {value.length > 0 ? (
            <span style={{ marginLeft: "1em" }}>{`${value[1]}`}</span>
          ) : (
            "-"
          )}
        </div>
      ))}
    </PreviewContainer>
  );
};

export default Preview;
