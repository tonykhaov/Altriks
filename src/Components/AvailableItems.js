import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Item from "./Item";
import { getItems } from "../Redux/actionItems";

function AvailableItems({ className, getItems, items }) {
  useEffect(() => {
    getItems();
    console.log(getItems);
  }, [getItems]);
  return (
    <div className={className}>
      {items.map((item) => (
        <Item key={item.id} item={item} index={items.indexOf(item)} />
      ))}
    </div>
  );
}

const StyledAvailableItems = styled(AvailableItems)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 240px));
  justify-content: center;
  align-items: stretch;
  grid-gap: 12px;
`;

const mapStateToProps = (state) => ({
  items: state.items.items,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getItems }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledAvailableItems);
