import {
  AdHeading,
  AdTitle,
  FormSection,
  FormHeading,
  SplitRow,
  FormRow,
  Star,
  Label,
  Input,
  Textarea,
  SubmitBtn,
} from "./PostElements";

const PostService = () => {
  return (
    <>
      <AdHeading>
        <AdTitle>Post your service</AdTitle>
      </AdHeading>
      <FormSection>
        <form>
          <FormHeading>About your service</FormHeading>
          <FormRow>
            <Label>
              Company Name<Star>*</Star>
            </Label>
            <Input type='text' />
          </FormRow>
          <FormRow>
            <Label>
              Description<Star>*</Star>
            </Label>
            <Textarea></Textarea>
          </FormRow>
          <FormHeading>Address</FormHeading>
          <SplitRow>
            <FormRow>
              <Label>Plot no</Label>
              <Input type='text' />
            </FormRow>
            <FormRow>
              <Label>
                Street<Star>*</Star>
              </Label>
              <Input type='text' />
            </FormRow>
          </SplitRow>
          <SplitRow>
            <FormRow>
              <Label>
                Area<Star>*</Star>
              </Label>
              <Input type='text' />
            </FormRow>
            <FormRow>
              <Label>
                City<Star>*</Star>
              </Label>
              <Input type='text' />
            </FormRow>
          </SplitRow>
          <SplitRow>
            <FormRow>
              <Label>
                State<Star>*</Star>
              </Label>
              <Input type='text' />
            </FormRow>
            <FormRow>
              <Label>
                Pincode<Star>*</Star>
              </Label>
              <Input type='text' />
            </FormRow>
          </SplitRow>
          <FormRow>
            <Label>
              Country<Star>*</Star>
            </Label>
            <Input type='text' style={{ width: "30%" }} />
          </FormRow>
          <FormRow>
            <SubmitBtn type='submit'>Submit</SubmitBtn>
          </FormRow>
        </form>
      </FormSection>
    </>
  );
};

export default PostService;
