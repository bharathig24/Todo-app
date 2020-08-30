import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/action";

const FilterLink = ({ active, onClick, children }) => {
  // console.log(children);
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px",
      }}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
