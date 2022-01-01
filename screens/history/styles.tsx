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
  border-top-color: #f0f0f0;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ColumnCategory = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
`;

export const RowPrice = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;