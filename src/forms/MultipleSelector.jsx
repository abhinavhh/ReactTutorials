import React from "react";
import PropTypes from "prop-types";
import "./MultipleSelector.css";

export default function MultipleSelector(props) {
  function select(item) {
    const selected = [...props.selected, item];
    const unSelected = props.unSelected.filter((value) => value !== item);
    props.onChange(selected, unSelected);
  }

  function deselect(item) {
    const unSelected = [...props.unSelected, item];
    const selected = props.selected.filter((value) => value !== item);
    props.onChange(selected, unSelected);
  }

  function selectAll() {
    const selected = [...props.selected, ...props.unSelected];
    const unSelected = [];
    props.onChange(selected, unSelected);
  }

  function deselectAll() {
    const unSelected = [...props.unSelected, ...props.selected];
    const selected = [];
    props.onChange(selected, unSelected);
  }

  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <div className="multiple-selector">
        <ul>
          {props.unSelected.map((item) => (
            <li key={item.key} onClick={() => select(item)}>
              {item.value}
            </li>
          ))}
        </ul>
        <div className="multiple-selector-button">
          <button type="button" onClick={selectAll}>
            {">>"}
          </button>
          <button type="button" onClick={deselectAll}>
            {"<<"}
          </button>
        </div>
        <ul>
          {props.selected.map((item) => (
            <li key={item.key} onClick={() => deselect(item)}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// TypeScript interfaces converted to PropTypes

MultipleSelector.propTypes = {
  displayName: PropTypes.string.isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  unSelected: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
