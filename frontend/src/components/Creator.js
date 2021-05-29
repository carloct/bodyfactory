import * as React from 'react'
import { Create, SimpleForm, TextInput } from 'ra-ui-materialui'


export const CreatorCreate = props => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  )
}