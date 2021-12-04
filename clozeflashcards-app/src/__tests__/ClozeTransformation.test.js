import { render } from "@testing-library/react";

describe("Question Component", () => {
  it("Should cloze all words", () => {
    let definition = "Redux is a library that helps manage state";
    const pattern = "R____ i_ a l______ t___ h____ m_____ s____";
    const regex = /\B[a-z]/g;

    let transformedDefinition = definition.replace(regex, "_");

    expect(transformedDefinition).toEqual(pattern);
  });

  it("For empty input should return empty string", () => {
    let definition = " ";
    const pattern = " ";
    const regex = /\B[a-z]/g;
    
    let transformedDefinition = definition.replace(regex, "_");

    expect(transformedDefinition).toEqual(pattern);
  });

  
  it("For one letter input should not transform", () => {
    let definition = "s";
    const pattern = "s";
    const regex = /\B[a-z]/g;
    
    let transformedDefinition = definition.replace(regex, "_");

    expect(transformedDefinition).toEqual(pattern);
  });
});
