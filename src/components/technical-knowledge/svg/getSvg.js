import React from "react";

import {
  CppSvg,
  CSvg,
  GitVCSSvg,
  JavaSvg,
  PythonSvg,
  ScalaSvg,
  AngularSvg,
  IBMSvg,
  JavaScriptSvg,
  JQuerySvg,
  MongoDBSvg,
  MySQLSvg,
  NodeJsSvg,
  ReactJsSvg,
  ReduxSvg,
  ApacheSparkSvg,
  HadoopMapReduceSvg,
  SpringBootSvg,
  OracleSqlSvg,
} from "./technical-knowledge-svg";

export const getSvg = (name) => {
  switch (name) {
    case "Java":
      return <JavaSvg />;
    case "C":
      return <CSvg />;
    case "C++":
      return <CppSvg />;
    case "Python":
      return <PythonSvg />;
    case "Scala":
      return <ScalaSvg />;
    case "Git VCS":
      return <GitVCSSvg />;
    case "IBM WTX (v8.4.0.3)":
      return <IBMSvg />;
    case "React.js":
      return <ReactJsSvg />;
    case "Redux":
      return <ReduxSvg />;
    case "MySQL":
      return <MySQLSvg />;
    case "IBM ITX (v9.0)":
      return <IBMSvg />;
    case "Hadoop MapReduce":
      return <HadoopMapReduceSvg />;
    case "Apache Spark":
      return <ApacheSparkSvg />;
    case "Node.js":
      return <NodeJsSvg />;
    case "JavaScript":
      return <JavaScriptSvg />;
    case "Angular":
      return <AngularSvg />;
    case "jQuery":
      return <JQuerySvg />;
    case "MongoDB":
      return <MongoDBSvg />;
    case "Spring Boot":
      return <SpringBootSvg />;
    case "Oracle SQL":
      return <OracleSqlSvg />;
    default:
      return null;
  }
};
