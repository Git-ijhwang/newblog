import React from "react";

function Title({ title }) {
  return (
    <div>
      <h2 className="text-white mt-0">
        {title}
      </h2>
      <hr className="divider light my-4" />
    </div>
  );
}

export default Title;