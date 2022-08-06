import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  transition: all 0.5s ease;
  min-height: 100vh;
  max-height: 100%;
`;

export const SiteContainer = styled.div`
  width: min(100%, 85rem);
  // background: red;
`;

export const ContentRow = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // margin-left: auto;
  // margin-right: auto;
  // flex: 1;
  display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
`;

export const ContentFullColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content2Column2 = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content3Column3 = styled.div`
  flex: 0 0 33.3%;
  max-width: 33.3%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content4Column4 = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content6Column6 = styled.div`
flex: 0 0 16.666667%;
max-width: 16.666667%;
position: relative;
width: 100%;
padding-right: 10px;
padding-left: 10px;
`;

export const Content70Column = styled.div`
  flex: 0 0 60%;
  max-width: 60%%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Content30Column = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const CustomColumn = styled.div`
  max-width:  ${(props) => props.maxWidth || "100%"};
  flex: ${(props) => props.flex || "0 0 100%"};
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const CustomDiv = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || null};
  align-items: ${(props) => props.alignItems || null};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  right: ${(props) => props.right || null};
  max-width:  ${(props) => props.maxWidth || "100%"};
  flex: ${(props) => props.flex || "0 0 100%"};
`;

export const CustomButton = styled.button`
padding: 0.6rem 2rem;
background: ${(props) => props.background || "var(--primary)"};
border-radius: 4px;
border: ${(props) => props.border || "1px solid var(--primary)"};
margin: ${(props) => props.margin || "0"};
width: ${(props) => props.width || "100%"};
text-transform: ${(props) => props.textTransform || "unset"};
color: ${(props) => props.color || "va(--white)"};
font-size: ${(props) => props.fontSize || "14px"};
font-weight: ${(props) => props.fontWeight || "400"};
line-height: ${(props) => props.lineHeight || "24.32px"};
text-align: ${(props) => props.textAlign || "center"};
cursor: ${(props) => (props.disabled ? "none" : "pointer")};
position: relative;

  &:first-child {
    margin-left: 0;
  }
  `;

export const GeneralLgText = styled.h2`
font-weight: ${(props) => props.fontWeight || "700"};
font-size: ${(props) => props.fontSize || "48px"};
line-height:  ${(props) => props.lineHeight || "58px"};
color: ${(props) => props.color || "inherit"};
text-align: ${(props) => props.textAlign || "left"};
font-family: ${(props) => props.fontFamily || "var(--font-bold)"};
width: ${(props) => props.width || "100%"};
padding: ${(props) => props.padding || "0"};
margin: ${(props) => props.margin || "0"};
text-transform: ${(props) => props.textTransform || "unset"};
opacity: ${(props) => props.opacity || ""};
`;

export const GeneralMdText = styled.h4`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height:  ${(props) => props.lineHeight || "31px"};
  color: ${(props) => props.color || "#2b2d42"};
  text-align: ${(props) => props.textAlign || "left"};
  font-family: ${(props) => props.fontFamily || "var(--font-semi-bold)"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  text-transform: ${(props) => props.textTransform || "lowercase"};
  opacity: ${(props) => props.opacity || ""};
`;

export const GeneralSmText = styled.p`
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height:  ${(props) => props.lineHeight || "29px"};
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || ""};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  font-family: ${(props) => props.fontFamily || "var(--font-regular)"};
  width: ${(props) => props.width || "100%"};
  opacity: ${(props) => props.opacity || ""};
  text-transform: ${(props) => props.textTransform || "lowercase"};
  cursor: pointer;
`;


export const GeneralFlexRow = styled.div`
display: flex;
flex-direction: row;
padding: ${(props) => props.padding || "0"};
margin: ${(props) => props.margin || "0"};
height: ${(props) => props.height || ""};
width: ${(props) => props.width || "100%"};
align-items: ${(props) => props.alignItems || ""};
justify-content: ${(props) => props.justifyContent || "center"};
`;

export const GeneralFlexColumn = styled.div`
display: flex;
flex-direction: column;
padding: ${(props) => props.padding || "0"};
margin: ${(props) => props.margin || "0"};
height: ${(props) => props.height || ""};
width: ${(props) => props.width || "100%"};
align-items: ${(props) => props.alignItems || ""};
justify-content: ${(props) => props.justifyContent || "center"};
`;