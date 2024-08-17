// Shadcn UI Select component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Formik Types
import { FormikFormProps, FormikHelpers } from 'formik';

interface SelectScrollableProps {
  options: { value: string; label: string }[] | undefined;
  label: string;
  name: string;
  title?: string;
  error?: string;
  touched?: boolean;
  setFieldValue: FormikHelpers<FormikFormProps>['setFieldError'];
}

export function SelectScrollable({
  options,
  title,
  label,
  name,
  error,
  touched,
  setFieldValue,
}: SelectScrollableProps) {
  const isError = error && touched;
  return (
    <>
      <label>
        <p className='text-text-primary font-medium text-sm mb-1'>{title}</p>
        <Select onValueChange={(value: string) => setFieldValue(name, value)}>
          <SelectTrigger className='w-full text-base text-[#8D9A9B] font-normal !outline-none !ring-0 '>
            <SelectValue placeholder={label} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options?.map(op => (
                <SelectItem
                  className='bg-white border text-[#8D9A9B] font-normal text-base cursor-pointer'
                  key={op.value}
                  value={op.value}
                >
                  {op.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {isError && <p className='text-error text-red text-xs'>{error}</p>}
      </label>
    </>
  );
}
