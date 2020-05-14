import React, { useState, Fragment, useEffect } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { subDays, format as formatter, addDays } from "date-fns";
import moment from "moment-timezone";
import { v1 as uuidv1 } from "uuid";
import update from "immutability-helper";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import Availability from "./Availability";

const validationSchema = Yup.object({
  startDate: Yup.date().required(),
  endDate: Yup.date()
    .nullable()
    .when(
      "startDate",
      (startDate, schema) =>
        startDate &&
        schema.min(startDate, "End date cannot be after start date")
    ),
  meetingLength: Yup.array().of(Yup.string()).required("Must select a value"),
  spreadLength: Yup.string().oneOf(
    ["15 minutes", "30 minutes", "60 minutes"],
    "Must select a value"
  ),
  blackoutDate: Yup.array().test(
    "no duplicate",
    "Blackout date exists already",
    (value) => {
      const hasDuplicates = (array) => {
        return new Set(array).size !== array.length;
      };
      const foo = value.map((x) => formatter(x.defaultDate, "MM-dd-yyyy"));
      return !hasDuplicates(foo);
    }
  ),
});

const EditEventSchedulingForm = ({
  handleShowEditEventSchedule,
  handleEditEvent,
  handleEditEventSchedule,
  editingSchedule,
  editorId,
  startDate,
  endDate,
  timezone,
  meetingLength,
  spreadLength,
  blackoutDate,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  loading,
  updatedSchedule,
  handleCancelEditSchedule,
}) => {
  const [startDateState, setStartDate] = useState(new Date());
  const [endDateState, setEndDate] = useState(null);
  const [blackoutDates, setBlackoutDates] = useState({ data: [] });
  const timezones = moment.tz.names();
  useEffect(() => {
    startDate && setStartDate(new Date(startDate));
    endDate && setEndDate(new Date(endDate));
    blackoutDate &&
      setBlackoutDates({
        data: blackoutDate.map((x, y) => ({
          id: uuidv1(),
          defaultDate: new Date(x),
        })),
      });
  }, [startDate, endDate, blackoutDate]);
  const handleOnClickBlackoutDateAdd = () => {
    setBlackoutDates({
      data: [
        ...blackoutDates.data,
        {
          id: uuidv1(),
          defaultDate: new Date(),
        },
      ],
    });
  };
  return (
    <Fragment>
      <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Card.Body>
          <Card.Title>
            Schedule
            {!editingSchedule && (
              <Row className="float-right">
                {updatedSchedule && (
                  <Col sm={8}>
                    <span className="grn-txt-sml-s-dt">
                      Updated Successfully
                    </span>
                  </Col>
                )}
                <Col sm={updatedSchedule ? 4 : 12}>
                  <Button
                    className="float-right grn-btn"
                    onClick={() => {
                      handleShowEditEventSchedule(editorId);
                    }}
                    disabled={loading}
                  >
                    Edit
                  </Button>
                </Col>
              </Row>
            )}
          </Card.Title>
          {editingSchedule && !loading && (
            <div>
              <Formik
                onSubmit={handleEditEventSchedule}
                validationSchema={validationSchema}
                initialValues={{
                  editorId,
                  timezone: timezone ? timezone : "",
                  meetingLength,
                  spreadLength,
                  startDate: startDate && new Date(startDate),
                  endDate: endDate ? new Date(endDate) : addDays(new Date(), 2),
                  blackoutDate: blackoutDate.map((x, y) => ({
                    id: uuidv1(),
                    defaultDate: new Date(x),
                  })),
                  avMonday: monday,
                  avTuesday: tuesday,
                  avWednesday: wednesday,
                  avThursday: thursday,
                  avFriday: friday,
                  avSaturday: saturday,
                  avSunday: sunday,
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  errors,
                  values,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control
                        type="hidden"
                        name="editorId"
                        onChange={handleChange}
                        value={values.editorId}
                      />
                      <span className="validation-errors">
                        {errors.editorId}
                      </span>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Timezone</Form.Label>
                      <Form.Control
                        as="select"
                        name="timezone"
                        value={values.timezone}
                        onChange={handleChange}
                      >
                        <option value="">Select Timezone</option>
                        {timezones.map((x, y) => (
                          <option value={x} key={y}>
                            {x}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Start Date</Form.Label>
                      <Form.Text className="text-muted">
                        When your event should begin
                      </Form.Text>
                      <DatePicker
                        selected={startDateState}
                        name="startDate"
                        onChange={(date) => {
                          setStartDate(date);
                          setFieldValue("startDate", startDateState);
                        }}
                        minDate={new Date()}
                        showTimeSelect
                        timeFormat="h:mm aa"
                        timeIntervals={15}
                        timeCaption="time"
                        placeholderText="Select Start Date"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        value={values.startDate}
                      />
                      <span className="validation-errors">
                        {errors.startDate}
                      </span>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>End Date</Form.Label>
                      <Form.Text className="text-muted">
                        When your event should end
                      </Form.Text>
                      <DatePicker
                        selected={endDateState}
                        onChange={(date) => {
                          setEndDate(date);
                          setFieldValue("endDate", endDateState);
                        }}
                        minDate={subDays(new Date(), 1)}
                        name="endDate"
                        showTimeSelect
                        timeFormat="h:mm aa"
                        timeIntervals={15}
                        timeCaption="time"
                        placeholderText="Select End Date"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        isClearable
                        value={values.endDate}
                      />
                      <span className="validation-errors">
                        {errors.endDate}
                      </span>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Meeting Length</Form.Label>
                      <Row>
                        <Col>
                          <Field
                            type="checkbox"
                            label="15 minutes"
                            value="15 minutes"
                            name="meetingLength"
                            onChange={handleChange}
                          />{" "}
                          <Form.Label>15 minutes</Form.Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Field
                            type="checkbox"
                            label="30 minutes"
                            value="30 minutes"
                            name="meetingLength"
                            onChange={handleChange}
                          />{" "}
                          <Form.Label>30 minutes</Form.Label>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Field
                            type="checkbox"
                            label="60 minutes"
                            value="60 minutes"
                            name="meetingLength"
                            onChange={handleChange}
                          />{" "}
                          <Form.Label>60 minutes</Form.Label>
                        </Col>
                      </Row>
                      <span className="validation-errors">
                        {errors.meetingLength}
                      </span>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Spread Between every meeting</Form.Label>
                      <Row>
                        <Col>
                          <Field
                            type="radio"
                            label="15 minutes"
                            value="15 minutes"
                            name="spreadLength"
                            onChange={handleChange}
                          />{" "}
                          <Form.Label>15 minutes</Form.Label>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Field
                            type="radio"
                            label="30 minutes"
                            value="30 minutes"
                            name="spreadLength"
                            onChange={handleChange}
                          />{" "}
                          <Form.Label>30 minutes</Form.Label>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Field
                            type="radio"
                            label="60 minutes"
                            value="60 minutes"
                            name="spreadLength"
                            onChange={handleChange}
                          />{" "}
                          <Form.Label>60 minutes</Form.Label>
                        </Col>
                      </Row>
                      <span className="validation-errors">
                        {errors.spreadLength}
                      </span>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Times for schedule</Form.Label>
                      <Form.Text className="text-muted">
                        Options visitor will see
                      </Form.Text>
                      <Availability
                        handleChange={handleChange}
                        monday={values.avMonday}
                        tuesday={values.avTuesday}
                        wednesday={values.avWednesday}
                        thursday={values.avThursday}
                        friday={values.avFriday}
                        saturday={values.avSaturday}
                        sunday={values.avSunday}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Times for Blackout</Form.Label>
                      <Form.Text className="text-muted">
                        Days you do not want here
                      </Form.Text>

                      {blackoutDates.data.map((x, y) => (
                        <Fragment key={y}>
                          <Row>
                            <Col>
                              <DatePicker
                                selected={x.defaultDate}
                                name="blackoutDate"
                                onChange={(date) => {
                                  const data = blackoutDates.data;
                                  const dateIndex = data.findIndex(function (
                                    c
                                  ) {
                                    return c.id === x.id;
                                  });

                                  const updatedScheduleDate = update(
                                    data[dateIndex],
                                    {
                                      defaultDate: { $set: date },
                                    }
                                  );
                                  const newData = update(data, {
                                    $splice: [
                                      [dateIndex, 1, updatedScheduleDate],
                                    ],
                                  });
                                  setBlackoutDates({ data: newData });
                                  setFieldValue("blackoutDate", newData);
                                }}
                                minDate={new Date()}
                                placeholderText="Add blackout date"
                              />
                              <Button
                                variant="link"
                                onClick={() => {
                                  const data = blackoutDates.data;
                                  const dateIndex = data.findIndex(function (
                                    c
                                  ) {
                                    return c.id === x.id;
                                  });
                                  const newData = update(data, {
                                    $splice: [[dateIndex, 1]],
                                  });
                                  setBlackoutDates({ data: newData });
                                  setFieldValue("blackoutDate", newData);
                                }}
                              >
                                X
                              </Button>
                            </Col>
                          </Row>
                        </Fragment>
                      ))}
                      <span className="validation-errors">
                        {errors.blackoutDate}
                      </span>
                      <Button
                        variant="link"
                        onClick={handleOnClickBlackoutDateAdd}
                      >
                        Add Blackout date
                      </Button>
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="grn-btn"
                      disabled={loading}
                    >
                      Save
                    </Button>
                    <Button
                      variant="link"
                      onClick={handleCancelEditSchedule}
                      className="grn-txt-btn"
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default EditEventSchedulingForm;
