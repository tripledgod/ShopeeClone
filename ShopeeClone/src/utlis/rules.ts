import * as yup from 'yup'
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'email không đúng định dạng '
    },
    maxLength: {
      value: 160,
      message: ' Độ dài từ 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: ' Độ dài từ 5-160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'chưa điền mật khẩu'
    },
    maxLength: {
      value: 160,
      message: ' Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: ' Độ dài từ 6-160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu'
    },

    maxLength: {
      value: 160,
      message: ' Độ dài từ 6-160 ký tự'
    },
    minLength: {
      value: 6,
      message: ' Độ dài từ 6-160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại mật khẩu không đúng'
        : undefined
  }
})
export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài tư 5 đến 160 ký tự')
    .max(160, 'Độ dài từ 5 đến 160 ký tự'),
  password: yup
    .string()
    .required('password là bắt buộc')
    .min(6, 'Độ dài từ 6-160 ký tự')
    .max(160, 'Độ dài từ 6-160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6-160 ký tự')
    .max(160, 'Độ dài từ 6-160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  // price_min: yup.string().test({
  //   name: 'price-not-allowed',
  //   message: 'Giá không phù hợp',
  //   test: testPriceMinMax
  // }),
  // price_max: yup.string().test({
  //   name: 'price-not-allowed',
  //   message: 'Giá không phù hợp',
  //   test: testPriceMinMax
  // }),
  name: yup.string().trim().required('Tên sản phẩm là bắt buộc')
})
const loginSchema = schema.omit(['confirm_password'])
type loginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
