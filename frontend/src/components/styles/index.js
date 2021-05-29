import * as React from 'react'
import { Create, ImageInput, SimpleForm, TextInput, ImageField, ReferenceInput, SelectInput, Edit, List, Datagrid, TextField, ReferenceField, EditButton } from 'ra-ui-materialui'
import StyleForm from '../forms/StyleForm'


export const StyleList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="avatar" />
        <ReferenceField label="Head" source="head[id]" reference="heads">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="Body" source="body[id]" reference="bodies">
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  )
}

export const StyleCreate = props => {
  return (
    <Create {...props}>
      <StyleForm />
      {/* <SimpleForm>
        <TextInput source="avatar" />
        <ReferenceInput source="head_id" reference="heads">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="body_id" reference="bodies">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ImageInput source="items" label="Items" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm> */}
    </Create>
  )
}

export const StyleEdit = (props) => {
  return (
    <Edit {...props}>
      <StyleForm />
      {/* <SimpleForm>
        <TextInput disabled label="ID" source="id" />
        <TextInput source="avatar"  />
        <ReferenceInput source="head" reference="heads">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="body" reference="bodies">
          <SelectInput optionText="name" />
        </ReferenceInput>
      </SimpleForm> */}
    </Edit>
  )
}