import React from "react";
import { Table, Form } from "react-bootstrap";
import hours from "../../../config/times";

const Availability = ({
  handleChange,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Group>
                <Form.Control
                  as="select"
                  multiple
                  name="avMonday"
                  className="avl-slct"
                  onChange={handleChange}
                  value={monday}
                >
                  {hours.map((x, y) => (
                    <option value={x.value} key={y}>
                      {x.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control
                  as="select"
                  multiple
                  name="avTuesday"
                  className="avl-slct"
                  onChange={handleChange}
                  value={tuesday}
                >
                  {hours.map((x, y) => (
                    <option value={x.value} key={y}>
                      {x.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control
                  as="select"
                  multiple
                  name="avWednesday"
                  className="avl-slct"
                  onChange={handleChange}
                  value={wednesday}
                >
                  {hours.map((x, y) => (
                    <option value={x.value} key={y}>
                      {x.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control
                  as="select"
                  multiple
                  name="avThursday"
                  className="avl-slct"
                  onChange={handleChange}
                  value={thursday}
                >
                  {hours.map((x, y) => (
                    <option value={x.value} key={y}>
                      {x.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control
                  as="select"
                  multiple
                  name="avFriday"
                  className="avl-slct"
                  onChange={handleChange}
                  value={friday}
                >
                  {hours.map((x, y) => (
                    <option value={x.value} key={y}>
                      {x.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control
                  as="select"
                  multiple
                  name="avSaturday"
                  className="avl-slct"
                  onChange={handleChange}
                  value={saturday}
                >
                  {hours.map((x, y) => (
                    <option value={x.value} key={y}>
                      {x.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control
                  as="select"
                  multiple
                  name="avSunday"
                  className="avl-slct"
                  onChange={handleChange}
                  value={sunday}
                >
                  {hours.map((x, y) => (
                    <option value={x.value} key={y}>
                      {x.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Availability;
