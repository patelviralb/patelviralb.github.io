import React, { Fragment } from "react";

import { Partition, PartitionBox } from "../../styles/page-break";

const PageBreak = () => {
  const colors = [
    "violet",
    "indigo",
    "#0089d7",
    "#3dcd49",
    "#ffd300",
    "#ff9000",
    "#ff5852",
  ];
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Partition>
              {colors &&
                colors.map((color, index) => (
                  <PartitionBox key={index} color={color} />
                ))}
            </Partition>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageBreak;
