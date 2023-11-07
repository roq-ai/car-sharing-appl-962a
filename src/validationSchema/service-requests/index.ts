import * as yup from 'yup';

export const serviceRequestValidationSchema = yup.object().shape({
  request_type: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
