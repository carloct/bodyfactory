import * as React from 'react'
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'ra-ui-materialui'


export const BodyCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="creatorId" reference="creators">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  )
}