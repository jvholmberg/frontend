import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers'
import * as Yup from 'yup';
import {
  Paper, FormControl, InputLabel, MenuItem, Button
} from '@material-ui/core';

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required('Required'),
  type: Yup.number()
    .required('Required'),
  name: Yup.string()
    .required('Required'),
  comment: Yup.string()
    .required('Required'),
});

const initialValues = {
  date: new Date(),
  type: '',
  name: '',
  comment: '',
};

const SessionForm = ({
  submitting,
  error,
  onSubmit,
  sessionTypes,
}) => (
  <Paper>
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      {formProps => (
        <Form>
          <FormControl fullWidth>
            <KeyboardDatePicker
              name="date"
              label="Date"
              format="dd/MM/yyyy" />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              disabled={submitting}>
              {sessionTypes.map((type, index) => (
                <MenuItem {...{ key: index, value: type.get('id') }}>{type.get('name')}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name="name"
              label="Name"
              disabled={submitting} />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name="comment"
              label="Comment"
              disabled={submitting} />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={submitting}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  </Paper>
);

SessionForm.propTypes = {
  submitting: PropTypes.bool,
  error: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  sessionTypes: PropTypes.instanceOf(Immutable.List),
};

SessionForm.defaultProps = {
  submitting: false,
  error: null,
  sessionTypes: []
};

export default connect(
  null,
  null,
)(SessionForm);
