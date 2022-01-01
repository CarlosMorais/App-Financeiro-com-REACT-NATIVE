import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  border-radius: 20px;
  margin-top: 15px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 61px;
  border-top-width: 1px;
  border-top-color: #f0f0f0ba;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const Column1 = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 45px;
  background-color: #f0f0f0;
  opacity: 0.7;
`;

export const BoxData = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  margin-right: 10px;
`;

export const DataDay = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: -5px;
  margin: 0px;
  color: #333;
  opacity: 0.61;
`;

export const DataMonth = styled.Text`
  font-size: 13px;
  font-weight: bold;
  margin: 0px;
  color: #333;
  opacity: 0.61;
`;


export const DataDayWeek = styled.Text`
  font-size: 11px;
  margin: 0px;
  margin-top: -7px;
  margin-bottom: 7px;
  color: #333;
  opacity: 0.61;
`;

export const ColumnDescription = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ColumnButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;

export const RowPrice = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;