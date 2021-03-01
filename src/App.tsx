import React from "react";
import "antd/dist/antd.css";
import { FieldArray, Formik } from "formik";
import { DatePicker, Form, Input, Radio, Select } from "formik-antd";
import "./styles.css";
import { Button } from "antd";

// TODO Components to have
// - ✅ text input
// - radio
// - Select
// - Lists
// - Date
// - ✅ Hidden fields

export default function App() {
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
        render={({ values }) => (
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
                        <Input name={`friends.${index}`} />
                      ))}
                    <Button onClick={() => arrayHelper.push("")}>Add</Button>
                  </div>
                )}
              />
            </label>
            <Button htmlType="submit"> Submit </Button>
          </Form>
        )}
        onSubmit={(values) => {
          console.log("values::", values);
        }}
      />
    </div>
  );
}
