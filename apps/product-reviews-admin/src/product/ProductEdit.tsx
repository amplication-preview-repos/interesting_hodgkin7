import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReviewTitle } from "../review/ReviewTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="productDescription"
          multiline
          source="productDescription"
        />
        <TextInput label="productName" source="productName" />
        <NumberInput label="productPrice" source="productPrice" />
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
