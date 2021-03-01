import React from "react";
import "antd/dist/antd.css";
import { FieldArray, Formik } from "formik";
import { DatePicker, Form, Input, Radio, Select } from "formik-antd";
import "./styles.css";
import { Button } from "antd";
import * as yup from "yup";

export default function App() {
  const validationSchema = yup.object().shape({
    name: yup.string().min(2, "tpp short!").required()
  });
  return (
    <div className="App">
      <Formik
        initialValues={{
          id: "10",
          name: "",
          gender: "",
          role: "",
          birthday: "",
          friends: ["rick"]
        }}
        onSubmit={(values) => {
          console.log("values::", values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched }) => (
          <Form>
            <Input name="id" hidden />
            <label>
              name:
              <Input name="name" />
            </label>
            <label>
              gender:
              <Radio.Group name="gender">
                <Radio name="gender" value="Men">
                  Men
                </Radio>
                <Radio name="gender" value="Women">
                  Woman
                </Radio>
                <Radio name="gender" value="Other">
                  Other
                </Radio>
              </Radio.Group>
            </label>

            <label>
              Role:
              <Select name="role">
                <Select.Option value="Admin">Admin</Select.Option>
                <Select.Option value="normal_user">Normal User</Select.Option>
              </Select>
            </label>

            <label>
              Birthday
              <DatePicker name="birthday" />
            </label>

            <label>
              Friends name:
              <FieldArray
                name="friends"
                render={(arrayHelper) => (
                  <div>
                    {values.friends &&
                      values.friends.map((friend, index) => (
                        <Input
                          key={`friends.${index}`}
                          name={`friends.${index}`}
                        />
                      ))}
                    <pre>ERRORS:{JSON.stringify(errors, null, 2)}</pre>
                    <pre>Touched:{JSON.stringify(touched, null, 2)}</pre>
                    <Button onClick={() => arrayHelper.push("")}>Add</Button>
                  </div>
                )}
              />
            </label>
            <Button htmlType="submit"> Submit </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
