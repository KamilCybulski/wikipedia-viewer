import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const Result = ({ data }) => {

  return (
    <Paper className="result" zDepth={2} >
      <h4 className="result-title">
        <a href={data.fullurl} >
          {data.title}
        </a>
      </h4>
      <p className="result-text">
        {data.extract}
      </p>
    </Paper>
  );
};

Result.propTypes = {
  data: PropTypes.object.isRequired
};

export default Result;
