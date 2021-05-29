import * as React from 'react'
import { FormWithRedirect, TextInput, ReferenceInput, SelectInput, ImageInput, ImageField, SaveButton, DeleteButton, FileInput, FileField, FormDataConsumer, Labeled } from 'react-admin'
import { Typography, Box, Toolbar } from "@material-ui/core"

const StyleForm = props => {
  return (
    <FormWithRedirect
      {...props}
      render={formProps => (
        <form>
          <Box p="1em">
            <Box display="flex">
              <Box flex={1} mr="1em">
                <Typography variant="h6" gutterBottom>Style</Typography>

                <Box display="flex">
                  <Box flex={1}>
                    <TextInput source="avatar" resource="styles" />
                  </Box>
                  <Box flex={1}>
                    <TextInput disabled label="ID" source="id" resource="styles" />
                  </Box>
                </Box>

                <Box display="flex">
                  <Box flex={1} mr="1em">
                    <ReferenceInput source="head" reference="heads" resource="styles" fullWidth>
                      <SelectInput optionText="name" />
                    </ReferenceInput>
                  </Box>
                  <Box flex={1} mr="1em">
                    <ReferenceInput source="body" reference="bodies" resource="styles" fullWidth>
                      <SelectInput optionText="name" />
                    </ReferenceInput>
                  </Box>
                </Box>

                <Box display="flex">
                  <Box flex={2}>
                    <ImageInput source="head_skin" label="Head skin" accept="image/*">
                      <ImageField source="src" title="title" />
                    </ImageInput>
                  </Box>
                </Box>

                <Box display="flex">
                  <Box flex={2}>
                    <ImageInput source="upper_skin" label="Upper skin" accept="image/*">
                      <ImageField source="src" title="title" />
                    </ImageInput>
                  </Box>
                </Box>

                <Box display="flex">
                  <Box flex={2}>
                    <ImageInput source="lower_skin" label="Lower skin" accept="image/*">
                      <ImageField source="src" title="title" />
                    </ImageInput>
                  </Box>
                </Box>

                <Box display="flex">
                  <Box flex={2}>
                    <FileInput source="shape" label="Shape" accept="application/xml">
                      <FileField source="src" title="title" />
                    </FileInput>
                  </Box>
                </Box>
              </Box>


              
              <Box flex={2} ml="1em">
                <Typography variant="h6">Info</Typography>

                <FormDataConsumer>
                  {({formData, dispatch, ...rest}) => {
                      console.log(formData);
                      if (!formData.contents) {
                            return (
                                <Labeled label="Items">
                                    <ImageField source="items_list.url" {...rest}/>
                                </Labeled>
                            );
                        }
                    }}
                </FormDataConsumer>

                <Box display="flex">
                  <Box flex={2}>
                    <ImageInput source="items_list" label="Items list" accept="image/*">
                      <ImageField source="src" title="title" />
                    </ImageInput>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box flex={2}>
                    <ImageInput source="images" label="Images" accept="image/*" multiple>
                      <ImageField source="src" title="title" />
                    </ImageInput>
                  </Box>
                </Box>

              </Box>
            </Box>
          </Box>
          <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%">
              <SaveButton
                saving={formProps.saving}
                handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                />
                <DeleteButton record={formProps.record} />
            </Box>
          </Toolbar>
        </form>
      )} />
  )
}

export default StyleForm;