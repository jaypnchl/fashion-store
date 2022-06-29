import React from "react";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "../redux/directory/DirectorySelector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className=" grid grid-rows lg:grid-cols-3 gap-6">
      {sections.map(({ id, title, imageUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
